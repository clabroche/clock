<template>
  <div class="clock-container">
    <number :width="width" :value="clock.hours" :padded="true"></number>
    <div class="colon" :style="{
      opacity: clock.seconds % 2 === 0 ? 0 : 1
    }">
      <div class="point"></div>
      <div class="point"></div>
    </div>
    <number :width="width" :value="clock.minutes" :padded="true"></number>
    <div class="colon" :style="{
      opacity: clock.seconds % 2 === 0 ? 0 : 1
    }">
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
      width: 25
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
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .colon {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 5px;
    width: 100%;
    transition: 300ms;
    .point {
      border-radius: 30%;
      background-color: transparent;
      width: calc(var(--clockDigitalColonWidth) / 2);
      height: calc(var(--clockDigitalColonWidth) / 2);
      box-shadow: 2px 2px 4px 2px #00000038;
      border: 1px solid #b4b4b4;
      box-sizing: border-box;
      margin: 5px 0;
    }
  }
}
</style>