<template>
  <header>
    <div class="desktopHeadBlock">1
      <DesktopHeadBlock />
    </div>
    <div class="mobileHeadBlock">
      <MobileHeadBlock />
    </div>
  </header>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import MobileHeadBlock from "@/components/head_blocks/MobileHeadBlock.vue"
import DesktopHeadBlock from "@/components/head_blocks/DesktopHeadBlock.vue"

export default defineComponent({
  components: {MobileHeadBlock, DesktopHeadBlock},
  data(){
    return {
    }
  },
  methods: {
  }
})

</script>


<style scoped>

.desktopHeadBlock{
  display: block;
}
.mobileHeadBlock{
  display: none;
}
@media (max-width: 700px) {
  .desktopHeadBlock{
    display: none;
  }
  .mobileHeadBlock{
    display: block;
  }
}
</style>
