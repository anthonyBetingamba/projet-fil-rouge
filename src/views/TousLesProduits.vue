<template>
  <div class="tous-les-produits">
    <TemplateProduits />
  </div>
</template>

<script>
import TemplateProduits from "@/components/TemplateProduits.vue";

export default {
  name: "TousLesProduits",
  components: {
    TemplateProduits,
  },
};
</script>

<style scoped>
@import "../assets/style/tousLesProduits.css";
@import "../assets/style/footer.css";

.tous-les-produits {
  height: 110vh;
}
</style>
