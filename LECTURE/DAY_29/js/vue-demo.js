/*! vue-demo.js © yamoo9.net, 2017 */
<<<<<<< HEAD
(function(global, Vue){
    'use strict';

    // 전역 컴포넌트 등록
		var Brand = {
		    template: `
		      <h1 class="app-brand">{{brand_content}}</h1>
		    `,
		    data: function() {
		      return {
		        brand_content: 'Vue Js Component'
		      }
		    }
		};

		var Header = {
				template: `
    		  <header class="app-header">
    		    <app-brand></app-brand>
    		  </header>
    		`,
    		components: {
    		  'app-brand': Brand
    		}
		};

    // Vue.component 스태틱 메서드

		// Vue.component('app-brand', {
		// 	template: `
		// 		<h1 class="app-brand">brand name</h1>
		// 	`
		// });
		
    // Vue.component('app-header', {
    //     // 컴포넌트 템플릿
    //     template: `
    //   		<header class="app-header">
		// 				<app-brand></app-brand>
    //   		</header>
    //     `,
    //     data: function() {
		// 			return {
    //         items: [1, 3, 5, 7]
    //     	};
		// 		},
    //     mounted: function() {
    //         console.log('mounted');
    //     }
    // });

    var app = new Vue({
        el: '#app',
				components: {
					appHeader: {
						name: 'app-header',
						props: ['content'],
						template: `
						<header class ="app-header">
							<app-brand content="hi, today good day"></app-brand>
							<p>{{content}}</p>
						</header>
						`
					}
				},
        components: {
					'app-brand': Brand,
					'app-header': Header
					}
    })

    global.app = app;
})(window, window.Vue);
=======
;(function(global, Vue){
  'use strict';

  var CustomEl = {
    // 컴포넌트 템플릿
    template: `
      <ul>
        <li v-for="item of items">
          <span v-text="item"></span>
        </li>
      </ul>
    `,
    data: function() {
      return {
        items: [1, 3, 5, 7]
      };
    },
    mounted: function() {
      console.log('mounted');
    }
  };

  var Brand = {
    template: `
      <h1 class="app-brand">{{brand_content}}</h1>
    `,
    data: function() {
      return {
        brand_content: 'Vue Js Component'
      }
    }
  };

  var Header = {
    template: `
      <header class="app-header">
        <app-brand></app-brand>
      </header>
    `,
    components: {
      'app-brand': Brand
    }
  }

  // 전역 컴포넌트 등록
  // Vue.component 스태틱 메서드
  // Vue.component('app-brand', Brand);
  // Vue.component('app-header', Header);
  // Vue.component('app-custom-el', CustomEl);

  var app = new Vue({
    el: '#app',
    // 지역 컴포넌트 등록
    components: {
      'app-header': Header
    }
  });

  global.app = app;

})(window, window.Vue);
>>>>>>> b1f20162b0aed533649249b06419243ea3ff8c38
