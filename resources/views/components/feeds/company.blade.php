<div class="container" id="companyHome">
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="p-3 text-center">
                    <h4>Ideas For Review </h4>
                </div>
            </div>
            <!-- ideas sent -->
            <idea-shared v-for="(item, index) in iReviewList" v-bind="item" :key="item.id" v-bind:path="preFix" v-on:remove="showInterestOnIdea(index, item.id)">
            </idea-shared>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="p-3 text-center">
                    <h4>Interested</h4>
                </div>
            </div>
            <!-- ideas sent -->
            <idea-shared v-for="(item, index) in iList" v-bind="item" v-bind:index="index" :key="item.id" v-bind:path="preFix" v-on:remove="delInteresteOnIdea(index, item.id)" v-bind:showModal="showModal" >
            </idea-shared>
            <div class="card">
                <div class="p-3 text-center">
                    <h4>Paid</h4>
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
