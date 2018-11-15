<template>
  <div class="row">
    <form>
      <fieldset>
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="input.password">
        <label for="fields">Fields</label>
        <input type="text" id="fields" v-model="input.fields" placeholder="eg. 1 4 6 8">
      </fieldset>
      <hr/>
    </form>

    <template v-if="maskedPassword.length">
      <h2>Your password:</h2>
      <h3 class="masked-password">{{ maskedPassword }}</h3>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MaskedOutput',

  data() {
    return {
      input: {
        password: '',
        fields: ''
      }
    }
  },

  computed: {
    fields () {
      return this.input.fields.split(/[ ,;]/)
        .map(str => str.trim())
        .filter(str => /^\d+$/.test(str))
    },

    maskedPassword () {
      return this.fields.map(key => this.input.password.substr(key - 1, 1))
        .join('')
    }
  }
}
</script>

<style scoped>
.masked-password {
  font-family: 'PT Mono', monospace;
}
</style>
