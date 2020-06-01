import './firebase'; //importar firebase
import Vue from 'vue' // no necsita ;
import App from './App.vue' // no necesita ;
import VueFire from 'vuefire'; // importar vuefire

Vue.use(VueFire); //usar vue fire
new Vue({
  el: '#app',
  render: h => h(App)
})
