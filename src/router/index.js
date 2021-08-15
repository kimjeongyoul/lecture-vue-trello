import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'
import Home from '../components/Home.vue'
import Board from '../components/Board.vue'
import Card from '../components/Card.vue'

Vue.use(VueRouter)

// 네이게이션 가드
const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token')
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  isAuth ? next() : next(loginPath)
}

//# 해시백 모드
// 라우터는 선언된 순서로 규칙 적용
const router = new VueRouter({
  //# 해시백 모드 X
  mode: 'history',
  routes:  [
    { path: '/', component: Home, beforeEnter: requireAuth},
    { path: '/login', component: Login},
    { path: '/b/:bid', component: Board, beforeEnter: requireAuth, children : [
        {path:'c/:cid', component:Card}
    ]},
    { path: '*', component: NotFound}
  ]
})

const routes = {
    '/': App,
    '/login': Login
  }
  

export default router

