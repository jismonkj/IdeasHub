window.vueDropzone = require('vue2-dropzone');

import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

Vue.component('company-list-item', require('./components/CompanyList.vue'));
Vue.component('idea-shared', require('./components/IdeaShared.vue'));

const user = new Vue({
    el: '#userHome',
    data: {
        uid: "",
        cList: null,
        iList: null,
        preFix: "background-image:/"
    },
    mounted: function () {
        axios.post('/list/company')
            .then(function (response) {
                this.cList = response.data;
            }.bind(this))
            .catch(function (error) {
                // console.log(error);
            });

        axios.post('/list/idea')
            .then(function (response) {
                this.iList = response.data;
                // console.log(response.data);
            }.bind(this))
            .catch(function (error) {
                // console.log(error);
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
                duplicateCheck: true,
                url: '/idea/upload',
                thumbnailWidth: 150,
                maxFilesize: 2,
                autoProcessQueue: false,
                acceptedFiles: 'image/*,application/pdf',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            }
        }
    },
    methods: {
        vdropzoneSuccess: function (file, response) {
            if (response) {
                //
            }
        },
        uploadDropzone: function () {
            this.$refs.myVueDropzone.processQueue();
        },
        removeAll: function () {
            this.$refs.myVueDropzone.removeAllFiles();
        },
        redirectHome: function () {
            window.location.href = "/home";
        },
        ideaPreview: function () {
            window.location.href = "/idea/preview";
        }

    }
});
