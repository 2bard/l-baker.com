requirejs.config({
	shim: {
        'libs/paper_nightly' : {
        	exports: 'paper'
        },

        'fun/cube' : {
            deps: ['libs/paper_nightly', 'libs/jquery']
        },

    },
});



require(["libs/jquery","libs/paper_nightly","fun/cube"], function(paper_nightly) {

});