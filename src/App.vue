<template>
  <div class="container">
    <MaskedOutput />
    <Footer />
  </div>
</template>

<script>
import MaskedOutput from './components/MaskedOutput.vue'
import Footer from './components/Footer.vue'

import '../node_modules/milligram/dist/milligram.css'

export default {
  name: 'app',
  components: {
    MaskedOutput,
    Footer
  }
}
</script>

<style scoped>
.container {
  max-width: 80rem;
  margin: 10rem auto;
}
</style>
