<template>
  <div id="app">
    <header-app class="header-app" />
    <router-view class="router-view" />
  </div>
</template>

<script>
import HeaderApp from '@/components/shared/HeaderApp';

export default {
  name: 'App',

  components: {
    HeaderApp,
  }
}
</script>

<style lang="scss">
.header-app {
  position: absolute;
  z-index: 2;
}

.router-view {
  position: absolute;
  z-index: 1;
}
</style>
