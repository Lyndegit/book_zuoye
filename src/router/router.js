import Vue from 'vue';
import Router from 'vue-router';
import denglu from '../components/denglu.vue';
import main from '../components/main.vue'
Vue.use(Router)

export default new Router({

    routes:[
        {
            path: '/',
            name: 'denglu',
            component:denglu
        },{
            path : '/main',
            name : 'main',
            component:main
        }
    ]
})