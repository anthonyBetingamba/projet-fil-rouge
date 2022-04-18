<template>
  <div class="wish-list">
    <TemplateWishList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TemplateWishList from '@/components/TemplateWishList.vue'

export default {
  name: 'WishList',
  components: {
    TemplateWishList
  }
}
</script>

<style scoped>

.wish-list {
  height: 110vh;
}

</style>