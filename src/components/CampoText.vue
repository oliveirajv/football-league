<template>
  <div class="block">
    <label :for="nome">{{ nome }}</label>
    <div class="control">
      <textarea
          class="textarea"
          :id="nome"
          :placeholder="nome"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)">
      </textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CampoText',
  emits: ['update:modelValue'],
  props: ['nome', 'modelValue'],
  methods: {
    atualizar() {
      this.$emit('atualizou')
    }
  }
}
</script>

<style>
.block:not(:last-child) {
  margin-bottom: 1.5rem;
}
</style>
