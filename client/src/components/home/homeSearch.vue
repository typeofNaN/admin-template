<template>
  <div id="home_search">
    <el-form
      v-show="showSearch"
      :inline="true"
      :model="searchForm"
      ref="searchForm"
      label-width="100px"
    >
      <el-row>
        <el-col
          :xl="6"
          :lg="8"
          :md="12"
          :sm="24"
          :xs="24"
        >
          <el-form-item
            prop="_id"
            label="ID"
          >
            <el-input
              v-model="searchForm._id"
              placeholder="ID"
              size="small"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col
          :xl="6"
          :lg="8"
          :md="12"
          :sm="24"
          :xs="24"
        >
          <el-form-item
            prop="a"
            label="字段A"
          >
            <el-input
              v-model="searchForm.a"
              placeholder="字段A"
              size="small"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col
          :xl="6"
          :lg="8"
          :md="12"
          :sm="24"
          :xs="24"
        >
          <el-form-item
            prop="b"
            label="字段B"
          >
            <el-input
              v-model="searchForm.b"
              placeholder="字段B"
              size="small"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col
          :xl="6"
          :lg="8"
          :md="12"
          :sm="24"
          :xs="24"
        >
          <el-form-item
            prop="c"
            label="字段C"
          >
            <el-input
              v-model="searchForm.c"
              placeholder="字段C"
              size="small"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col
          :xl="6"
          :lg="8"
          :md="12"
          :sm="24"
          :xs="24"
        >
          <el-form-item
            prop="d"
            label="字段D"
          >
            <el-input
              v-model="searchForm.d"
              placeholder="字段D"
              size="small"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col
          :xl="6"
          :lg="8"
          :md="12"
          :sm="24"
          :xs="24"
        >
          <el-form-item
            prop="e"
            label="字段E"
          >
            <el-input
              v-model="searchForm.e"
              placeholder="字段E"
              size="small"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col
          :xl="6"
          :lg="8"
          :md="12"
          :sm="24"
          :xs="24"
        >
          <el-form-item
            prop="f"
            label="字段F"
          >
            <el-input
              v-model="searchForm.f"
              placeholder="字段F"
              size="small"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col
          :xl="6"
          :lg="8"
          :md="12"
          :sm="24"
          :xs="24"
        >
          <el-form-item
            prop="g"
            label="字段G"
          >
            <el-input
              v-model="searchForm.g"
              placeholder="字段G"
              size="small"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col
          :xl="6"
          :lg="8"
          :md="12"
          :sm="24"
          :xs="24"
        >
          <el-form-item
            prop="is_deleted"
            label="是否删除"
          >
            <el-select
              v-model="searchForm.is_deleted"
              placeholder="是否删除"
              size="small"
            >
              <el-option
                label="是"
                :value="true"
              ></el-option>
              <el-option
                label="否"
                :value="false"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col
          :xl="12"
          :lg="16"
          :md="24"
          :sm="24"
          :xs="24"
        >
          <el-form-item
            prop="time"
            label="时间"
          >
            <el-date-picker
              v-model="searchForm.time"
              type="daterange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col
          :xl="6"
          :lg="8"
          :md="12"
          :sm="24"
          :xs="24"
        >
          <el-form-item label=" ">
            <el-button
              @click="search"
              type="primary"
              :style="{
                backgroundColor: getThemeHeaderBGColor,
                borderColor: getThemeHeaderBGColor
              }"
              size="small"
            >查询</el-button>
            <el-button
              @click="reset"
              type="info"
              size="small"
            >重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'homeSearch',
  props: {
    searchForm: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    showSearch: true
  }),
  computed: {
    ...mapGetters(['getThemeHeaderBGColor'])
  },
  methods: {
    search () {
      this.$emit('search', this.searchForm)
    },

    reset () {
      this.$refs.searchForm.resetFields()
    },

    showSearchForm () {
      this.showSearch = !this.showSearch
    }
  }
}
</script>

<style lang="scss">
#home_search {
  .el-form--inline {
    .el-form-item__content {
      max-width: 202px;
    }
  }
}
</style>
