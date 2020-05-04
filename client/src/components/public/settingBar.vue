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
const version = require('element-ui/package.json').version // element-ui version from node_modules
const ORIGINAL_THEME = '#409EFF' // default color

export default {
  name: 'SettingBar',
  data: () => ({
    settingBar: false,
    settingForm: {
      fixedHeader: true,
      themeColor: '#454545'
    },
    chalk: '',
    theme: ''
  }),
  computed: {
    themeColors () {
      return [
        {
          type: 'theme-blue',
          title: this.$t('theme_color.dark_blue'),
          logoBGColor: '#367fa9',
          headerBGColor: '#3c8d8c',
          slideBGColor: '#222d32',
          textColor: '#ffffff'
        },
        {
          type: 'theme-pink',
          title: this.$t('theme_color.dark_pink'),
          logoBGColor: '#c17a86',
          headerBGColor: '#dc9da8',
          slideBGColor: '#222d32',
          textColor: '#ffffff'
        },
        {
          type: 'theme-purple',
          title: this.$t('theme_color.dark_purple'),
          logoBGColor: '#555299',
          headerBGColor: '#605ca8',
          slideBGColor: '#222d32',
          textColor: '#ffffff'
        },
        {
          type: 'theme-green',
          title: this.$t('theme_color.dark_green'),
          logoBGColor: '#15a589',
          headerBGColor: '#18bc9c',
          slideBGColor: '#222d32',
          textColor: '#ffffff'
        },
        {
          type: 'theme-red',
          title: this.$t('theme_color.dark_red'),
          logoBGColor: '#e43321',
          headerBGColor: '#e74c3c',
          slideBGColor: '#222d32',
          textColor: '#ffffff'
        },
        {
          type: 'theme-yellow',
          title: this.$t('theme_color.dark_yellow'),
          logoBGColor: '#db8b0b',
          headerBGColor: '#f39c12',
          slideBGColor: '#222d32',
          textColor: '#ffffff'
        },
        {
          type: 'theme-blue',
          title: this.$t('theme_color.light_blue'),
          logoBGColor: '#367fa9',
          headerBGColor: '#3c8d8c',
          slideBGColor: '#f9fafc',
          textColor: '#606266'
        },
        {
          type: 'theme-pink',
          title: this.$t('theme_color.light_pink'),
          logoBGColor: '#c17a86',
          headerBGColor: '#dc9da8',
          slideBGColor: '#f9fafc',
          textColor: '#606266'
        },
        {
          type: 'theme-purple',
          title: this.$t('theme_color.light_purple'),
          logoBGColor: '#555299',
          headerBGColor: '#605ca8',
          slideBGColor: '#f9fafc',
          textColor: '#606266'
        },
        {
          type: 'theme-green',
          title: this.$t('theme_color.light_green'),
          logoBGColor: '#15a589',
          headerBGColor: '#18bc9c',
          slideBGColor: '#f9fafc',
          textColor: '#606266'
        },
        {
          type: 'theme-red',
          title: this.$t('theme_color.light_red'),
          logoBGColor: '#e43321',
          headerBGColor: '#e74c3c',
          slideBGColor: '#f9fafc',
          textColor: '#606266'
        },
        {
          type: 'theme-yellow',
          title: this.$t('theme_color.light_yellow'),
          logoBGColor: '#db8b0b',
          headerBGColor: '#f39c12',
          slideBGColor: '#f9fafc',
          textColor: '#606266'
        }
      ]
    }
  },
  mounted () {
    // this.toggleClass(document.body)
    this.theme = '#18bc9c'
  },
  watch: {
    async theme (val) {
      const oldVal = this.chalk ? this.theme : ORIGINAL_THEME
      if (typeof val !== 'string') return
      const themeCluster = this.getThemeCluster(val.replace('#', ''))
      const originalCluster = this.getThemeCluster(oldVal.replace('#', ''))

      const getHandler = (variable, id) => {
        return () => {
          const originalCluster = this.getThemeCluster(ORIGINAL_THEME.replace('#', ''))
          const newStyle = this.updateStyle(this[variable], originalCluster, themeCluster)

          let styleTag = document.getElementById(id)
          if (!styleTag) {
            styleTag = document.createElement('style')
            styleTag.setAttribute('id', id)
            document.head.appendChild(styleTag)
          }
          styleTag.innerText = newStyle
        }
      }

      if (!this.chalk) {
        const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
        await this.getCSSString(url, 'chalk')
      }

      const chalkHandler = getHandler('chalk', 'chalk-style')

      chalkHandler()

      const styles = [].slice.call(document.querySelectorAll('style'))
        .filter(style => {
          const text = style.innerText
          return new RegExp(oldVal, 'i').test(text) && !/Chalk Variables/.test(text)
        })
      styles.forEach(style => {
        const { innerText } = style
        if (typeof innerText !== 'string') return
        style.innerText = this.updateStyle(innerText, originalCluster, themeCluster)
      })
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
      // this.toggleClass(document.body, color.type)
      this.theme = color.headerBGColor
      this.$message.success(this.$t('setting.change_theme_success'))
    },

    // toggleClass (element, className = 'theme-green') {
    //   if (!element || !className) {
    //     return
    //   }
    //   // let classString = element.className
    //   // const nameIndex = classString.indexOf(className)
    //   // if (nameIndex === -1) {
    //   //   classString += ' ' + className
    //   // } else {
    //   //   classString =
    //   //     classString.substr(0, nameIndex) +
    //   //     classString.substr(nameIndex + className.length)
    //   // }
    //   // element.className = classString
    //   element.className = className
    // },

    updateStyle (style, oldCluster, newCluster) {
      let newStyle = style
      oldCluster.forEach((color, index) => {
        newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index])
      })
      return newStyle
    },

    getCSSString (url, variable) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, '')
            resolve()
          }
        }
        xhr.open('GET', url)
        xhr.send()
      })
    },

    getThemeCluster (theme) {
      const tintColor = (color, tint) => {
        let red = parseInt(color.slice(0, 2), 16)
        let green = parseInt(color.slice(2, 4), 16)
        let blue = parseInt(color.slice(4, 6), 16)

        if (tint === 0) { // when primary color is in its rgb space
          return [red, green, blue].join(',')
        } else {
          red += Math.round(tint * (255 - red))
          green += Math.round(tint * (255 - green))
          blue += Math.round(tint * (255 - blue))

          red = red.toString(16)
          green = green.toString(16)
          blue = blue.toString(16)

          return `#${red}${green}${blue}`
        }
      }

      const shadeColor = (color, shade) => {
        let red = parseInt(color.slice(0, 2), 16)
        let green = parseInt(color.slice(2, 4), 16)
        let blue = parseInt(color.slice(4, 6), 16)

        red = Math.round((1 - shade) * red)
        green = Math.round((1 - shade) * green)
        blue = Math.round((1 - shade) * blue)

        red = red.toString(16)
        green = green.toString(16)
        blue = blue.toString(16)

        return `#${red}${green}${blue}`
      }

      const clusters = [theme]
      for (let i = 0; i <= 9; i++) {
        clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
      }
      clusters.push(shadeColor(theme, 0.1))
      return clusters
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
