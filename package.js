Package.describe({
  summary: "Login service for Django accounts"
});

Package.on_use(function(api) {
  api.use('oauth', ['client', 'server']);
  api.use('oauth2', ['client', 'server']);
  api.use('http', ['client', 'server']);
  api.use('templating', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.export('Django');

  api.add_files(
    ['django_configure.html', 'django_configure.js'],
    'client');

  api.add_files('django_common.js', ['client', 'server']);
  api.add_files('django_server.js', 'server');
  api.add_files('django_client.js', 'client');
});
