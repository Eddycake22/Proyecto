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
            meta:{
                requiresAuth:true
            }
        },
        {
            path:'/Areas',
            component:Areas
        },
        {
            path:'/Estadisticas',
            component:Estadisticas
            meta:{
                requiresAuth:true
            }
        },
        {
            path:'/Asignaciones',
            component:Adminasignaciones
            meta:{
                requiresAuth:true
            }
        },
        {
            path:'/Usuarios',
            component:Usuarios
            meta:{
                requiresAuth:true
            }
        }
    ]
})
export default router