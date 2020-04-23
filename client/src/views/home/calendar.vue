<template>
  <div id="calendar">
    <el-calendar
      v-model="date"
      :first-day-of-week="7"
    ></el-calendar>
  </div>
</template>

<script>
export default {
  name: 'calendar',
  data: () => ({
    date: new Date()
  })
}
</script>
