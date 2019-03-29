<template>
  <div class="works">
    <Cover v-for="(item, index) in artworks" v-bind:key="index"
      v-bind:class="{ empty: item.folder == '*mt*' }"
      v-bind:style="{ display: item.display }"
      :data="item"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Cover from '@/components/Cover.vue';
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
    Cover,
  },
})

export default class Works extends Vue {
  private artworks: ArtData[] = artworks;
  private artworksOrig: ArtData[] = artworks.slice(0);
  private numEmpty = 0;

  @Watch('numEmpty')

  private visibleLength() {
    let count = 0;
    for (const work of artworks) {
      if (work.display === 'block') {
        count += 1;
      }
    }
    return count;
  }

  private getNumEmpty() {
    const flexbox = document.getElementsByClassName('works')[0] as HTMLElement;
    const lineNumElt: number = Math.floor((flexbox.clientWidth as number) / 320);
    const numEmpty: number = (lineNumElt - this.visibleLength() % lineNumElt) % lineNumElt;
    return lineNumElt;
  }

  private beautify() {
    this.numEmpty = this.getNumEmpty();
    this.artworks = this.artworksOrig.slice(0);
    for (let i = 0; i < this.numEmpty; i++) {
      this.artworks.push(mt);
    }
  }

  private mounted() {
    this.beautify();
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.numEmpty = this.getNumEmpty();
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.works {
  left: 15%;
  top: $top-bar-height;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  justify-content: space-around;
}

.empty {
  box-shadow: none;
}

.empty :nth-child(1) {
  display: none;
}
.empty :nth-child(2) {
  display: none;
}
</style>