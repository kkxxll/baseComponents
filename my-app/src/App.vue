<script setup>
</script>

<template>
  <div>
    <Icon iconName="icon-fabu" @onClick="handleClick" />
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
