+function($) {

    'use strict';

    function createForumTableContent(forums) {

        var content = '<tr><td>Name</td><td>Category</td><td>Threads</td></tr>';

        var result = '';

        forums.forEach(f => {
            result += content.replace('Name', f.name)
                .replace('Category', f.category)
                .replace('Threads', f.threads);
        });

        return result;
    }

    $.get('http://localhost:8080/forums', function(response, status, jqXHR) {

        if (status === 'success') {

            $('#forumTable tbody').html(createForumTableContent(response));

        }

    }, 'json');

}(jQuery);