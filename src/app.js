import Vue from 'vue';
import App from './app.vue';
import button from './button';
import input from './input';
import row from './row';
import col from './col';

// import './components/svg';
Vue.component('g-button', button);
Vue.component('g-input', input);
Vue.component('g-row', row);
Vue.component('g-col', col);






new Vue({
    el: '#app',
    render: h => h(App)
})