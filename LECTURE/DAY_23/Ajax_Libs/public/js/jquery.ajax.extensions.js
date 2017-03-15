// if (!$) {
//     console.info('jQuery 라이브러리를 먼저 호출해야 jqeury.ajax.extensions을 사용할수 있습니다.');
//     return
// }

(function(global, $){
    'use strict';
    
    // PUT, DELETE
    if ( !$.put ) {
        $.put = function(url, data, success, dataType) {
            return $.ajax({
                    type: 'PUT',
                    url: url,                       // [require]
                    data: data || null,             // [option]
                    success: null,                  // [option]
                    dataType: dataType || 'json'    // [option]
            });
        };
    }
    if ( !$.delete ) {
        $.delete = function(url, success, dataType) {
            return $.ajax({
                    type: 'DELETE',
                    url: url,                       // [require]
                    success: null,                  // [option]
                    dataType: dataType || 'json'    // [option]
            });
        };
    }
})(window, window.jQuery);