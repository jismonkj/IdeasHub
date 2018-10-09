/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#profileEdit',
    data: {
        id: "",
        type: "",
        url: "",
        email: null
    },
    methods: {
        redirectEditProfile: function () {
            if (this.type == "company")
                window.location.href = "/company/profile/" + this.id;
            else
                window.location.href = "/user/profile/" + this.id;
        },
        getData: function () {
            alert(this.url);
        },
    },
    computed: {
        checkEmail: function () {
            console.log(this.email);
            var pattern = /\@{1}.{1}/;
            if (!pattern.test(this.email)) {
                // alert('err');
                console.log('invalid email');
            }
        }
    }
});
