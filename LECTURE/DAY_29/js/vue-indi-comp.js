(function(global, Vue){
	'use strict';
	// var counter = {
	// 	counter: {
	// 		count: 0
	// 	}
	// } 

	Vue.component('simple-counter', {
		template: `
			<button 
				@click="counter.count += 1"
				type="button"> {{number + counter.count}} </button>	
		`,
		props: ['number'],
		mounted: function() {
			console.log(this.$data);
		},
		data: function() {
			return {
				// counter: counter 
				counter: {
					count: 0
				}
			};
		},
		methods: {
			updateCount: function() {
				this.counter.count += this.number;
				console.log('updateCount 실행');
				this.$emit('listen');
			}
		}
	});

	var app = new Vue({
		el: '#app',
		methods: {
			healing: function() {
				console.log('아들아 내가 듣고 있다.');
			}
		}
	});

})(window, window.Vue);