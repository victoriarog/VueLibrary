import Vue from 'vue'
import CustomButton from './components/CustomButton.vue'
import TextInput from './components/TextInput.vue'

Vue.component('CustomButton', CustomButton);
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
    CustomButton,
    TextInput
};