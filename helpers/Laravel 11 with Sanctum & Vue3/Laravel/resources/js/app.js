import './bootstrap';
import '../sass/app.scss'
import { createApp } from 'vue';

const app = createApp({});

import ExampleComponent from './components/ExampleComponent.vue';
app.component('example-component', ExampleComponent);

import Router from '@/router'
app.use(Router)

app.mount('#app');