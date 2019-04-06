<template>
  <div id="app">
    <div class="content">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/register">Register</router-link>
      |
      <router-link to="/secret">Secret Page</router-link>
    </div>
  </div>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name:'App',
    components: {
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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
