
// // ES5
// (function($){
//     'use strict';

//     $.capitalize = function(word) {
//         return word.replace(/^./, function($1) {
//             return $1.toUpperCase();
//         });
//     };
// })(window.jQuery);

// ES6
($=> {
    'use strict';
    $.capitalize = words => 
    $.map(words.split(' '),word.replace(/^./,($1) => 
    $1.toUpperCase())).join(' ');
})(window.jQuery);

((global, $)=>{
    'use strict';

    let $body = $('body');

    let $wrapper = $( document.querySelector('.wrapper') );
    // let $wrapper = $('.wrapper');
    // let $wrapper_header = $('.wrapper :header');
    let $wrapper_header = $wrapper.find(':header');
    $wrapper_header.css('font-size', '+=30px');

    // LIBRARY, FRAMEWORK -> MODEL

    var web_techniques = {
        'css': {
            'type': 'framework',
            'resource': ['twitter bootstrap', 'bulma', 'zurb foundation']
        },
    };


    var html_template = [
    '<ul class="css-framework">',
        '<li class="active"><a href="#!Bootstrap">Bootstrap</a></li>',
        '<li><a href="">Bulma</a></li>',
        '<li><a href="">Foundation</a></li>',
    '</ul>'
    ].join('');

    $(`<ul class="css-framework">
        <li class="active"><a href="#!Bootstrap">Bootstrap</a></li>
        <li><a href="">Bulma</a></li>
        <li><a href="">Foundation</a></li>
       </ul>`).prependTo( $wrapper );

    console.log('$wrapper_header: ', $wrapper_header);

})(window, window.jQuery);