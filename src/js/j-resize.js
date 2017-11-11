/**
*   name:   j-resize 0.1.0
*   author: ReAlign
*   date:   2017-11-11
*/
(function(jr) {
    jr.fn.jResize = function(options) {
        var defaults = {
            minW: 100,
            minH: 100,
            maxW: 300,
            maxH: 300
        };
        var opts = jr.extend(defaults, options);

        this.each(function() {
            var obj = jr(this);
            obj.mousedown(function(e) {
                var e = e || event;
                var x = e.pageX - obj.position().left;
                var y = e.pageY - obj.position().top;
                $(document).mousemove(function(e) {
                    var e = e || event;
                    var _x = e.pageX - x;
                    var _y = e.pageY - y;
                    _x = _x < opts.minW ? opts.minW: _x;
                    _x = _x > opts.maxW ? opts.maxW: _x;
                    _y = _y < opts.minH ? opts.minH: _y;
                    _y = _y > opts.maxH ? opts.maxH: _y;
                    obj.parent().css({
                        width: _x,
                        height: _y
                    });
                }).mouseup(function() {
                    $(this).unbind("mousemove");
                });
            });
        });
    };
})(jQuery);