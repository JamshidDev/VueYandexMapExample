import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createYmaps } from 'vue-yandex-maps';
const app = createApp(App)
app.use(createYmaps({
    // The key must be entered
    apikey: '',
}))

app.mount('#app')
