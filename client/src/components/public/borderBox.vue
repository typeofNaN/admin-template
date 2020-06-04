<template>
  <div id="border_box">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
#border_box {
  border-radius: 4px;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, .1);
}
</style>
