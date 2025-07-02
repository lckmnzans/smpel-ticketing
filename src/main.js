// import './assets/main.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router/route'
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios);

app.mount('#app')
