<template>
<button 
    :style="{
    backgroundColor: hovered ? '#0070d2' : '#009ee3'
    }"
    class="custom-button"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
>
    <slot></slot>
</button>

</template>

<script>
export default {
    name: 'Button',
    data() {
        return {
            hovered: false
    };
    }
};
</script>

<style scoped>
.custom-button {
padding: 10px;
border: none;
}
</style>

