<template>
  <div class="topbar" v-bind:class="{ 'mobile-topbar': isMobile }">
    <div v-if="!isMobile" class="nav" @touchmove="prevent">
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/artworks">WORKS</router-link>
      <router-link to="/">HOME</router-link>
    </div>
    <div v-if="isMobile" class="nav" @touchmove="prevent">
      <div class="menu-icon" v-on:click="toggleMenu">
        <div class="menu-div"/>
        <div class="menu-div"/>
        <div class="menu-div"/>
      </div>
    </div>
    <div v-if="isMobile" class="mobile-nav" nums="3" @touchmove="prevent">
      <ul>
        <router-link to="/" tag="li" @click.native="toggleMenu">HOME</router-link>
        <router-link to="/artworks" tag="li" @click.native="toggleMenu">WORKS</router-link>
        <router-link to="/about" tag="li" @click.native="toggleMenu">ABOUT</router-link>
      </ul>
    </div>
    <div class="logo">
      <img src="@/assets/logo.png" alt="Katrina Wang Logo" @touchmove="prevent">
      <h6><router-link to="/" tag="a" v-if="!isMobile">KATRINA WANG</router-link></h6>
    </div>
    <div style="clear: both;"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {
  },
})

export default class TopBar extends Vue {
  @Prop()
  private isMobile!: boolean;

  private menuOpen = false;

  private toggleMenu() {
    if (this.menuOpen) {
      const menu = document.getElementsByClassName('mobile-nav')[0] as HTMLElement;
      const topbar = document.getElementsByClassName('topbar')[0] as HTMLElement;
      menu.style.height = '0';
      // topbar.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
      this.menuOpen = false;
    } else {
      const menu = document.getElementsByClassName('mobile-nav')[0] as HTMLElement;
      const topbar = document.getElementsByClassName('topbar')[0] as HTMLElement;
      const height = (parseInt(menu.getAttribute('nums') as string, 10) * 50).toString() + 'px';
      menu.style.height = height;
      topbar.style.boxShadow = 'none';
      this.menuOpen = true;
    }
  }

  private prevent(event: Event) {
      event.preventDefault();
      event.stopPropagation();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$nav-size: 40px;
$logo-size: 60px;

.topbar {
  padding: 0 10%;
  position: fixed;
  width: 80%;
  height: $top-bar-height;
  background-color: $bg;
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 999;
}

.mobile-topbar {
  padding: 0 20px;
  width: calc(100% - 40px);
}

.nav {
  float: right;
  line-height: $top-bar-height;
  height: $top-bar-height;
  width: calc(40% - 20px);
}

.nav a {
  float: right;
  margin: 0 12px;
  font-size: 16px;
  font-weight: bold;
  color: $gray;
}

.nav a:hover {
  color: $accent;
  transition: 0.2s;
}

// .nav a.router-link-exact-active:hover {
//   color: $accent2;
//   transition: 0.2s;
// }

.nav a.router-link-exact-active {
  color: $accent;
}

.nav img {
  float: right;
  transform: rotate(180deg);
  height: $nav-size; 
  margin-top: calc((#{$top-bar-height} - #{$nav-size}) / 2);
}

.menu-icon {
  float: right;
  margin-top: calc((#{$top-bar-height} - #{$nav-size}) / 2 + 3px);
}

.menu-div {
  width: $nav-size;
  height: calc(#{$nav-size} / 5 - 2px);
  background-color: $gray;
  margin-bottom: calc(#{$nav-size} / 5);
  border-radius: 5px;
}

.mobile-nav {
  top: $top-bar-height;
  height: 0;
  left: 0;
  width: 100vw;
  position: fixed;
  z-index: 999;
  overflow-x: hidden;
  background: $bg;
  transition: 0.5s;
  text-align: center;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
}

.mobile-nav ul {
  margin: 0;
  padding: 0;
}

.mobile-nav li {
  height: 50px;
  width: 100vw;
  font-size: 16px;
  line-height: 50px;
  font-weight: bold;
  color: $gray;
}

.mobile-nav li.router-link-exact-active {
  color: $accent;
}

.logo {
  float: left;
  width: 60%;
}

.logo img {
  float: left;
  height: $logo-size;
  margin: calc((#{$top-bar-height} - #{$logo-size}) / 2) 0;
}

.logo h6 {
  margin: 0;
  float: left;
  font-size: 40px;
  margin-left: calc((#{$top-bar-height} - #{$logo-size}) / 2);
  line-height: $top-bar-height;
  height: $top-bar-height;
}

.logo a:hover {
  color: $accent;
  transition: 0.5s;
}

.logo a {
  color: $gray;
}
</style>