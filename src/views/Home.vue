<template>
  <div class="home">
    <img src="/splash.jpg" alt="Splash image">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Works extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  top: $top-bar-height;
  margin: 0;
  width: 100%;
}

.home img {
  position: fixed;
  object-fit: cover;
  object-position: center;
  height: calc(100vh - #{$top-bar-height});
  width: 100vw;
}

.mobile {
  height: calc(100vh - #{$top-bar-height});
  width: auto;
  overflow: hidden;
}
</style>