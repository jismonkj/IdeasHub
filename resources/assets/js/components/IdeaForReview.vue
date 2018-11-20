<template>
<transition leave-active-class="animated fadeOut faster">
    <div class="card">
        <div class="p-2">
            <div class="card-header s-bg p-color idea-paragraph">{{ title }} <span class="float-right">{{ company }}</span></div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <h5>Summary</h5>
                        <p class="idea-paragraph">{{ summary }}</p>
                    </div>
                    <div class="col-md-12">
                        <div class="float-right">
                            <form v-if="(status == 'paid')" action="company/view/idea" method="post" class="d-inline-block">
                                <input name="_token" :value="csrfToken" hidden>
                                <input type="hidden" name="iid" :value="id">
                                 <button class="btn btn-sm btn-success" type="submit" title="More">
                                    <i class="fas fa-play"></i>
                                </button>
                            </form>
                             <button v-if="(status=='authorised')" class="btn btn-sm btn-success" type="submit" title="More" v-on:click="showModal">
                                <i class="fas fa-play"></i>
                            </button>
                            <form action="company/view/user" method="post" class="d-inline-block">
                                <input name="_token" :value="csrfToken" hidden>
                                <input type="hidden" name="uid" :value="uid">
                                 <button class="btn btn-sm btn-primary" type="submit" title="User Profile">
                                    <i class="fas fa-user-check"></i>
                                </button>
                            </form>
                            <button class="btn btn-sm btn-info" v-if="(status=='fresh' || status=='notinterested')" v-on:click="$emit('remove')" title="This is interesting?">
                                <i class="fas fa-thumbs-up"></i>
                            </button>
                            <button class="btn btn-sm btn-danger" v-if="(status=='fresh' && status != 'authorised' || status!='notinterested') && status != 'authorised'" v-on:click="$emit('remove')" title="Not Interesting">
                                <i class="fas fa-thumbs-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</transition>
<!-- template for the modal component -->
</template>
<script>
export default {
  props: ["index", "id", "c_id", "company", "title", "summary", "uid", "price", "status"],
  data:function(){
      return {
          csrfToken: $('meta[name="csrf-token"]').attr('content')
      }
  },
  methods: {
      startWalletPay:function(){
          
      },
      showModal:function(){
          //depreciated method
         this.$parent.showModal = true;
         this.$parent.payAmount = this.price;
         this.$parent.user_id = this.uid;
         this.$parent.iid = this.id;
         this.$parent.iindex = this.index;

          //wallet balance
        axios.get('wallet/get/balance')
        .then(function (response) {
             this.$parent.walletBalance = response.data;
            // console.log(response.data);
        }.bind(this))
        .catch(function (error) {
            // console.log(error);
        });
      }
  }
};
</script>