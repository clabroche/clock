<template>
  <div class="number">
    <integer
      :value="integer"
      :width="width"
      v-for='(integer, position) of padded ? pad(value) : value'
      :key="'hours' + '-' + position">
    </integer>
  </div>
</template>

<script>
import IntegerVue from './Integer.vue'
export default {
  components: {
    integer: IntegerVue
  },
  props: {
    padded: {default: false},
    value: {default: 0},
    width: {default: 40}
  },
  methods: {
    pad(d) {
      return (d < 10) ? '0' + Math.floor(d).toFixed() : Math.floor(d).toFixed();
    }
  }
}
</script>

<style lang="scss" scoped>
.number {
  display: flex;
}
</style>