<template>
  <div class="container">
    <MaskedOutput />
  </div>
</template>

<script>
import MaskedOutput from './components/MaskedOutput.vue'

import '../node_modules/milligram/dist/milligram.css'

export default {
  name: 'app',
  components: {
    MaskedOutput
  }
}
</script>

<style scoped>
.container {
  max-width: 80rem;
  margin: 10rem auto;
}
</style>
