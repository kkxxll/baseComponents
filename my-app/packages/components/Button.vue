<template>
    <div class="tiny-button">
        <button>
            <tiny-icon :iconName="iconName" />
            {{name}}
        </button>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import Icon from './Icon.vue'

export default defineComponent({
    extends: Icon,
    props: {
        name: {
            type: String,
            default: ''
        },
    },
    setup(props, context) {
    }
})

</script>
<style scoped>
.tiny-button button {
    height: 32px;
    padding: 0 12px;
}
</style>