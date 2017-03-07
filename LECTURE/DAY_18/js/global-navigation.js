/*! global-navigation.js © yamoo9.net, 2017 */

<<<<<<< HEAD
// var init = function() {
//   'use strict';
//   // 글로벌 내비게이션 초기화
//   globalNavInit();
// };

// var globalNavInit = function() {
//   'use strict';
//   // console.log('initialization Global Navigation');
//   // GNB 찾기
//   var gnb = document.querySelector('.global-navigation');
//   var gnb_links = gnb.querySelectorAll('a');
//   for ( var i=0, l=gnb_links.length; i<l; i++ ) {
//     // 클로저 clickGetIndexWrapper > clickGetIndex() 함수 활용
//     gnb_links.item(i).onclick = clickGetIndexWrapper(i);
//   }
// };

// var clickGetIndexWrapper = function(index) {
//   // Scope
//   var clickGetIndex = function(e) {
//     e.preventDefault();
//     console.log('clicked:', index);
//   };
//   return clickGetIndex;
// };

// // 애플리케이션 초기화
// init();

var init = function() {
  'use strict';
=======
/**
 *  초기화 함수
 */
var init = function() {
  'use strict';

  // 글로벌 내비게이션 초기화
>>>>>>> 665368240dfde3252f3852d69e4d87ae12941d9f
  globalNavInit();

};

/**
 *  globalNavInit 함수
 */
var globalNavInit = function() {
  'use strict';
<<<<<<< HEAD
  var gnb = document.querySelector('.global-navigation');
  var gnb_links = gnb.querySelectorAll('a');
  for ( var i = 0, l = gnb_links.length-1; i<=l; i++ ) {
    gnb_links.item(i).onclick = clickGetIndexWrapper(i);
    }
=======

  // console.log('initialization Global Navigation');

  // GNB 찾기
  var gnb       = document.querySelector('.global-navigation');
  var gnb_links = gnb.querySelectorAll('a');

  // GNB > <a> 요소 순환 처리
  for ( var i=0, l=gnb_links.length; i<l; i++ ) {

    // 클로저 clickGetIndexWrapper > clickGetIndex() 함수 활용
    gnb_links.item(i).onclick = clickGetIndexWrapper(i);

  }
>>>>>>> 665368240dfde3252f3852d69e4d87ae12941d9f
};

/**
 *  clickGetIndexWrapper 함수
 *  @param  {Number}  index - 순환문 처리 시, 인덱스 값
 *  @return {Function}        clickGetIndex (클로저 함수)
 */
var clickGetIndexWrapper = function(index) {
<<<<<<< HEAD
=======
  'use strict';

>>>>>>> 665368240dfde3252f3852d69e4d87ae12941d9f
  var clickGetIndex = function(e) {
    e.preventDefault();
    console.log('clicked:', index);
  };
<<<<<<< HEAD
  return clickGetIndex;
};
=======

  retrun clickGetIndex;

};


// 애플리케이션 초기화
init();
>>>>>>> 665368240dfde3252f3852d69e4d87ae12941d9f
