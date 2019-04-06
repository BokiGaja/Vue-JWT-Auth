<template>
  <div id="app">
    <div class="content">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/login" v-if="!loggedIn">Login</router-link>
      |
      <router-link to="/logout" v-if="loggedIn">Logout</router-link>
      |
      <router-link to="/register" v-if="!loggedIn">Register</router-link>
      |
      <router-link to="/secret">Secret Page</router-link>
    </div>
  </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name:'App',
    computed: {
      ...mapGetters(['loggedIn'])
    }
  }
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
