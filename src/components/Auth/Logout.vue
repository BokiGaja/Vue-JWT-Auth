<template>
  <h1>Logout</h1>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: "Logout",
    methods: {
      ...mapActions(['logout'])
    },
    async created()
    {
      await this.logout();
      this.$router.push('/');
    }
  }
</script>