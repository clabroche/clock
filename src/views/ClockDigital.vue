<template>
  <div class="clock-container">
    <number :width="width" :value="clock.hours" :padded="true"></number>
    <div class="colon">
      <div class="point"></div>
      <div class="point"></div>
    </div>
    <number :width="width" :value="clock.minutes" :padded="true"></number>
    <div class="colon">
      <div class="point"></div>
      <div class="point"></div>
    </div>
    <number :width="width" :value="clock.seconds" :padded="true"></number>
  </div>
</template>

<script>
import clock from '../services/clock'
import NumberVue from '../components/digital/Number.vue'
export default {
  components: {
    number: NumberVue
  },
  data() {
    return {
      clock,
      number: 8,
      width: 30
    }
  },
  mounted() {
    const html = document.documentElement
    html.style.setProperty('--clockDigitalColonWidth', (this.width / 2) - (this.width / 10) + 'px')
  },
}
</script>
<style lang="scss" scoped>
.clock-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .colon {
    display: flex;
    justify-content: space-around;
    margin: 10px calc(var(--clockDigitalColonWidth) * 2);
    width: 100%;
    .point {
      border-radius: 30%;
      background-color: #fff;
      width: calc(var(--clockDigitalColonWidth) / 2);
      height: calc(var(--clockDigitalColonWidth) / 2);
    }
  }
}
</style>