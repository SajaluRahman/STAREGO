import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent MIME type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Prevent clickjacking
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // XSS protection for older browsers
  { key: "X-XSS-Protection", value: "1; mode=block" },
  // Referrer policy — don't leak URL paths to third parties
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Permissions policy — disable unused powerful APIs
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  },
  // HSTS — force HTTPS for 1 year
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // Content Security Policy — tightened for this site
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js inline scripts + framer-motion need 'unsafe-inline'; lock down with nonces in prod if possible
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      // Images: allow self, data URIs, and unsplash (configured in remotePatterns)
      "img-src 'self' data: blob: https://images.unsplash.com",
      // WhatsApp redirect
      "connect-src 'self' https://api.resend.com https://www.google-analytics.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self' https://wa.me",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // ── Security headers on every response ──────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // ── Images ──────────────────────────────────────────────────────────────
  images: {
    // Use AVIF first (smallest), then WebP for browsers that don't support AVIF
    formats: ["image/avif", "image/webp"],
    // Cache optimised images for 60 days (default is 60 seconds)
    minimumCacheTTL: 60 * 60 * 24 * 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Prevent unbounded disk-cache growth (CVE mitigation)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // ── Compiler ─────────────────────────────────────────────────────────────
  compiler: {
    // Strip console.* in production
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ── Compression ──────────────────────────────────────────────────────────
  compress: true,

  // ── Power-user perf flags ────────────────────────────────────────────────
  experimental: {
    // Pre-render pages that have no dynamic data at build time
    // (already done by default; this ensures it stays on)
    optimizeCss: true,
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://starego.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
