define(["views/LoginView","ember"],function(LoginView){
	var app = Em.Application.create();
	app.LoginView = LoginView;
	return window.App = app;
});