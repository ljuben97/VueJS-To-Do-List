import Vue from 'vue'
import App from './App.vue'
import Main from './Main.vue'

new Vue({
  el: '#app',
  render: h => h(App)
});

new Vue({
  el: '#Main',
  render: h=> h(Main)
});
