<template>
  <div class="pic">
    <div class="box">
      <img :src="imagePath">
    </div>
    <div class="text">
      <p v-html="description" v-if="description != ''"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Pic extends Vue {
  @Prop()
  private imagePath!: string;
  @Prop()
  private description!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.pic {
  display: block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.6);
  // width: 400px;
  margin: 20px;
}

.box {
  display: block;
  text-align: center;
  overflow: hidden;
}

.pic img {
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
}

.text {
  position: relative;
}

.text p {
  height: 30px;
  margin-left: 10%;
  line-height: 100%;
}
</style>
