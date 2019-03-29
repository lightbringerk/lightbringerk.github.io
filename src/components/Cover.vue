<template>
  <router-link :to="url" tag="div" class="cover">
    <div class="box">
      <img :src="coverPath" :alt="data.title">
    </div>
    <div class="text">
      <h4>{{ data.title }}</h4>
      <!-- <h3>{{ data.subtitle }}</h3> -->
    </div>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Cover extends Vue {
  @Prop()
  private data!: ArtData;

  private url: string = '/artworks/' + this.data.folder;
  private coverPath: string = this.url + '/cover.jpg';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cover {
  cursor: pointer;
  display: block;
  // border-style: solid;
  // border-width: 1px;
  // color: rgba(0, 0, 0, 0.3);
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.6);
  width: 300px;
  margin: 10px;
}

.box {
  display: block;
  text-align: center;
  overflow: hidden;
}

.cover img {
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  transition: 0.5s;
}

.cover:hover > .box > img {
  vertical-align: top;
  transform: scale(1.2);
  -moz-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transition: 0.5s;
}

.text {
  position: relative;
  text-align: center;
}

.text h4 {
  // margin-left: 10%;
  line-height: 100%;
}

.empty {
  height: 0px;
}
</style>
