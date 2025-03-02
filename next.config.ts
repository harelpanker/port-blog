import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.graphassets.com',
			},
		],
		// Deprecate domain after asset migration
		domains: ['media.graphassets.com'],
	},
};

export default nextConfig;
