import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/css/responsive.css';
import '../src/assets/css/main.css'
import '../src/assets/font/themify-icons/themify-icons.css';


createApp(App).use(router).mount('#app')
