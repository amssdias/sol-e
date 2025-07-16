import path from 'path';

export default {
	base: "/sol-e/",
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	server: {
		host: '0.0.0.0',
		port: 5173,
		allowedHosts: ['0dd5e355ca91.ngrok-free.app']
	}
};
