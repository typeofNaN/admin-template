<template>
  <div
    id="map_div"
    :class="className"
    :style="{ height: height, width: width }"
  />
</template>

<script>
import google from 'google'

import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  data () {
    return {
      chart: null,
      cityData: [
        ['Lat', 'Long', 'k'],
        [16.831709, 96.162524, '仰光'],
        [16.778544, 94.737902, '勃生'],
        [19.768529, 96.079467, '内比都'],
        [17.907879, 95.228592, '梅泽利贡'],
        [17.320553, 95.964987, '岱枝']
      ],
      config: {
        'packages': ['map'],
        'mapsApiKey': 'AIzaSyAkSx0d5XEbXSWl03RshT4OFnq6Jm20EtE'
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      google.charts.load('current', this.config)
      google.charts.setOnLoadCallback(this.drawChart)
    })
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    drawChart () {
      let data = google.visualization.arrayToDataTable(this.cityData)

      let map = new google.visualization.Map(this.$el)
      map.draw(data, {
        showTooltip: true,
        showInfoWindow: true,
        zoomLevel: 5
      })
    }
  }
}
</script>
