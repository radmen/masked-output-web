<template>
  <div class="row">
    <form>
      <fieldset>
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="input.password" autocomplete="off">
        <label for="fields">Fields</label>
        <input type="text" id="fields" v-model="input.fields" placeholder="eg. 1 4 6 8" autocomplete="off">
      </fieldset>
    </form>

    <template v-if="masks.length">
      <hr/>
      <h3 class="masked-password">
        <span v-for="item in masks" :class="{ fade: item.masked }">{{ item.masked ? '*' : item.char }}</span>
      </h3>
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

    masks () {
      const fields = this.fields
      const splitBy = new RegExp('')

      return this.input.password.split(splitBy)
        .map((char, index) => ({
          char,
          masked: !fields.includes(`${index + 1}`)
        }))
    }
  }
}
</script>

<style scoped>
.masked-password {
  font-family: 'PT Mono', monospace;
}

.fade {
  color: #edeff0;
}
</style>
