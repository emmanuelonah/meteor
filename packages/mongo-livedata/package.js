Package.describe({
  summary: "Moved to the 'mongo' package",
  version: '2.0.0-alpha300.6',
});

Package.onUse(function (api) {
  api.imply("mongo");
});
