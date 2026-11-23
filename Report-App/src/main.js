import { createApp } from 'vue'

import Admin_view from './views/Admin_view.vue'
import router from './routes/router.js'
import axios from 'axios'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'


/* .$ axios = axios ; */

const app = createApp(Admin_view)

app.use(router)
app.mount('#app')

