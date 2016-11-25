/**
 * Created by yuan on 16/11/24.
 */

define(['jquery','scrollto'],function ($,scrollto) {

    function BackTop(el,opts) {
        this.opts = $.extend({},BackTop.DEFAULTS,opts);
        this.$el = $(el);
        this.scroll = new scrollto.ScrollTo({
            destination: 0,
            speed: 8000
        });
        if(this.opts.mode == 'move') {
            console.log(11);
            this.$el.on('click',$.proxy(this._move,this));
        }else {
            console.log(22);
            this.$el.on('click',$.proxy(this._go,this));
        }

        $(window).on('scroll',$.proxy(this._checkPosition,this));
    }

    BackTop.DEFAULTS = {
        mode: 'move',
        pos:$(window).height()
    }

    BackTop.prototype._move = function (){
        this.scroll.move();
    }

    BackTop.prototype._go = function (){
        this.scroll.go();
    }

    BackTop.prototype._checkPosition = function (){

        var el = this.$el;
        if($(window).scrollTop() >  this.opts.pos) {
            el.fadeIn();
        }else {
            el.fadeOut();
        }
    }


    return {
        BackTop: BackTop
    };
});