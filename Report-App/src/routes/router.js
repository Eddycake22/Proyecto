import {createRouter, createWebHistory} from 'vue-router';

import Login from '../views/Login.vue';
import Admin_view from '../views/Admin_view.vue';
import Asignaciones from '../views/Asignaciones.vue';
import Estadisticas from '../components/Stats.vue'
import Areas from '../components/area_list.vue'
import Adminasignaciones from '../views/Admin_asignaciones.vue'
import Usuarios from '../views/Admin_user.vue'

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
        },
        {
            path:'/Areas',
            component:Areas
        },
        {
            path:'/Estadisticas',
            component:Estadisticas
        },
        {
            path:'/Asignaciones',
            component:Adminasignaciones
        },
        {
            path:'/Usuarios',
            component:Usuarios
        }
    ]
})
export default router