<template>
    <div class="compte">
        <TemplateCompte />
    </div>
</template>

<script>
import TemplateCompte from '@/components/TemplateCompte.vue'

export default {
  name: 'Compte',
  components: {
    TemplateCompte
  }
}
</script>

<style scoped>

.compte {
  height: 110vh;
}

</style>