import Vue from 'vue'
import Button from './components/Button.vue'
import TextInput from './components/TextInput.vue'

Vue.component('Button', Button);
Vue.component('TextInput', TextInput);

new Vue({
    el: '#app'
  })
  
  export default {Button, TextInput};