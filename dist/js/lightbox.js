$(function() {
    function resetModal() {
        $('#targetBody').attr('data-current', '');
        $('#targetBody').html('');
        $('.player-caption p').text('');

    }
    $('.close-modal').click(function() {
        $('.player-wrap').fadeOut(300);
    })

    function executeGallery() {
        $('.gallery-thumb').each(function() {
            $('.prev-btn').show();
            $('.next-btn').show();
            var getGalleryType = $(this).attr('data-image');
            var getGalleryData = $(this).attr('data-src');
            if (getGalleryType == 'img') {
                $(this).append('<img id="#modal-img" src="' + getGalleryData + '" style="width:120px;height:120x;">');
            } else if (getGalleryType == 'video') {
                $(this).append('<video id="#modal-video" src="' + getGalleryData + '" style="width:120px;height:120px;">');
            }
        });
    }
    executeGallery();
    var getGSize = $('.gallery-menu li').size();
    $('.gallery-thumb').click(function() {

        var indexgl = $(".gallery-thumb").index(this);
        var prevId = indexgl - 1;
        var nextId = indexgl + 1;
        $('.player-wrap').fadeIn(300);
        $('.loader').delay(1000).fadeOut('fast');
        var getData = $(this).attr('data-src');
        var getType = $(this).attr('data-image');
        var getModaId = $(this).attr('id');
        var title = $(this).attr('title');
        $('.prev-btn').show();
        $('.next-btn').show();
        if (indexgl == 0) {
            $('.prev-btn').hide();
        } else if (indexgl == getGSize - 1) {
            $('.next-btn').hide();
        }
        if (getType == 'img') {
            resetModal();

            $('#targetBody').append('<img id="#modal-img" src="' + getData + '" style="width:100%;height:auto;">');
            $('#targetBody').attr('data-current', '#' + getModaId);
            $('.player-caption p').text(title);
            $('.prev-btn').attr('go-prev', prevId);
            $('.next-btn').attr('go-next', nextId);


        } else if (getType == 'video') {
            resetModal();
            $('#targetBody').append('<video id="#modal-video" src="' + getData + '" style="width:100%;height:auto;" controls>');
            $('#targetBody').attr('data-current', '#' + getModaId);
            $('.player-caption p').text(title);
            $('.prev-btn').attr('go-prev', prevId);
            $('.next-btn').attr('go-next', nextId);

        }
    });

    $('body').on('click', '.next-btn', function() {
        resetModal();
        var getlinkNId = $(this).attr('go-next');
        var getlinkPId = $('.prev-btn').attr('go-prev');
        var getNextData = $('#li-' + getlinkNId).attr('data-src');
        var getNextType = $('#li-' + getlinkNId).attr('data-image');
        var title = $('#li-' + getlinkNId).attr('title');
        var sndlast = parseInt(getGSize) - 1;
        if (getNextType == 'img') {
            resetModal();
            $('.loader').show();
            $('.loader').delay(2000).fadeOut('fast');

            $('#targetBody').append('<img id="#modal-img" src="' + getNextData + '" style="width:100%;height:auto;">');
            $('.next-btn').attr('go-next', parseInt(getlinkNId) + 1);
            $('.prev-btn').attr('go-prev', parseInt(getlinkPId) + 1);
            $('.player-caption p').text(title);
            $('.prev-btn').show();
            $('.next-btn').show();
            if (getlinkNId >= sndlast) {
                $('.next-btn').hide();
            }

        } else if (getNextType == 'video') {
            resetModal();
            $('.loader').show();
            $('.loader').delay(2000).fadeOut('fast');
            $('#targetBody').append('<video id="#modal-video" src="' + getNextData + '" style="width:100%;height:auto;" controls>');
            $('.next-btn').attr('go-next', parseInt(getlinkNId) + 1);
            $('.prev-btn').attr('go-prev', parseInt(getlinkPId) + 1);
            $('.player-caption p').text(title);
            $('.prev-btn').show();
            $('.next-btn').show();
            if (getlinkNId >= sndlast) {
                $('.next-btn').hide();
            }


        }

    });

    $('body').on('click', '.prev-btn', function() {
        resetModal();
        var getlinkPId = $(this).attr('go-prev');
        var getlinkNId = $('.next-btn').attr('go-next');
        var getPrevData = $('#li-' + getlinkPId).attr('data-src');
        var getPrevType = $('#li-' + getlinkPId).attr('data-image');
        var title = $('#li-' + getlinkPId).attr('title');
        if (getPrevType == 'img') {
            resetModal();
            $('.loader').show();
            $('.loader').delay(2000).fadeOut('fast');
            $('#targetBody').append('<img id="#modal-img" src="' + getPrevData + '" style="width:100%;height:auto;">');
            $('.prev-btn').attr('go-prev', parseInt(getlinkPId) - 1);
            $('.next-btn').attr('go-next', parseInt(getlinkNId) - 1);
            $('.player-caption p').text(title);
            $('.prev-btn').show();
            $('.next-btn').show();
            if (getlinkPId == 0) {
                $('.prev-btn').hide();
            }

        } else if (getPrevType == 'video') {
            resetModal();
            $('.loader').show();
            $('.loader').delay(2000).fadeOut('fast');
            $('#targetBody').append('<video id="#modal-video" src="' + getPrevData + '" style="width:100%;height:auto;" controls>');
            $('.prev-btn').attr('go-prev', parseInt(getlinkPId) - 1);
            $('.next-btn').attr('go-next', parseInt(getlinkNId) - 1);
            $('.player-caption p').text(title);
            $('.prev-btn').show();
            $('.next-btn').show();
            if (getlinkPId == 0) {
                $('.prev-btn').hide();
            }
        }
    });
});