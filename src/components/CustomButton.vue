<template>
    <button
      class="custom-button"
      @click="handleClick"
    >
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'CustomButton',
    methods: {
      handleClick() {
        // onClick event
      }
    }
  };
  </script>
  
  <style scoped>
  .custom-button {
    padding: 10px;
    border: none;
    background-color: #009ee3;
    transition: background-color 0.3s ease;
  }
  
  .custom-button:hover {
    background-color: #0070d2;
  }
  </style>
  