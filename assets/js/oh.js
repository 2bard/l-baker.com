requirejs.config({
	shim: {
        'libs/paper_nightly' : {
        	exports: 'paper'
        },

        'fun/oh' : {
            deps: ['libs/paper_nightly']
        },

    },
});



require(["libs/paper_nightly","fun/oh"], function(paper_nightly) {

});