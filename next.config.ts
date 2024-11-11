import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  env: {
    EVOLUTION_KEY:'iUfxkHmsBpcPhXXGKyJd9lteUCHYCk0z',
    WEBHOOK_URL:'https://api.homio.com.br/webhook/qrcode'
  },
}
export default nextConfig;
