import { createApp } from 'vue'

import App from './App.vue'
import PrimeVue from "primevue/config";

//App Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

//Add PrimeFlex
import 'primeflex/primeflex.css';

//Add Components
import Card from "primevue/card";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Toast from "primevue/toast";

createApp(App)
    .use(PrimeVue, {ripple: true})
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-toolbar', Toolbar)
    .component('pv-toast', Toast)
    .mount('#app')