
Vue.component('idea-shared', require('./components/IdeaForReview.vue'));
Vue.component('modal-pay', require('./components/ModalPay.vue'));
const company = new Vue({
    el: '#companyHome',
    data: {
        uid: "",
        iList: null,
        iReviewList: [],
        iBoughtList: [],
        preFix: "background-image:/",
        csrfToken: $('meta[name="csrf-token"]').attr('content'),
        showModal: false,
        payAmount: '...',
        walletBalance: '..',
        user_id:'',
        iid:'',
        iindex:''
    },
    mounted: function () {
        //ideas for review
        axios.post('company/list/ideas/r')
            .then(function (response) {
                this.iReviewList = response.data;
                // console.log(response.data);
            }.bind(this))
            .catch(function (error) {
                // console.log(error);
            });
        //paid ideas
        axios.post('company/list/ideas/p')
            .then(function (response) {
                this.iBoughtList = response.data;
                // console.log(response.data);
            }.bind(this))
            .catch(function (error) {
                // console.log(error);
            });
        //interested ideas
        axios.post('company/list/ideas/i')
            .then(function (response) {
                this.iList = response.data;
                // console.log(response.data);
            }.bind(this))
            .catch(function (error) {
                // console.log(error);
            });
    },
    methods:{
        showInterestOnIdea:function(index, id){
            //update idea status
            var status = "interested";
            this.changeIdeaStatus(id, status);
            this.iReviewList[index]['status'] = 'interested';
            this.iList.push(this.iReviewList[index]);
            this.iReviewList.splice(index, 1);    
        },
        delInteresteOnIdea:function(index, id){
            //update idea status
            var status = "notinterested";
            this.changeIdeaStatus(id, status);
            this.iList.splice(index, 1);
            
        },
        changeIdeaStatus:function(id, status){
            axios.post('company/change/idea/s', {'status':status, 'id':id})
            .then(function(response){ 
                //success
            })
            .catch(function (error) {
                // console.log(error);
            });
        }
    }
});