<template>
  <div class="clock-bgc">
    <div :style="{
        width: size + 'px',
        height: size + 'px',
        borderRadius: borderRadius + '%',
      }">
    </div>
    <div v-for="(a,i) of Array(60)" :key="i" class="point" :style="{
        left: getX(((6*i) - 90) * (Math.PI / 180)) + 'px',
        top: getY(((6*i) - 90) * (Math.PI / 180)) + 'px',
        transform: 'rotate('+(6*i)+'deg)',
        transformOrigin: 'top',
        height: (6*i) % 30 === 0 ? '30px' : '10px',
        width: (6*i) % 30 === 0 ? '2px' : '1px',
        backgroundColor: (6*i) % 30 === 0 ? '#d9d9d9' : '#ffffff6e',
      }">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    percentage: {default: 0},
    length: {default: 60},
    weight: {default: 2},
    size: {default: 300},
    borderRadius: {default: 50},
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
    },
    getX(deg) {
      return (this.size / 2) + ((this.size/2) * Math.cos(deg)) 
    },
    getY(deg) {
      return (this.size / 2) + ((this.size/2) * Math.sin(deg)) 
    }
  }
}
</script>

<style lang="scss" scoped>
.clock-bgc {
  position: absolute;
  border-radius: 50%;
}
.point{
  width: 1px;
  height: 20px;
  position: absolute;
  background-color: white;
  left: -10px;
  border-bottom-left-radius: 100%;
  border-bottom-left-radius: 100%;
}
</style>