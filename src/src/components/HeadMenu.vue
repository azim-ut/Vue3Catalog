<template>
  <header class="grid">
    <div class="menu-toggler"></div>
    <div class="logo">
      <img src="/cup.png" />
    </div>
    <div class="centerBlock">
      <nav>
        <ul>
          <li :class="{'active': row.active}" v-for="row in getMenuItems()">
            <a :href="row.link">{{row.title}}</a>
          </li>
        </ul>
      </nav>
      <div class="phone"></div>
    </div>
    <div class="rightBlock">
    </div>

  </header>
  <div style="height: 200vh;">
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import menuItemsList from "@data/head_menu.json"
import type {MenuItemBean} from "@/bean/MenuItemBean";

export default defineComponent({
  data(){
    return {
      menuItems: menuItemsList
    }
  },
  methods: {
    getMenuItems(): MenuItemBean[]{
      return this.menuItems
    }
  }
})

</script>


<style scoped>
header {
  grid-template-columns: 1fr 6fr 2fr;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #181818;
}
header div {
  border: red 1px solid;
}

header nav ul{
  list-style: none;
}
header nav ul li{
  display: inline;
}
header nav ul li a{
  padding: 1rem;
  font-size: 1rem;
  color: #b7b3b3;
  text-decoration: none;
}
header nav ul li a:hover{
  color: #f8f8f8;
}
header nav ul li.active a{
  color: #ebee90;
}
.logo { }
.logo img{
  width: 80px;
  height: auto;
  position: absolute;
}

.menu-toggler {
  display: none;
}

@media (max-width: 700px) {
  header{
    position: unset;
  }
  .grid-1-1-6-2 {
    grid-template-columns: 1fr;
  }
  header nav ul li{
    display: flex;
  }
  .logo{
    position: fixed;
    bottom: 0;
    right: 0;
    width: 80px;
    height: 80px;
  }
  .logo img{
    transform: rotateY(180deg);
  }
  .menu-toggler{
    display: flex;
  }
}
</style>
