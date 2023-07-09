import Vue from 'vue'
import Button from './components/Button.vue'
import TextInput from './components/TextInput.vue'

Vue.component('Button', Button);
Vue.component('TextInput', TextInput);

const buttonElement = document.querySelector('#buttonId');
const textInputElement = document.querySelector('#textInputId');

if (buttonElement) {
    new Vue({
        el: buttonElement
    });
}

if (textInputElement) {
    new Vue({
        el: textInputElement
    });
}

export default {
    Button,
    TextInput
};