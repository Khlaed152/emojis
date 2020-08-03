$(function () {
    
    $('.cbalink').remove();
    
    var emojisEditor1 = $('.form-post .editor-with-emojis').emojis({
        "srcFileEmojis": 'images/emojitions',
        "imageExt": 'png',
        "showBtnEmojis": true,
        "autoDirection": true,
        "saveRecentlySent": true,
        "openCategory": 'auto'
    }),
        defaultDirEditor = $('.form-post .editor-with-emojis .editor-post').attr('data-direction'),
        dirCssEditor = defaultDirEditor == 'rtl' ? 'left' : 'right',
        otherDirEditor = dirCssEditor == 'left' ? 'right' : 'left',
        AllPosts = [],
        newPost = function (content, date, dir) { 
            return '<div class="post">' + 
                    '<div class="header">' +
                        date + 
                    '</div>' +
                    '<div class="content" dir="'+ dir +'">' +
                        content +
                    '</div>' +
                    '<div class="footer"> <button type="button" tabindex="-1">Like</button> <button type="button" tabindex="-1">Comment</button> <button type="button" tabindex="-1">Share</button> </div>' + 
                '</div>';
        },
        eleAllposts = $('.show-all-posts'),
        btnSubmit = $('.form-post .submit'),
        showError = $('.form-post .show-error'),
        editorPost = $('.form-post .editor-with-emojis .editor-post'),
        loadingPosts = eleAllposts.find('.loading');
    
    $('.form-post .editor-with-emojis .btn-show-emojis').css(dirCssEditor, 0).css(otherDirEditor, 'auto');
    editorPost.on('input', function () {
        var dir = emojisEditor1.getDir(),
            defaultDir = $(this).attr('data-direction'),
            finalDir = $(this).text().trim().length ? dir : defaultDir,
            dirCss = finalDir == 'rtl' ? 'left' : 'right',
            otherDir = dirCss == 'left' ? 'right' : 'left';
        
        $('.form-post .editor-with-emojis .btn-show-emojis').css(dirCss, 0).css(otherDir, 'auto');
        if (emojisEditor1.getData('text').length) {
            btnSubmit.removeClass('disabled');
        } else {
            btnSubmit.addClass('disabled');
        }
        showError.slideUp(200);
    }).focus(function () {
        if (emojisEditor1.getData('text').length) {
            btnSubmit.removeClass('disabled');
        } else {
            btnSubmit.addClass('disabled');
        }
    });
    
    $('.form-post .btn-show-emojis').click(function (e) {
        emojisEditor1.showEmojis(e);
    });
    
    // btnSubmit.click(function () {
    //     var text = emojisEditor1.getData('text'),
    //         html = emojisEditor1.getData('html'),
    //         dir  = emojisEditor1.getDir(),
    //         loading = $(this).find('.loading');
    //     if (text.length) {
    //         $.ajax({
    //             url: 'handel_posts.php',
    //             data: {"post": 'add', "content": text, "directionText": dir},
    //             type: 'POST',
    //             dataType: 'html',
    //             success: function (response) {
    //                 if (response != 'error') {
    //                     editorPost.html('').removeClass('no-after');
    //                     editorPost.attr('data-direction', defaultDirEditor);
    //                     $('.form-post .editor-with-emojis .btn-show-emojis').css(dirCssEditor, 0).css(otherDirEditor, 'auto');
    //                     loading.hide();
    //                     eleAllposts.prepend($(newPost(html, response, dir)));
    //                 } else {
    //                     showError.html('فى مشكلة فى السيرفر تقريبا يا كبير معلش والله.').slideDown(200);
    //                 }
    //             },
    //             beforeSend: function () {
    //                 loading.show();
    //             }
    //         });
    //     } else {
    //         showError.html('انت كدة ناصح يعنى هههههههههه.').slideDown(200);
    //     }    
    // });
    /* Show All Post From Database */
    // function get posts 
    // function getPosts(from, length) {
    //     $.ajax({
    //         url: 'handel_posts.php',
    //         data: {"post": 'getPosts', "from": from, "length": length},
    //         dataType: 'html',
    //         success: function (response) {
    //             loadingPosts.fadeOut(300, function () {
    //                 var post = JSON.parse(response);
    //                 $.each(post, function (i, post) {
    //                     eleAllposts.find('.view-posts').append(newPost(emojisEditor1.convertTextToHtml(post.content), post.created_at, post.direction_text));
    //                 });
    //             });
    //         },
    //         beforeSend: function () {
    //             loadingPosts.fadeIn();
    //         }
    //     });
    // }
    // $(window).load(function () {
    //     getPosts(0, 5);
    // });
    // $('.wrapper-page').scroll(function () {
    //     var heightWindow = $(this)[0].scrollHeight - $(this).height(),
    //         scrollTopWindow = $(this).scrollTop();
    //     if (scrollTopWindow === heightWindow) {
    //         var lengthtCurrentPosts = eleAllposts.find('.view-posts').children('.post').length;
    //         getPosts(lengthtCurrentPosts, 3);
    //     }
    // });
});






