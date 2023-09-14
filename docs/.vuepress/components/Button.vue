<script lang="ts" setup>
const test = () => {
  console.log('hihi');
}
</script>

<template>
  <button type="button" class="btn" @click="test">click me!</button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 5px 10px;
  border-radius: 10px;
  background: #ffeeee;
  border: 1px solid #eeeeee;

  &:hover {
    opacity: 70%;
  }
}
</style>