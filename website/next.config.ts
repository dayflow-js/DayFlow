import type { NextConfig } from "next";
import nextra from 'nextra';

const withNextra = nextra({
  // Nextra 4 configuration
  search: false, // Disable search to fix React 19 ref error
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextra(nextConfig);
