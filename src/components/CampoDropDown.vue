<template>
  <div class="block">
    <label :for="nome">{{ nome }}</label>
    <div class="select is-normal">
      <select
          :id="nome"
          :placeholder="nome"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)">
        <option v-for="item in itens" :key="item" :value="item">{{ item }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CampoDropDown',
  emits: ['update:modelValue'],
  props: ['nome', 'modelValue', 'itens'],
  methods: {
    atualizar() {
      this.$emit('bombom')
    }
  }
}
</script>

<style>
.block:not(:last-child) {
  margin-bottom: 1.5rem;
}
</style>