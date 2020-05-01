<template>
  <div class="clock-hand" :style="{
    transform: 'rotate('+deg+'deg)',
    height: length + 'px',
    width: weight + 'px',
    left: -weight / 2+'px',
    top: 'calc(50% - '+length+'px)'
  }"></div>
</template>

<script>
export default {
  props: {
    percentage: {default: 0},
    length: {default: 60},
    weight: {default: 2},
  }, 
  data() {
    return {
      deg: 0
    }
  },
  watch: {
    percentage() {
      this.calculateDeg()
    }
  },
  mounted() {
    this.calculateDeg()
  },
  methods: {
    calculateDeg() {
      this.deg = this.percentage * 360 / 100
    }
  }
}
</script>

<style lang="scss" scoped>
.clock-hand {
  position: absolute;
  background-color: #fff;
  width: 2px;
  transform-origin: bottom;
  transition: 0.3s;
  border-top-left-radius: 100%;
  border-top-left-radius: 100%;
}
</style>