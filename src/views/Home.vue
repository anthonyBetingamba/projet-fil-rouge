<template>
  <div class="home">
    <TemplateHome/>
  </div>
</template>

<script>
// @ is an alias to /src
import TemplateHome from '@/components/TemplateHome.vue'

export default {
  name: 'Home',
  components: {
    TemplateHome,
  }
}
</script>

<style scoped>
@import "../assets/style/home.css";
@import "../assets/style/footer.css";
</style>