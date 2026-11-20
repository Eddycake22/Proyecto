import {createRouter, createWebHistory} from 'vue-router';

import Login from '../views/Login.vue';
import Principal_view from '../views/Principal_view.vue';
import Asignaciones from '../views//Asignaciones.vue';

const router = createRouter ({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            component:Login
        },
        {
            path:'/Inicio',
            component:Asignaciones
        }
        
    ]
})
export default router