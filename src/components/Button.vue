<template>
    <button 
        :style="{
        backgroundColor: hovered ? '#0070d2' : '#009ee3',
        // color: hovered ? '#fff' : '#333'
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
    cursor: pointer;
    transition: background-color 0.3s ease;
    }
    </style>
    
    