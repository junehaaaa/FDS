


(function(global, $, axios){
    'use strict';
    var $employees = $('.employees-list');
    // GET
    axios.get('http://www.omdbapi.com/?s=happy')
         .then(function(response){
                // console.log(response.status + ' ' + response.statusText);
                response.data.Search.forEach(function(item) {
                    console.log(item.Title);
                    // return;
                    var poster = item.Poster;
                    var alt = item.Title;

                    $('<li>', {
                        html: '<img src="' + poster + '"alt =' + alt + '>"'
                    }).appendTo($employees);
                });
         }) 
         .catch(function(error){
             console.log(error.message);
         });

})(window, window.jQuery, window.axios);