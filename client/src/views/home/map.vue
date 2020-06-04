<template>
  <div id="map">
    <burma-chart></burma-chart>
  </div>
</template>

<script>
import BurmaChart from '@/components/charts/myanmarChart'

export default {
  name: 'Charts',
  components: {
    BurmaChart
  }
}
</script>

<style lang="scss" scoped>
#map {
  height: calc(100vh - 110px);
}
</style>
