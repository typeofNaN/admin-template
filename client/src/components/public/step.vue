<template>
  <div id="step">
    <h4>订单状态</h4>
    <el-steps
      :active="orderActive"
      finish-status="success"
      simple
      style="margin-bottom: 10px"
    >
      <el-step title="1、确认订单信息"></el-step>
      <el-step title="2、付款到支付宝"></el-step>
      <el-step title="3、买家发货"></el-step>
      <el-step title="4、快递运输"></el-step>
      <el-step title="5、确认收货"></el-step>
    </el-steps>
    <el-button @click="nextOrder">下一步</el-button>
    <h4>步骤条</h4>
    <el-button
      style="margin-bottom: 10px;"
      @click="next"
    >下一步</el-button>
    <el-steps
      :active="active"
      finish-status="success"
    >
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <h4>含状态</h4>
    <el-steps
      :space="200"
      :active="active"
      finish-status="success"
    >
      <el-step title="已完成"></el-step>
      <el-step title="进行中"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <h4>有描述</h4>
    <el-steps :active="active">
      <el-step
        title="步骤 1"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
      <el-step
        title="步骤 2"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
      <el-step
        title="步骤 3"
        description="这段就没那么长了"
      ></el-step>
    </el-steps>
    <h4>居中</h4>
    <el-steps
      :active="active"
      align-center
    >
      <el-step
        title="步骤1"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
      <el-step
        title="步骤2"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
      <el-step
        title="步骤3"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
    </el-steps>
    <h4>带图标</h4>
    <el-steps :active="active">
      <el-step
        title="步骤 1"
        icon="el-icon-edit"
      ></el-step>
      <el-step
        title="步骤 2"
        icon="el-icon-upload"
      ></el-step>
      <el-step
        title="步骤 3"
        icon="el-icon-picture"
      ></el-step>
    </el-steps>
    <h4>竖排</h4>
    <div style="height: 300px;">
      <el-steps
        direction="vertical"
        :active="active"
      >
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step
          title="步骤 3"
          description="这是一段很长很长很长的描述性文字"
        ></el-step>
      </el-steps>
    </div>
    <h4>简约风格</h4>
    <el-steps
      :active="active"
      simple
    >
      <el-step
        title="步骤 1"
        icon="el-icon-edit"
      ></el-step>
      <el-step
        title="步骤 2"
        icon="el-icon-upload"
      ></el-step>
      <el-step
        title="步骤 3"
        icon="el-icon-picture"
      ></el-step>
    </el-steps>
    <el-steps
      :active="active"
      finish-status="success"
      simple
      style="margin-top: 20px"
    >
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: 'step',
  data: () => ({
    orderActive: 0,
    active: 0
  }),
  methods: {
    nextOrder () {
      if (this.orderActive > 4) {
        return
      }

      this.orderActive++
    },

    next () {
      this.active++
      if (this.active > 3) {
        this.active = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#step {
  h4 {
    margin: 10px 0;
  }
}
</style>
