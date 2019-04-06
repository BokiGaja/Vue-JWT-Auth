<template>
  <div>
    <h1>Login page</h1>
    <form @submit.prevent="login">
      <div>
        <input type="email" placeholder="email" v-model="credentials.email">
      </div>
      <div>
        <input type="password" placeholder="password" v-model="credentials.password">
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        credentials: {
          email: '',
          password: ''
        }
      }
    },
  }
</script>