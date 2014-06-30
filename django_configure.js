Template.configureLoginServiceDialogForDjango.siteUrl = function () {
  return Meteor.absoluteUrl();
};

Template.configureLoginServiceDialogForDjango.fields = function () {
  return [
    { property: 'clientId', label: 'Client ID' },
    { property: 'secret', label: 'Client Secret' },
    { property: 'tokenUrl', label: 'Token URL' },
    { property: 'loginUrl', label: 'Login URL' },
    { property: 'identityUrl', label: 'Identity URL' },
  ];
};
