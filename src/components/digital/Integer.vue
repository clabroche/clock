<template>
  <div class="integer" :class="'number' + value">
    <div class="bar top"></div>
    <div class="horizontal">
      <div class="bar left-top"></div>
      <div class="bar right-top"></div>
    </div>
    <div class="bar center"></div>
    <div class="horizontal">
      <div class="bar left-bottom"></div>
      <div class="bar right-bottom"></div>
    </div>
    <div class="bar bottom"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {default: 0},
    width: {default: 40}
  },
  mounted() {
    this.changeWidth()
  },
  watch: {
    width() {
      this.changeWidth()
    }
  },
  methods: {
    changeWidth() {
      const html = document.documentElement
      html.style.setProperty('--numericIntegerWidth', this.width + 'px')
    }
  }
}
</script>

<style lang="scss">
:root {
  --numericIntegerWidth: 40px;
  --numericIntegerWeight: calc(var(--numericIntegerWidth) / 10);
  
  --numericIntegerIncrementalDelay: 40ms;

  --numericIntegerTransitionTop: 0ms;
  --numericIntegerTransitionLeftTop: calc(var(--numericIntegerTransitionTop) + var(--numericIntegerIncrementalDelay));
  --numericIntegerTransitionRightTop: calc(var(--numericIntegerTransitionLeftTop) + var(--numericIntegerIncrementalDelay));
  --numericIntegerTransitionCenter: calc(var(--numericIntegerTransitionRightTop) + var(--numericIntegerIncrementalDelay));
  --numericIntegerTransitionLeftBottom: calc(var(--numericIntegerTransitionCenter) + var(--numericIntegerIncrementalDelay));
  --numericIntegerTransitionRightBottom: calc(var(--numericIntegerTransitionLeftBottom) + var(--numericIntegerIncrementalDelay));
  --numericIntegerTransitionBottom: calc(var(--numericIntegerTransitionRightBottom) + var(--numericIntegerIncrementalDelay));
}
</style>
<style lang="scss" scoped>
.integer {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px;
  .horizontal {
    display: flex;
    justify-content: space-between;
  }
  .bar {
    background-color: #fff;
    opacity: 0;
    transition: 300ms;
    &.top {
      transition-delay: var(--numericIntegerTransitionTop);
      width: var(--numericIntegerWidth);
      height: var(--numericIntegerWeight);
      border-bottom-left-radius: var(--numericIntegerWeight);
      border-bottom-right-radius: var(--numericIntegerWeight);
    }
    &.center {
      transition-delay: var(--numericIntegerTransitionCenter);
      width: var(--numericIntegerWidth);
      height: var(--numericIntegerWeight);
      border-bottom-left-radius: 50%;
      border-top-left-radius: 50%;
      border-bottom-right-radius: 50%;
      border-top-right-radius: 50%;
    }
    &.bottom {
      transition-delay: var(--numericIntegerTransitionBottom);
      width: var(--numericIntegerWidth);
      height: var(--numericIntegerWeight);
      border-top-left-radius: var(--numericIntegerWeight);
      border-top-right-radius: var(--numericIntegerWeight);
    }

    &.left-top {
      transition-delay: var(--numericIntegerTransitionLeftTop);
      transition-delay: 0;
      width: var(--numericIntegerWeight);
      height: var(--numericIntegerWidth);
      border-bottom-right-radius: var(--numericIntegerWeight);
      border-top-right-radius: var(--numericIntegerWeight);
    }
    &.right-top {
      transition-delay: var(--numericIntegerTransitionRightTop);
      width: var(--numericIntegerWeight);
      height: var(--numericIntegerWidth);
      border-bottom-left-radius: var(--numericIntegerWeight);
      border-top-left-radius: var(--numericIntegerWeight);
    }
    &.left-bottom {
      transition-delay: var(--numericIntegerTransitionLeftBottom);
      width: var(--numericIntegerWeight);
      height: var(--numericIntegerWidth);
      border-bottom-right-radius: var(--numericIntegerWeight);
      border-top-right-radius: var(--numericIntegerWeight);
    }
    &.right-bottom {
      transition-delay: var(--numericIntegerTransitionRightBottom);
      width: var(--numericIntegerWeight);
      height: var(--numericIntegerWidth);
      border-bottom-left-radius: var(--numericIntegerWeight);
      border-top-left-radius: var(--numericIntegerWeight);
    }
  }
  &.number1 {
    .right-top, .right-bottom {
      opacity: 1;
    }
  }

  &.number2 {
    .top,
    .right-top,
    .center,
    .left-bottom,
    .bottom {
      opacity: 1;
    }
  }

  &.number3 {
    .top,
    .right-top,
    .center,
    .right-bottom,
    .bottom {
      opacity: 1;
    }
  }

  &.number4 {
    .left-top,
    .right-top,
    .center,
    .right-bottom {
      opacity: 1;
    }
  }

  &.number5 {
    .top,
    .left-top,
    .center,
    .right-bottom,
    .bottom {
      opacity: 1;
    }
  }

  &.number6 {
    .top,
    .left-top,
    .center,
    .left-bottom,
    .right-bottom,
    .bottom {
      opacity: 1;
    }
  }

  &.number7 {
    .top,
    .right-top,
    .right-bottom {
      opacity: 1;
    }
  }

  &.number8 {
    .top,
    .left-top,
    .left-bottom,
    .center,
    .right-top,
    .right-bottom,
    .bottom {
      opacity: 1;
    }
  }

  &.number9 {
    .top,
    .left-top,
    .center,
    .right-top,
    .right-bottom,
    .bottom {
      opacity: 1;
    }
  }

  &.number0 {
    .top,
    .left-top,
    .right-top,
    .right-bottom,
    .left-bottom,
    .bottom {
      opacity: 1;
    }
  }
}
</style>