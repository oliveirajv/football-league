<template>
  <div class="block">
    <label :for="nome">{{ nome }}</label>
    <input :type="tipo"
     class="input"
     :id="nome"
     :placeholder="nome"
     :value="modelValue"
     @input="$emit('update:modelValue', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'Campo',
  emits: ['update:modelValue'],
  props: ['nome', 'modelValue', 'tipo'],
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
