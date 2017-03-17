<<<<<<< HEAD
(function(global, $){
    'use strict';

    // GET

    var add_btn = document.querySelector('.add-list');
    var employees_list = document.querySelector('.employees-list')

    add_btn.onclick = function() {
        var new_employees = {
                name: faker.internet.userName(),
                email: faker.internet.email(),
                company: faker.company.companyName()
            }    
        $.post('/employees/', new_employees, function(data, textStatus, jqXHR){
            //  console.log( jqXHR.status + ' ' + jqXHR.statusText );
            employees_list.inserAdjacentHTML('beforeend', '<li></li>');
        });

    };

    // $.get('/employees/', function(data, textStatus, jqXHR){
    // // $.get('/employees/', {id: 7}, function(data, textStatus, jqXHR){
    //      console.log( jqXHR.status + ' ' + jqXHR.statusText );
    //      console.log(data.length);
    // }, 'json');

    
    // // row-level .ajax() 메서드
    // $.ajax({
    //     // type: 'DELETE',
    //     url: '/employees',
    //     data: {id: 9},
    //     success: function(data, textStatus, jqXHR) {},
    //     datatype: 'json'
    // });


    // POST

    // 추가할 새로운 데이터
    // var new_employees = {
    //         name: faker.internet.userName(),
    //         email: faker.internet.email(),
    //         company: faker.company.companyName()
    //     }
    
    // $.post('/employees/', new_employees, function(data, textStatus, jqXHR){
    //      console.log( jqXHR.status + ' ' + jqXHR.statusText );
    //      console.log(data);
    // });

    // // row-level .ajax() 메서드
    // $.ajax({
    //     type: 'POST',
    //     url: '/employees',
    //     data: new_employees,
    //     success: function(data, textStatus, jqXHR) {},
    //     datatype: 'json'
    // });

    // PUT
    // 수정할 데이터
    var modified_employees = {
        "name": "Hong Min, Son",
        "email": "sony@tottenham.com",
        "company": "Tottenham Hotspur"
    };

    $.put('/employees/7', modified_employees, function(data, textStatus, xhr){
         console.log( status );
         console.log(data);
    });

    // $.ajax({
    //     type: 'PUT',
    //     url: '/employees/21',
    //     datatype: 'json',
    //     data: modified_employees
    // })
    // .done(function(data, status, xhr){
    //     console.log( xhr.status + ' ' + xhr.statusText );
    //     console.log(data);
    // })
    // .fail(function(error){
    //     console.error(error.message);
    // })
    // .always(function(){
    //     console.info('PUT 통신 종료');
    // })

    // DELETE
    // $.delete('/employees/1', function(data, status){
    //      console.log( status );
    // });
    
    // $.ajax({
    //     type: 'DELETE',
    //     url: '/employees/21',
    //     datatype: 'json',
    // })
    // .done(function(data, textStatus, jqXHR){
    //     console.log(textStatus);
    //     console.log(data);
    // })



})(window, window.jQuery);
=======
/*! jquery.ajax.study.js © yamoo9.net, 2017 */

(function(global, $){
  'use strict';

  // jQuery Version 출력
  // console.log('jQuery.prototype.jquery:', $.fn.jquery);

  ///////////////////
  // jQuery.ajax() //
  ///////////////////

  /////////
  // GET //
  /////////

  var employees = document.querySelector('.employees');
  var btn       = document.querySelector('.add-employee');

  // 단축 ajax 메서드: $.get()
  // $.get('/employees', function(data, textStatus, jqXHR){
  // $.get('/employees', {id: 7}, function(data, textStatus, jqXHR){
    // console.log( jqXHR.status + ' ' + jqXHR.statusText );
    // console.log(data.length); // 20
    // data.forEach(function(item) {
      // console.log(item.name);
      // employees.insertAdjacentHTML('beforeend', '<li>'+ item.name +'</li>');
    // });
  // }, 'json');

  $.get('/employees')
   .done(function(data, textStatus, jqXHR){
     data.forEach(function(item) {
       employees.insertAdjacentHTML('beforeend', '<li>'+ item.name +'</li>');
     });
   });


  // row-level .ajax() 메서드
  // $.ajax({
  //   // type: 'DELETE',
  //   url: '/employees',
  //   data: {id: 9},
  //   success: function(data, textStatus, jqXHR) {
  //     console.log(data);
  //   },
  //   dataType: 'json'
  // });

  //////////
  // POST //
  //////////
  // var new_employee = {
  //   name: faker.internet.userName(),
  //   email: faker.internet.email(),
  //   company: faker.company.companyName()
  // };

  // btn.onclick = function() {
  //   $.post('/employees', new_employee, function(data, textStatus, jqXHR) {
  //     $.get('/employees', function(data, textStatus, jqXHR){
  //       employees.innerHTML = '';
  //       data.forEach(function(item) {
  //         // console.log(item.name);
  //         employees.insertAdjacentHTML('beforeend', '<li>'+ item.name +'</li>');
  //       });
  //     });
  //   });
  // };

  btn.onclick = function() {
    var new_employee = {
      name: faker.internet.userName(),
      email: faker.internet.email(),
      company: faker.company.companyName()
    };
    $.post('/employees', new_employee)
     .done(function(data, textStatus, jqXHR) {
       $.get('/employees')
        .done(function(data, textStatus, jqXHR) {
          employees.innerHTML = '';
          data.forEach(function(item) {
            // console.log(item.name);
            employees.insertAdjacentHTML('beforeend', '<li>'+ item.name +'</li>');
          });
        });
     });
  };

  // $.post('/employees', new_employee, function(data, textStatus, jqXHR) {
  //   console.log( jqXHR.status + ' ' + jqXHR.statusText );
  //   console.log( data );
  // });

  // Deffered Object (Like Promise)
  // $.post('/employees', new_employee)
  //  .done(function(data, textStatus, jqXHR) {
  //   console.log( jqXHR.status + ' ' + jqXHR.statusText );
  //   console.log( data );
  //  })
  //  .fail()
  //  .always();

  // $.ajax({
  //   type: 'POST',
  //   url: '/employees',
  //   data: new_employee,
  //   success: function(data, textStatus, jqXHR) {},
  //   dataType: 'json'
  // });

  /////////
  // PUT //
  /////////
  // var modified_employee = {
  //   "name": "Hong Min, Son",
  //   "email": "sony@tottenham.com",
  //   "company": "Tottenham Hotspur"
  // };

  // 사용자 정의 jQuery 유틸리티 메서드 $.put()
  // $.put('/employees/7', modified_employee, function(data, status, xhr) {
  //   console.log(status);
  //   console.log(data);
  // });

  // $.ajax({
  //   type: 'PUT',
  //   url: '/employees/21',
  //   dataType: 'json',
  //   data: modified_employee
  // })
  // .done(function(data, status, xhr) {
  //   console.log(xhr.status + ' ' + xhr.statusText);
  //   console.log(data);
  // })
  // .fail(function(error) {
  //   console.error(error.message);
  // })
  // .always(function() {
  //   console.info('PUT 통신 종료');
  // });

  ////////////
  // DELETE //
  ////////////
  // $.ajax({
  //   type: 'DELETE',
  //   url: '/employees/21',
  //   dataType: 'json'
  // }).done(function(data, textStatus, jqXHR) {
  //   console.log(textStatus);
  //   console.log(data); // {}
  // });

  // $.delete('/employees/1', function(data, status) {
  //   console.log(status);
  // });

})(window, window.jQuery);
>>>>>>> f24105caa62396712ac0f413e42592f1a678216d
