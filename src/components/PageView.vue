<template>
  <div class="page-view">
    <transition name="ease" appear>
      <router-view class="content" v-bind:class="{ mobile: isMobile }"/>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PageView extends Vue {
  @Prop()
  private isMobile!: boolean;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.ease-enter {
  opacity: 0;
}

.ease-enter-to {
  opacity: 1;
}

.ease-enter-active {
  transition: 0.7s;
}
</style>
