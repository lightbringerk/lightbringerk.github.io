<template>
  <div id="app">
    <TopBar :isMobile="isMobile"/>
    <PageView :isMobile="isMobile"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import TopBar from '@/components/TopBar.vue';
import PageView from '@/components/PageView.vue';

@Component({
  components: {
    TopBar,
    PageView,
  },
})

export default class App extends Vue {
  private viewWidth = window.innerWidth;
  private get isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(navigator.userAgent) || this.viewWidth < 900) {
      return true;
    } else {
      return false;
    }
  }

  @Watch('viewWidth')
  @Watch('isMobile')

  private updateWidth() {
    this.viewWidth = window.innerWidth;
  }

  private mounted() {
    window.addEventListener('resize', this.updateWidth);
  }
}
</script>

<style lang="scss">
.page-view {
  width: 100%;
  height: 100%;
  text-align: left;
  padding-top: $top-bar-height;
}

.content {
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
}

.mobile {
  margin-top: 10%;
  width: 80%;
  // text-align: justify;
}
</style>
