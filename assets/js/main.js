requirejs.config({
	shim: {
        'libs/paper_nightly' : {
        	exports: 'paper'
        },

        'fun/cube/cube' : {
            deps: ['libs/paper_nightly']
        },

    },
});



require(["libs/paper_nightly","fun/cube/cube"], function(paper_nightly) {

});