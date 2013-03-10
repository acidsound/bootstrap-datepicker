Package.describe({
  summary: 'Meteor packaging of bootstrap-datepicker'
});

Package.on_use(function (api, where) {
  api.add_files('lib/bootstrap-datepicker/js/bootstrap-datepicker.js', 'client');
  api.add_files('lib/bootstrap-datepicker/css/datepicker.css', 'client');
  api.add_files('lib/bootstrap-datepicker/css/datepicker.css', 'client');
});
