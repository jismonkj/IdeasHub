<div class="container" id="companyHome">
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="p-3 text-center">
                    <h4>Your Ideas</h4>
                </div>
            </div>
            <!-- ideas sent -->
            <idea-shared v-for="(item, index) in iList" v-bind="item" :key="item.id" v-bind:path="preFix" v-on:remove="delIdea(index, item.id)">
            </idea-shared>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="p-3 text-center">
                    <h4>Your Ideas</h4>
                </div>
            </div>
            <!-- ideas sent -->
            <idea-shared v-for="(item, index) in iList" v-bind="item" :key="item.id" v-bind:path="preFix" v-on:remove="delIdea(index, item.id)">
            </idea-shared>
        </div>
    </div>
</div>
