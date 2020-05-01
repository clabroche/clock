<template>
  <div class="doughnut-container">
    <doughnut class="doughnut" :value='clock.percentageSeconds' :size="doughnutSize"></doughnut>
    <doughnut class="doughnut" :value='clock.percentageMinutes' :size="doughnutSize + 20"></doughnut>
    <doughnut class="doughnut" :value='clock.percentageHours' :size="doughnutSize + 40"></doughnut>
    <doughnut class="doughnut" :value='clock.percentageDays' :size="doughnutSize + 60"></doughnut>
    <doughnut class="doughnut" :value='clock.percentageMonth' :size="doughnutSize + 80"></doughnut>
    <doughnut class="doughnut" :value='clock.percentageUniverse' :size="doughnutSize + 100"></doughnut>
  </div>  
</template>

<script>
import clock from '../services/clock'
import DoughtnutChartVue from '../components/DoughtnutChart'
export default {
  components: {
    doughnut: DoughtnutChartVue
  },
  data() {
    return {
      doughnutSize: 180,
      clock
    }
  },
}
</script>

<style lang="scss" scoped>
.doughnut-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .doughnut {
    position: absolute;
  }
}
</style>