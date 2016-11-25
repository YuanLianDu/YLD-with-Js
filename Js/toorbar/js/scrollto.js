/**
 * Created by yuan on 16/11/24.
 */

define(['jquery'],function($){

    //构造方法
    function ScrollTo(options) {
        //jquery方法，生成一个新的对象，并为其赋值，如果传参为空，设为默认值
        this.options = $.extend({},ScrollTo.DEFAULTS,options);
        this.ele =   $('html,body');
    }

    // 属性赋值方法
    ScrollTo.prototype.move = function () {

        var dest = this.options.destination,
            speed = this.options.speed;

        if($(window).scrollTop() != dest && !this.ele.is(":animated")) {
            this.ele.animate({
                scrollTop:dest
            },speed);
        }

    };

    // 属性赋值方法
    ScrollTo.prototype.go = function () {
        if($(window).scrollTop() != this.options.destination) {
            this.ele.scrollTop(this.options.destination);
        }
    }

    //默认值
    ScrollTo.DEFAULTS = {
        destination: 0,
        speed: 8000
    };


    return {
        ScrollTo: ScrollTo
    };
});
