<template>
<input
    type="text"
    :style="{
    backgroundColor: hovered ? '#0070d2' : '#009ee3'
    }"
    class="custom-input"
    v-model="inputValue"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
/>
</template>

<script>
export default {
    name: 'TextInput',
    data() {
        return {
        inputValue: '',
        hovered: false
        };
    }
};
</script>

<style scoped>
.custom-input {
padding: 10px;
}
</style>
