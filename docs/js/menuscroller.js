$(function() {
    $.fn.menuScroller = function() {
        var __parent = $(this).find('ul');
        $(__parent).attr('id', 'scrollerMenu');
        $('#scrollerMenu').attr('draggable', false);
        var __parent = $(this).find('ul');
        var wrapperWidth = $(this).outerWidth();
        var wrapperLeft = $(this).offset().left;
        var _scale = 0;
        var ele = wrapperWidth + wrapperLeft;
        var _menuItem = $(this).find('li');

        $(_menuItem).click(function() {
            var _listsize = parseInt($(_menuItem).size());
            var _thisIndex = parseInt($(_menuItem).index(this) + 1);
            var outerWidth = $(this).outerWidth();
            var outerLeft = $(this).offset().left;
            var elePos = outerLeft + outerWidth;
            if (wrapperLeft + outerWidth > outerLeft) {
                if (_thisIndex == 1) {
                    outerWidth = _scale;
                }
                _scale = _scale - outerWidth;
                $(__parent).attr('current-translate', _scale);
                $(__parent).css({
                    'transform': "translateX(-" + _scale + "px)"
                });
            }
            if (elePos > ele - outerWidth) {
                if (_listsize == _thisIndex) {
                    outerWidth = elePos - ele;
                }
                _scale = outerWidth + _scale;
                $(__parent).attr('current-translate', _scale);
                $(__parent).css({
                    'transform': "translateX(-" + _scale + "px)"
                });
            }
        });
    }
});