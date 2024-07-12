import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import store from './store';
import router from './router';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import AutoComplete from "primevue/autocomplete";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        ripple: true
    }
});
app.component('InputText', InputText);
app.component('Button', Button);
app.component('AutoComplete', AutoComplete);
app.mount('#app');
