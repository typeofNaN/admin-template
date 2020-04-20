<template>
  <div id="layout_error">
    <div class="error-message">
      <h2 class="display-4 red--text">404</h2>
      <p class="headline mt-4">
        <router-link to="/account/signin">重新登录</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error'
}
</script>

<style lang="scss" scoped>
#layout_error {
  display: flex;
  height: 100vh;

  .error-message {
    margin: auto;
    text-align: center
  }
}
</style>
