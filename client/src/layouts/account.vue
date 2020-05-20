<template>
  <div id="layout_account">
    <div class="main">
      <div class="box">
        <router-view />
      </div>
      <div class="copyright">
        Copyright &copy; 智购科技技术部出品
      </div>
    </div>
    <canvas id="particle-animation"></canvas>
  </div>
</template>

<script>
import particleAnimation from '@/utils/particleAnimation'

export default {
  name: 'account',
  mounted () {
    let config = {
      color: '#ffffff',
      circleNum: 80
    }
    particleAnimation(document.querySelector('#particle-animation'), config)
  }
}
</script>

<style lang="scss" scoped>
.a {
  color: #faf3f3;
}
#layout_account {
  background-color: rgba(200, 200, 200, 0.2);
}

.main {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  // background: url(../assets/img/account_bg.jpg) center no-repeat;
  // background-size: cover;

  .box {
    margin: 20px auto;
    padding: 20px;
    width: 400px;
    height: 460px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 20px;
    box-shadow: 0 0 2px 4px rgba(243, 238, 238, 0.9);
    z-index: 1;
  }

  .copyright {
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: #606266;
    z-index: 1;
  }
}

#particle-animation {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  // z-index: -1;
}
</style>
