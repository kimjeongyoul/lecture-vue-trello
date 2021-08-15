import Vue from 'vue'
// index.js를 가져오게 된다
import router from './router'
import App from './App.vue'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // render: h => h({
  //   template: '<router-view></router-view>'
  // })
})
