+function($) {

    'use strict';

    $.mockjax({
        url: "http://localhost:8080/forums",

        type: 'get',

        responseText: [{name: "forum1"}],

        onAfterSuccess: function() {

            //this.responseText = '[{"name":"f1", "category": "c1", "threads": 1}]';

            console.log('success');
        }
    });



}(jQuery);