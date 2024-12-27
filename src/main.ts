import { createApp } from 'vue';
import App from './App.vue';
import { store, key } from './store';
import emitter from '@/utils/emitter';

const app = createApp(App).use(store, key);
app.config.globalProperties.emitter = emitter; // Add emmiter
app.mount('#app');
