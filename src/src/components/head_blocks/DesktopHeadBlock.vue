<template>
  <div class="greetings">
    Desktop
    <ul>
      <li :class="{'active': row.active}" v-for="row in getMenuItems()">
        <a :href="row.link">{{row.title}}</a>
      </li>
    </ul>
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

</style>
