define(["text!templates/LoginView.handlebars","ember"],function(LoginTemplate){

	var loginView = Em.View.extend({
		template: Em.Handlebars.compile(LoginTemplate),
		user: null
	});
	
	 return loginView;
});