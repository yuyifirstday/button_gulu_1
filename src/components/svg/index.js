import Vue from 'vue';
import svgIcon from './icon';


Vue.component('svg-icon', svgIcon);

const requireAll = ((content) => content.keys().map(content));
const req = (require.context('./icon', true, /\.svg$/));
requireAll(req);