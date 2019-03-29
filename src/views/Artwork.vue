<template>
  <div class="artwork">
    <div class="left" v-bind:class="{ mobileContent: isMobile }">
      <h1>{{ data.title }}</h1>
      <p v-for="(description, index) in data.description" v-bind:key="index" v-html="description"></p>
    </div>
    <div class="right" v-bind:class="{ mobileContent: isMobile }">
      <!-- <img v-for="(img, index) in data.images" v-bind:key="index" :src="path + img.name"> -->
      <Pic v-for="(img, index) in data.images" v-bind:key="index" :imagePath="path + img.name" :description="img.description" :isMobile="isMobile"/>
      <!-- <Pic imagePath="/artworks/eg1/cover.jpg" description="abcdawef"/> -->
    </div>
    <div style="clear: both;"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Pic from '@/components/Pic.vue';
import artworks from '@/artworks.json';

const mt: ArtData = {
  folder: '*mt*',
  title: '',
  display: 'block',
  description: [''],
  images: [{
    name: '',
    description: '',
  }],
};

@Component({
  components: {
    Pic,
  },
})
export default class Artwork extends Vue {
  private path: string = '';
  private data: ArtData = mt;
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

  private getData(): ArtData {
    for (const work of artworks) {
      if (work.folder === this.$route.params.folder) {
        return work;
      }
    }
    return mt;
  }

  private created() {
    this.path = '/artworks/' + this.$route.params.folder + '/';
    this.data = this.getData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.artwork {
  left: 15%;
  top: $top-bar-height;
}

.left {
  width: 25%;
  position: fixed;
  float: left;
}

.right {
  left: 45%;
  top: $top-bar-height;
  width: 60%;
  float: right;
}

.mobileContent {
  position: static;
  float: none;
  width: 100%;
  text-align: justify;
}
</style>