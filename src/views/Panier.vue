<template>
    <div class="panier">
        <TemplatePanier />
    </div>
</template>

<script>
import TemplatePanier from '@/components/TemplatePanier.vue'

export default {
  name: 'Panier',
  components: {
    TemplatePanier
  }
}
</script>

<style scoped>

.panier {
  height: 110vh;
}

</style>