import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-vars": "off",

    },
    overrides: [
      {
        files: ["./src/components/ui/**/*.{ts,tsx}"],
        rules: {
          "@typescript-eslint/no-empty-object-type": "off",
          "@typescript-eslint/no-unused-vars": "off",
        },
      },
    ],
  },
};

export default withNextIntl(nextConfig);
