<div class="container" id="userHome">
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="p-3 text-center">
                    <h4>More Fishes</h4>
                </div>
            </div>
            <!-- company list -->
            <company-list-item v-for="item in cList" v-bind="item" :key="item.c_id" v-bind:path="preFix">
            </company-list-item>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="p-3 text-center">
                    <h4>Your Ideas</h4>
                </div>
            </div>
            <!-- ideas sent -->
            <idea-shared v-for="item in iList" v-bind="item" :key="item.id" v-bind:path="preFix">
            </idea-shared>
        </div>
    </div>
</div>
