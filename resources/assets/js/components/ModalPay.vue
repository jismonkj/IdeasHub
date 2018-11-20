
  <template>
    <transition name="modal">
       <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-body" v-if="!refillWallet">
            <slot name="body" v-if="!transferComplete">
                <div class="card">
                    <div class="card-header bg-success text-white">
                        Confirm Payment
                    </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            //
                        </div>
                    </div>
                    <div class="row pt-3">
                        <div class="col">
                            <button class="btn btn-primary">Wallet Balance : 
                                <span class="badge badge-default"><b><i class="fas fa-rupee-sign"></i> {{ balance }}</b></span>
                            </button>
                            <button class="btn btn-primary">Amount to Transfer : 
                                <span class="badge badge-default"><b><i class="fas fa-rupee-sign"></i>{{ amount }}</b></span>
                            </button>
                            <button class="btn btn-success" title="Transfer" @click="transferAmount">
                                <span v-if="!transfer">Transfer</span>
                                <i v-if="transfer" class="fas fa-spinner fa-pulse"></i>
                            </button>
                             <button class="btn btn-secondary" @click="$emit('close')">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
                </div>
                <div class="alert alert-info">
                    <em>
                    If you find the proposal misleading you can report it and get your money back!
                    </em>
                </div>
            </slot>
             <transition name="modal">
                <slot name="body" v-if="transferComplete">
                    <div class="card">
                        <div class="card-header bg-success text-white">
                            Transfer Complete
                        </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <div class="alert alert-success">
                                    You have now full access to the proposal!
                                    Wallet balance : <span class="badge badge-primary"> {{ balance }} </span>
                                </div>
                            </div>
                        </div>
                        <div class="row pt-3">
                            <div class="col">
                                <form action="company/view/idea" method="post" class="d-inline-block">
                                    <input name="_token" :value="csrfToken" hidden>
                                    <input type="hidden" name="iid" :value="referid">
                                    <button class="btn btn-sm btn-primary" type="submit" title="More">
                                       You can view the proposal here!
                                    </button>
                                </form>
                                <button class="btn btn-primary btn-sm" @click="$emit('close')">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </slot>
             </transition>
          </div>


            <!-- low on balance -->
          <div class="modal-body" v-if="refillWallet">
            <slot name="body">
                <div class="card">
                    <div class="card-header bg-danger text-white">
                        Low Balance
                    </div>
                <div class="card-body">
                    <div class="row pt-3">
                        <div class="col">
                             <div class="alert alert-info">
                                Please refill your wallet.
                                <a class="btn btn-primary btn-sm" href="wallet/view" >
                                Wallet
                                </a>
                                <button class="btn btn-secondary btn-sm" @click="$emit('close')">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </slot>
          </div>

        </div>
      </div>
    </div>

    </transition>
  </template>
  
  <script>
export default {
  props: ["uid", "referid", "amount", "balance"],
  data:function(){
      return {
            transfer:false,
            transferComplete:false,
            csrfToken: $('meta[name="csrf-token"]').attr('content'),
            refillWallet:false
        };
  },
  mounted:function(){
      if(this.amount > balance){
          this.refillWallet = true;
      }
  },
  methods:{
      transferAmount:function(){
          this.transfer = true;
          //ajax 
          axios.post('wallet/transfer/t', {'did':this.uid, 'refer_id':this.referid, 'amount':this.amount, 'type':'debit'}).then(function(response){
                this.balance = response.data;
                this.transferComplete = true;
                var status = "paid";
                var index = this.$parent.iindex;
                this.$parent.iList[index]['status'] = status;
                this.$parent.iBoughtList.push(this.$parent.iList[index]);
                this.$parent.iList.splice(index, 1);
          }.bind(this));
      }
  }
};
</script>