import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Simple HTML-escape to prevent injection in email body
function escHtml(str: unknown): string {
  if (str === null || str === undefined) return 'N/A';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const body = await req.json();
    const { name, phone, vehicle, passengers, package: pkg, message } = body;

    // Basic validation — name and phone are required
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Invalid name' }, { status: 400 });
    }
    if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
      return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 });
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      // NOTE: To use noreply@starego.in, first verify starego.in in your Resend dashboard.
      // Until then, onboarding@resend.dev works for testing.
      from: 'Starego Enquiry <noreply@starego.in>',
      to: ['knoushid16@gmail.com'],
      replyTo: escHtml(phone).includes('@') ? phone : undefined,
      subject: `New Booking Enquiry from ${escHtml(name)} — starego.in`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden">
          <div style="background:#f59e0b;padding:20px 28px">
            <h2 style="margin:0;color:#000;font-size:20px">New Travel Enquiry — starego.in</h2>
          </div>
          <div style="padding:28px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#555;width:160px"><strong>Name</strong></td><td style="padding:8px 0">${escHtml(name)}</td></tr>
              <tr><td style="padding:8px 0;color:#555"><strong>Phone</strong></td><td style="padding:8px 0">${escHtml(phone)}</td></tr>
              <tr><td style="padding:8px 0;color:#555"><strong>Vehicle</strong></td><td style="padding:8px 0">${escHtml(vehicle) || 'No Preference'}</td></tr>
              <tr><td style="padding:8px 0;color:#555"><strong>Passengers</strong></td><td style="padding:8px 0">${escHtml(passengers) || 'Not specified'}</td></tr>
              <tr><td style="padding:8px 0;color:#555"><strong>Package</strong></td><td style="padding:8px 0">${escHtml(pkg)}</td></tr>
              <tr><td style="padding:8px 0;color:#555;vertical-align:top"><strong>Message</strong></td><td style="padding:8px 0">${escHtml(message)}</td></tr>
            </table>
          </div>
          <div style="background:#fafafa;padding:16px 28px;font-size:12px;color:#999">
            Sent from starego.in contact form
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message || 'Email delivery failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
