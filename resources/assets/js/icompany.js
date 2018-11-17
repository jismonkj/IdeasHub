window.vueDropzone = require('vue2-dropzone');

import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

Vue.component('idea-shared', require('./components/IdeaShared.vue'));
const user = new Vue({
    el: '#companyHome',
    data: {
        uid: "",
        cList: null,
        iList: null,
        preFix: "background-image:/",
        csrfToken: $('meta[name="csrf-token"]').attr('content')
    },
    mounted: function () {
        // axios.post('/list/company')
        //     .then(function (response) {
        //         this.cList = response.data;
        //     }.bind(this))
        //     .catch(function (error) {
        //         // console.log(error);
        //     });

        axios.post('/list/idea')
            .then(function (response) {
                this.iList = response.data;
                // console.log(response.data);
            }.bind(this))
            .catch(function (error) {
                // console.log(error);
            });
    },
    methods: {
        delIdea:function(index, id){
            this.iList.splice(index, 1);
            //del idea on db
            axios.post('/del/idea', {'iid':id}).then(function(response){
                // console.log(response.data);
            });
        } 
    },
    components: {
        vueDropzone
    }
});