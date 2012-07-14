require(["App"],function(){
	
	describe("Given an application it", function(){
		
		it ("Should be defined", function(){
			expect(App).toBeDefined();
		});
		
		it ("its login view should be defined", function(){
			expect(App.LoginView).toBeDefined();
		});
	});
});
