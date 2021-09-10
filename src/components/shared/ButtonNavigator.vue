<template>
  <div class="button_navigator">
    <span
      :class="disablePrevious ? 'button_disabled' : null"
      class="button_navigator__previous"
      @click="previous"
    >
      <img src="../../assets/icons/previous.svg" alt="Previous" />
    </span>
    <span
      :class="disableNext ? 'button_disabled' : null"
      class="button_navigator__next"
      @click="next"
    >
      <img src="../../assets/icons/next.svg" alt="Next" />
    </span>
  </div>
</template>

<script>
export default {
  name: "ButtonNavigator",

  props: {
    disablePrevious: {
      type: Boolean,
      required: true,
    },
    disableNext: {
      type: Boolean,
      required: true,
    },
    previous: {
      type: Function,
      required: true,
    },
    next: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.button_navigator {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  .button_navigator__previous,
  .button_navigator__next {
    background: $harvestGold;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.button_disabled {
  background: $brandy !important;
  cursor: not-allowed !important;
}
</style>
