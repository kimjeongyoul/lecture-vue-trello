<template>
  <div>Home
      <div>
          Board List:
          <div v-if="loading">Loading...</div>
          <div v-else> 
              <div v-for="b in boards" :key="b.id">
                  {{b}}
              </div>
            <!-- Api Result: 
              <pre>
                {{boards}}
              </pre> -->
              <!-- <pre>
                {{error}}
              </pre> -->
          </div>
          <ul>
              <li>
                  <router-link to="b/1">Board 1</router-link>
              </li>
              <li>
                  <router-link to="b/2">Board 2</router-link>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import {board} from '../api'
export default {
    data() {
        return {
            loading: false,
            boards: []
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        // fetchData() {
        //     this.loading = true

        //     const req = new XMLHttpRequest()

        //     req.open('GET', 'http://localhost:3000/health')

        //     req.send()

        //     req.addEventListener('load', () => {
        //         this.loading = false
        //         this.apiRes = {
        //             status: req.status,
        //             statusText: req.statusText,
        //             response: JSON.parse(req.response)
        //         }
        //     })
        // }

        // fetchData() {
        //     this.loading = true

        //     axios.get('http://localhost:3000/boards')
        //         .then(res => {
        //             this.boards = res.data
        //         })
        //         .catch(res => {
        //             // this.error = res.response.data
        //             this.$router.replace('/login')
        //         })
        //         .finally(() => {
        //             this.loading = false
        //         })
         fetchData() {
             this.loading = true
             board.fetch()
             .then(data => {
                 this.boards = data
             })
             .finally(data => {
                 this.loading = false
             })
         }
    }
}
</script>

<style>

</style>