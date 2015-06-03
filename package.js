Package.describe({
  name: 'poeticsystems:accounts-passwordless',
  version: '0.0.3',
  summary: 'create and login users without requiring a password',
  git: 'https://github.com/poetic/accounts-passwordless',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('accounts-base', ['client', 'server']);

  api.addFiles('server/login-config.js', 'server');
  api.addFiles('server/send-login-email.js', 'server');
  api.addFiles('server/find-user-by-token.js', 'server');
  api.addFiles('client/init-url-matching.js', 'client');
});

Package.onTest(function(api){});
