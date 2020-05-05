<template>
  <div class="skeleton-wrapper">
    <style>
      .skeleton-header {
        height: 40px;
        background: #eeeeee;
        padding:0;
        width: 100%;
      }
      .skeleton-block {
        display: flex;
        padding-top: 8px;
        height: calc(100vh - 50px);
        justify-content: space-between;
      }
      .skeleton-left {
        width: 230px;
        height: 100%;
        background: #eeeeee;
      }

      .skeleton-right {
        width: calc(100% - 240px);
        height: 100%;
        background: #eeeeee;
      }
    </style>
    <header class="skeleton-header"></header>
    <section class="skeleton-block">
      <div class="skeleton-left"></div>
      <div class="skeleton-right"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'skeleton'
}
</script>
