require(["views/LoginView"], function(LoginView){
	
	describe("Given a login view it", function(){
		var loginView = null;
		
		beforeEach(function(){
			loginView = LoginView.create();
			
			Ember.run(function(){
				loginView.append();
			});	
		});
		
		afterEach(function(){
			Ember.run(function(){
				loginView.remove();
			});
			loginView = null;
		});
		
		
		it("Should be defined", function(){
			expect(loginView).toBeDefined();
		});
		
		it ("Should have a user property", function(){
			expect(loginView.get("user")).toBeDefined();
		});
		
		describe("Should have a template and it", function(){
		
			it("Should have an user input", function(){
				expect(loginView.$("input.userInput").length).toEqual(1);
			});
			
			it("Should bind the email to the user.email", function(){
				Ember.run(function(){
					loginView.set("user", Em.Object.create({name:"mockValue"}));
				});
				expect(loginView.$("input.userInput").val()).toEqual("mockValue");	
			});
			
			it("Should have an password input", function(){
				expect(loginView.$("input.passInput[type='password']").length).toEqual(1);
			});
			
			it("Should bind the password input to the user.password", function(){
				Ember.run(function(){
					loginView.set("user", Em.Object.create({password:"mockValue"}));
				});
				expect(loginView.$("input.passInput").val()).toEqual("mockValue");	
			});
			
			it("Should have a login button", function(){
				expect(loginView.$("button.loginButton").length).toEqual(1);
			});
			
	
		});
		
	});


});

