(function(global, Vue){
    'use strict';

    var ev_dispatcher = new Vue();



    global.app = new Vue({
        el: '#app',
        components: {
            'app-listener': {
                template: `
                <p>listener</p>
                `,
                data: function() {
                    return {
                        listener_count: 0
                    }
                }
            }
        }
    });

})(window, window.Vue);