/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: true,
	env: {
		APP_URL: process.env.REACT_APP_URL
	},
	images:{
		domains: ['localhost']
	},

	async rewrites(){
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:4000/api/:path*'
			},
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:3000/uploads/:path*'
			}
		]
	}
};

export default nextConfig;
