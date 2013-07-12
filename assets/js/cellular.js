requirejs.config({
	shim: {
        'libs/paper_nightly' : {
        	exports: 'paper'
        },

        'fun/cellular/cellular' : {
            deps: ['libs/paper_nightly']
        },

    },
});



require(["libs/paper_nightly","fun/cellular/cellular"], function(paper_nightly) {

});