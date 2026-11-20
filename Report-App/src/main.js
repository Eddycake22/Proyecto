import { createApp } from 'vue'

import Principal_view from './views/Principal_view.vue'
import router from './routes/router.js'
import axios from 'axios'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'


/* .$ axios = axios ; */

const app = createApp(Principal_view)

app.use(router)
app.mount('#app')

