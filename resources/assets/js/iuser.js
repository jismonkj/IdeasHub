window.vueDropzone = require('vue2-dropzone');

import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

Vue.component('company-list-item', require('./components/CompanyList.vue'));

const user = new Vue({
    el: '#userHome',
    data: {
        uid: "",
        cList: null,
        preFix: "background-image:/"
    },
    mounted: function () {
        axios.post('/list/company')
            .then(function (response) {
                this.cList = response.data;
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    },
    methods: {},
    components: {
        vueDropzone
    }
});

const drop = new Vue({
    el: '#vDropZone',
    components: {
        vueDropzone: vue2Dropzone
    },
    data: function () {
        return {
            dropzoneOptions: {
                url: '/idea/upload',
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: {
                    "My-Awesome-Header": "header value"
                }
            }
        }
    }
});
