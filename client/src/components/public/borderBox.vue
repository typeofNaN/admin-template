<template>
  <div
    id="border_box"
    :style="{ borderTop: '4px solid' + getThemeHeaderBGColor }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'borderBox',
  computed: {
    ...mapGetters(['getThemeHeaderBGColor'])
  }
}
</script>

<style lang="scss" scoped>
#border_box {
  border-radius: 4px;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, .1);
}
</style>
