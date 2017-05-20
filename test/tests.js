+function($) {

    'use strict';

    $.mockjax({
        url: "http://localhost:8080/forums",

        type: 'get',

        responseText: [{name: "forum1", category: "c1", threads: 0}],

        onAfterSuccess: function() {

            console.log(this.responseText);
        }
    });



}(jQuery);