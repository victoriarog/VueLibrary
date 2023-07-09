<template>
    <input
      type="text"
      class="custom-input"
      v-model="inputValue"
    />
  </template>
  
  <script>
  export default {
    name: 'TextInput',
    data() {
      return {
        inputValue: ''
      };
    }
  };
  </script>
  
  <style scoped>
  .custom-input {
    padding: 10px;
    background-color: #009ee3;
    transition: background-color 0.3s ease;
  }
  
  .custom-input:hover {
    background-color: #0070d2;
  }
  </style>
  