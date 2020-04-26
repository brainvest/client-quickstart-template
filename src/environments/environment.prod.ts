export const environment = {
	production: false,
	apiServerRoot:  '/adminapi/',
    clientRoot: '/admin/',
	auth: {
		authority: 'https://my.enjoyn.ai/auth/',
		redirect_uri: 'https://my.enjoyn.ai/admin/auth-callback',
		post_logout_redirect_uri: 'https://my.enjoyn.ai/admin/',
		silent_redirect_uri: 'https://my.enjoyn.ai/admin/oidc-silent-refresh/index.html',
		client_id: 'invoice'
	},
};
