<script setup>
</script>

<template>
  <div>
    <tiny-icon iconName="icon-fabu" @onClick="handleClick" />
    <tiny-button iconName="icon-download" name="下载" />
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup(props, context) {
        const handleClick = () => {
          console.log('click event')
        }
        return {
          handleClick
        }
    }
})
</script>
<style scoped>
</style>
