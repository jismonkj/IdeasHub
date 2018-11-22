<div class="container" id="userHome">
    <div class="row">
        <div class="col-md-8">
            <div class="card section-header">
                <div class="pt-2 text-center">
                    <h5>More Companies</h5>
                </div>
            </div>
            <!-- company list -->
            <company-list-item v-for="item in cList" v-bind="item" :key="item.c_id" v-bind:path="preFix">
            </company-list-item>
        </div>
        <div class="col-md-4">
            <div class="card section-header">
                <div class="pt-2 text-center">
                    <h5>Your Ideas</h5>
                </div>
            </div>
            <!-- ideas sent -->
            <idea-shared v-for="(item, index) in iList" v-bind="item" :key="item.id" v-bind:path="preFix" v-on:remove="delIdea(index, item.id)">
            </idea-shared>
        </div>
    </div>
</div>
