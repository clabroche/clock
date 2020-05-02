<template>
  <div v-if="percentage !== null">
    <section>
      <svg :width="size" :height="size" xmlns="http://www.w3.org/2000/svg">
        <circle stroke="#195267" stroke-width="7" fill="none" :cx="size / 2" :cy="size / 2" :r="rayon"/>
        <circle :class="'circle circle-anim-' + anim"
          stroke="#79bad2"
          stroke-width="7.3"
          :stroke-dasharray="(perimeter / 100 * percentage) + ' '+ perimeter"
          stroke-linecap="round" fill="none"
          :cx="size / 2" :cy="size / 2" :r="rayon"/>
      </svg>
    </section>
  </div>
</template>

<script>

export default {
  name: 'doughtnut-chart',
  props: {
    value: {default: 0},
    size: {default: 160},
  },
  data() {
    return {
      percentage: null,
      anim: 1,
      rayon: 0,
      perimeter: 100
    }
  },
  mounted() {
    this.calculatePercentage(this.value)
  },
  methods: {
    calculatePercentage: function(value) {
      this.rayon = (this.size / 2) - 10 
      this.perimeter = 2* Math.PI * this.rayon
      if(!this.value) return
      let newPercentage = value.toFixed(1)
      if (newPercentage !== this.percentage) {
        this.percentage = newPercentage
        if (this.anim === 1) {
          this.anim = 2
        } else {
          this.anim = 1
        }
      }
    }
  },
  watch: {
    value: function(value) {
      this.calculatePercentage(value)
    }
  }
}
</script>

<style scoped lang="scss">
section {
  border-radius: 50%;
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin-top: 8px
}
.circle {
  transform: rotate(-90deg);
  transform-origin: center;
  transition: 200ms;

}

.info {
  opacity: 1
}

</style>
