Vue.component('company-list-item', require('./components/CompanyList.vue'));

const user = new Vue({
    el: '#userHome',
    data: {
        uid: "",
        cList: null,
        preFix: "background-image:/",
        showOverLay: false,
        content: '<h1>hello</h1>'
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
    methods: {
        hideOverLay: function () {
            this.showOverLay = false;
        }
    }
});
