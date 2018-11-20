<div class="container" id="companyHome">
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="pt-2 text-center">
                    <h5>Ideas For Review </h5>
                </div>
            </div>
            <!-- ideas sent -->
            <idea-shared v-for="(item, index) in iReviewList" v-bind="item" :key="item.id" v-bind:path="preFix" v-on:remove="showInterestOnIdea(index, item.id)">
            </idea-shared>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="pt-2 text-center">
                    <h5>Interesting!</h5>
                </div>
            </div>
            <!-- ideas sent -->
            <idea-shared v-for="(item, index) in iList" v-bind="item" v-bind:index="index" :key="item.id" v-bind:path="preFix" v-on:remove="delInteresteOnIdea(index, item.id)" v-bind:showModal="showModal" >
            </idea-shared>
            <div class="card">
                <div class="pt-2 text-center">
                    <h5>Collections</h5>
                </div>
            </div>
            <!-- ideas sent -->
            <idea-shared v-for="(item, index) in iBoughtList" v-bind:index="index" v-bind="item" :key="item.id" v-bind:path="preFix" v-on:remove="delInteresteOnIdea(index, item.id)" v-bind:showModal="showModal" >
            </idea-shared>
        </div>
    </div>

  <!-- use the modal component, pass in the prop -->
  <modal-pay v-if="showModal" @close="showModal = false" v-bind:amount="payAmount" v-bind:balance="walletBalance" v-bind:uid="user_id" v-bind:referid="iid"></modal-pay>
</div>
