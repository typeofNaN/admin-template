<template>
  <div id="layout_account">
    <div class="main">
      <div class="box">
        <router-view />
      </div>
      <div class="copyright">
        &copy; zegobird {{ new Date().getFullYear() }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'account'
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: url(../assets/img/account_bg.jpg) center no-repeat;
  background-size: cover;

  .box {
    margin: 20px auto;
    padding: 20px;
    width: 500px;
    height: 560px;
    background-color: rgba(0, 0, 0, .6);
    border-radius: 20px;
    box-shadow: 0 0 2px 4px rgba(0, 0, 0, .2);
  }

  .copyright {
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
}
</style>
