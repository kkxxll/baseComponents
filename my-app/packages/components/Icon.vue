<template>
    <svg :class="svgClass" aria-hidden="true" @click="handleClick">
        <use :xlink:href="iconName"></use>
    </svg>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    props: {
        svgClass: {
            type: String,
            default: ''
        },
        iconName: {
            type: String,
            required: true,
        },
    },
    setup(props, context) {
        const svgClass = ref(`icon ${props.svgClass}`)
        const iconName = ref(`#${props.iconName}`)
        const handleClick = () => {
            context.emit('onClick')
        }
        return {
            svgClass,
            iconName,
            handleClick
        }
    }
})
</script>
<style scoped>
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    cursor: pointer;
}
</style>