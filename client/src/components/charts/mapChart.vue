<template>
  <div
    :class="className"
    :style="{ height: height, width: width }"
  />
</template>

<script>
import resize from './mixins/resize'
import echarts from 'echarts'
import 'echarts/extension/bmap/bmap'

import geoCoordMap from '@/config/coordMap'
import citys from '@/config/cityValues'

var convertData = function (data) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}

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
      default: '800px'
    }
  },
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initChart()
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
    initChart () {
      this.chart = echarts.init(this.$el)

      this.chart.setOption({
        backgroundColor: 'transparent',
        title: {
          text: '缅甸各城市数据统计分析',
          left: 'center',
          textStyle: {
<<<<<<< HEAD
            color: '#fff'
=======
            color: '#3c8d8c'
>>>>>>> master
          }
        },
        tooltip: {
          trigger: 'item'
        },
        bmap: {
          center: [96.1, 19.47],
          zoom: 6,
          roam: true,
          mapStyle: {
            styleJson: [
              {
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
<<<<<<< HEAD
                  'color': '#044161'
=======
                  // 'color': '#044161'
>>>>>>> master
                }
              },
              {
                'featureType': 'land',
                'elementType': 'all',
                'stylers': {
<<<<<<< HEAD
                  'color': '#004981'
=======
                  // 'color': '#004981'
>>>>>>> master
                }
              },
              {
                'featureType': 'boundary',
                'elementType': 'geometry',
                'stylers': {
                  'color': '#064f85'
                }
              },
              {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'highway',
                'elementType': 'geometry',
                'stylers': {
<<<<<<< HEAD
                  'color': '#004981'
=======
                  // 'color': '#004981'
>>>>>>> master
                }
              },
              {
                'featureType': 'highway',
                'elementType': 'geometry.fill',
                'stylers': {
<<<<<<< HEAD
                  'color': '#005b96',
=======
                  // 'color': '#005b96',
>>>>>>> master
                  'lightness': 1
                }
              },
              {
                'featureType': 'highway',
                'elementType': 'labels',
                'stylers': {
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'arterial',
                'elementType': 'geometry',
                'stylers': {
<<<<<<< HEAD
                  'color': '#004981'
=======
                  // 'color': '#004981'
>>>>>>> master
                }
              },
              {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
<<<<<<< HEAD
                  'color': '#00508b'
=======
                  // 'color': '#00508b'
>>>>>>> master
                }
              },
              {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': {
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'green',
                'elementType': 'all',
                'stylers': {
                  'color': '#056197',
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'subway',
                'elementType': 'all',
                'stylers': {
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'local',
                'elementType': 'all',
                'stylers': {
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'arterial',
                'elementType': 'labels',
                'stylers': {
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'boundary',
                'elementType': 'geometry.fill',
                'stylers': {
                  'color': '#029fd4'
                }
              },
              {
                'featureType': 'building',
                'elementType': 'all',
                'stylers': {
<<<<<<< HEAD
                  'color': '#1a5787'
=======
                  // 'color': '#1a5787'
>>>>>>> master
                }
              },
              {
                'featureType': 'label',
                'elementType': 'all',
                'stylers': {
                  'visibility': 'off'
                }
              }
            ]
          }
        },
        series: [
          {
            name: 'val',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(citys),
            encode: {
              value: 2
            },
            symbolSize: function (val) {
              return val[2] / 10
            },
            label: {
              formatter: '{b}',
              position: 'right'
            },
            itemStyle: {
              color: '#ddb926'
            },
            emphasis: {
              label: {
                show: true
              }
            }
          }
          // {
          //   name: 'Top 5',
          //   type: 'effectScatter',
          //   coordinateSystem: 'bmap',
          //   data: convertData(citys.sort(function (a, b) {
          //     return b.value - a.value
          //   }).slice(0, 6)),
          //   encode: {
          //     value: 2
          //   },
          //   symbolSize: function (val) {
          //     return val[2] / 10
          //   },
          //   showEffectOn: 'emphasis',
          //   rippleEffect: {
          //     brushType: 'stroke'
          //   },
          //   hoverAnimation: true,
          //   label: {
          //     formatter: '{b}',
          //     position: 'right',
          //     show: true
          //   },
          //   itemStyle: {
          //     color: '#f4e925',
          //     shadowBlur: 10,
          //     shadowColor: '#333'
          //   },
          //   zlevel: 1
          // }
        ]
      })
    }
  }
}
</script>
