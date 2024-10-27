import type { NextConfig } from "next";
const dotenv = require('dotenv');
dotenv.config();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["tailwindui.com"]
  },
  env: {
    USER_ID: process.env.PROJECT_NAME,
  },
};

export default nextConfig;
