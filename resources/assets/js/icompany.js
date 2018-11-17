
Vue.component('idea-shared', require('./components/IdeaForReview.vue'));
const company = new Vue({
    el: '#companyHome',
    data: {
        uid: "",
        iList: null,
        preFix: "background-image:/",
        csrfToken: $('meta[name="csrf-token"]').attr('content')
    },
    mounted: function () {
        axios.post('company/list/ideas')
            .then(function (response) {
                this.iList = response.data;
                // console.log(response.data);
            }.bind(this))
            .catch(function (error) {
                // console.log(error);
            });
    }
});