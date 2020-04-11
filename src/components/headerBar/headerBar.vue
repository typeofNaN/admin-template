<template>
  <div id="headerBar">
    logo
    {{ role }}
    <el-button @click="signout">退 出</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getCurrentUser: 'getCurrentUser'
    }),

    role () {
      return this.getCurrentUser.role
    }
  },
  methods: {
    signout () {
      this.$router.replace('/account/signin')
      this.$store.dispatch('signout')
    }
  }
}
</script>

<style scoped>
</style>
