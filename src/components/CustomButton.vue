<template>
<button 
    :style="{
    backgroundColor: hovered ? '#0070d2' : '#009ee3'
    }"
    class="custom-button"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    @click="handleClick"
>
    <slot></slot>
</button>

</template>

<script>
export default {
    name: 'CustomButton',
    data() {
        return {
            hovered: false
    };
    },
    methods: {
    handleClick() {
      //onClick event
    }
  }
};
</script>

<style scoped>
.custom-button {
padding: 10px;
border: none;
}
</style>

