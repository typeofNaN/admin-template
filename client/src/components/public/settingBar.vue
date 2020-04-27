<template>
  <div id="settingBar">
    <div
      class="setting_icon"
      @click="settingBar = true"
    >
      <svg-icon icon-class="setting"/>
    </div>
    <el-drawer
      :visible.sync="settingBar"
      derection="rtl"
      size="300px"
      :modal="false"
      :title="$t('setting.setting_center')"
      close-on-press-escape
      destroy-on-close
    >
      <el-form
        :model="settingForm"
        ref="settingForm"
        label-width="100px"
      >
        <el-form-item :label="$t('setting.fixed_header')">
          <el-switch
            v-model="settingForm.fixedHeader"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="changeFixedHeader"
          />
        </el-form-item>
        <div class="theme_colors">
          <h4>{{ $t('setting.theme_color') }}</h4>
          <el-row>
            <el-col
              v-for="(theme, index) in themeColors"
              :key="index"
              :span="8"
            >
              <div
                class="theme_box clearfix"
                @click="changeThemeColor(theme)"
              >
                <span
                  class="logo_span"
                  :style="{ backgroundColor: theme.logoBGColor }"
                />
                <span
                  class="header_span"
                  :style="{ backgroundColor: theme.headerBGColor }"
                />
                <span
                  class="slide_span"
                  :style="{ backgroundColor: theme.slideBGColor }"
                />
                <span class="main_span"/>
              </div>
              <p>{{ theme.title }}</p>
            </el-col>
          </el-row>
        </div>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'SettingBar',
  data: () => ({
    settingBar: false,
    settingForm: {
      fixedHeader: true,
      themeColor: '#454545'
    }
  }),
  computed: {
    themeColors () {
      return [
        {
          title: this.$t('theme_color.dark_blue'),
          logoBGColor: '#367fa9',
          headerBGColor: '#3c8d8c',
          slideBGColor: '#222d32',
          textColor: '#ffffff'
        },
        {
          title: this.$t('theme_color.dark_pink'),
          logoBGColor: '#c17a86',
          headerBGColor: '#dc9da8',
          slideBGColor: '#222d32',
          textColor: '#ffffff'
        },
        {
          title: this.$t('theme_color.dark_purple'),
          logoBGColor: '#555299',
          headerBGColor: '#605ca8',
          slideBGColor: '#222d32',
          textColor: '#ffffff'
        },
        {
          title: this.$t('theme_color.dark_green'),
          logoBGColor: '#15a589',
          headerBGColor: '#18bc9c',
          slideBGColor: '#222d32',
          textColor: '#ffffff'
        },
        {
          title: this.$t('theme_color.dark_red'),
          logoBGColor: '#e43321',
          headerBGColor: '#e74c3c',
          slideBGColor: '#222d32',
          textColor: '#ffffff'
        },
        {
          title: this.$t('theme_color.dark_yellow'),
          logoBGColor: '#db8b0b',
          headerBGColor: '#f39c12',
          slideBGColor: '#222d32',
          textColor: '#ffffff'
        },
        {
          title: this.$t('theme_color.light_blue'),
          logoBGColor: '#367fa9',
          headerBGColor: '#3c8d8c',
          slideBGColor: '#f9fafc',
          textColor: '#606266'
        },
        {
          title: this.$t('theme_color.light_pink'),
          logoBGColor: '#c17a86',
          headerBGColor: '#dc9da8',
          slideBGColor: '#f9fafc',
          textColor: '#606266'
        },
        {
          title: this.$t('theme_color.light_purple'),
          logoBGColor: '#555299',
          headerBGColor: '#605ca8',
          slideBGColor: '#f9fafc',
          textColor: '#606266'
        },
        {
          title: this.$t('theme_color.light_green'),
          logoBGColor: '#15a589',
          headerBGColor: '#18bc9c',
          slideBGColor: '#f9fafc',
          textColor: '#606266'
        },
        {
          title: this.$t('theme_color.light_red'),
          logoBGColor: '#e43321',
          headerBGColor: '#e74c3c',
          slideBGColor: '#f9fafc',
          textColor: '#606266'
        },
        {
          title: this.$t('theme_color.light_yellow'),
          logoBGColor: '#db8b0b',
          headerBGColor: '#f39c12',
          slideBGColor: '#f9fafc',
          textColor: '#606266'
        }
      ]
    }
  },
  methods: {
    changeFixedHeader (fixed) {
      this.$store.commit('changeFixedHeader', fixed)
      this.$message.success(
        fixed
          ? this.$t('setting.header_fixed_success')
          : this.$t('setting.header_cancel_fixed')
      )
    },

    changeThemeColor (color) {
      this.$store.commit('changeThemeColor', color)
      this.$message.success(this.$t('setting.change_theme_success'))
    }
  }
}
</script>

<style lang="scss" scoped>
.setting_icon {
  padding: 10px;
  width: 100%;
  height: 100%;
}

.theme_colors {
  padding: 20px;
  color: #fff;

  h4 {
    margin-bottom: 10px;
  }

  .theme_box {
    padding: 10px 10px 4px 10px;

    span {
      display: block;
      float: left;
    }

    .logo_span,
    .slide_span {
      width: 20%;
    }

    .header_span,
    .main_span {
      width: 80%;
    }

    .logo_span,
    .header_span {
      height: 7px;
    }

    .slide_span,
    .main_span {
      height: 30px;
    }

    .main_span {
      background-color: #f4f5f7;
    }
  }

  p {
    font-size: 12px;
    text-align: center;
  }
}
</style>

<style lang="scss">
/* 去除el-drawer title默认蓝色边框 */
#settingBar {
  .el-drawer__header {
    color: #fff;

    > span {
      outline: 0;
    }
  }

  .el-drawer {
    &.rtl {
      background-color: #454545;
    }
  }

  .el-form-item__label {
    color: #fff;
  }
}
</style>
