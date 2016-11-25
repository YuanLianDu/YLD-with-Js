/**
 * Created by yuan on 16/11/23.
 */


requirejs.config({
    paths: {
        jquery: 'jquery-3.1.1.min'
    },
});


requirejs(['jquery', 'backtop'], function ($, backtop) {

    new backtop.BackTop($('#backTop'), {
        mode: 'move'
    });
});
