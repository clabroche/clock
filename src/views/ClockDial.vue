<template>
  <div class="clock-container">
    <clock-bgc></clock-bgc>
    <div class="clock-center"></div>
    <clock-hand :percentage='clock.percentageSeconds' :length="clockHandLength * 2" :weight="1"></clock-hand>
    <clock-hand :percentage='clock.percentageMinutes' :length="clockHandLength * 2"></clock-hand>
    <clock-hand :percentage='clock.percentageHoursOn12' :length="clockHandLength"></clock-hand>
  </div>
</template>

<script>
import clock from '../services/clock'
import clockHandVue from '../components/clockHand/clockHand.vue'
import clockBgcVue from '../components/clockHand/clockBgc.vue'
export default {
  components: {
    'clock-hand': clockHandVue,
    'clock-bgc': clockBgcVue,
  },
  data() {
    return {
      clockHandLength: 50,
      clock
    }
  },
}
</script>

<style lang="scss" scoped>
.clock-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .clock-center {
    width: 10px;
    height: 10px;
    left: -5px;
    position: absolute;
    background-color: #fff;
    border-radius: 100%;
  }
  
}
</style>