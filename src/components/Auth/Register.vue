<template>
  <div>
    <h1>Register page</h1>
    <form @submit.prevent="register">
      <div>
        <input type="text" placeholder="User name" v-model="credentials.username">
      </div>
      <div>
        <input type="email" placeholder="email" v-model="credentials.email">
      </div>
      <div>
        <input type="password" placeholder="password" v-model="credentials.password">
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      return {
        credentials: {
          username: '',
          email: '',
          password: ''
        }
      }
    },
  }
</script>

<style scoped>

</style>