<template>
  <div class="fiche-produit">
    <TemplateFicheProduit/>
  </div>
</template>

<script>
// @ is an alias to /src
import TemplateFicheProduit from '@/components/TemplateFicheProduit.vue'

export default {
  name: 'Home',
  components: {
    TemplateFicheProduit,
  },
};
</script>

<style scoped>
@import "../assets/style/footer.css";
@import "../assets/style/fiche-produit.css";
</style>
