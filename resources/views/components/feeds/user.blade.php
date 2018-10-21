<div class="container" id="userHome">
    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="p-3 text-center">
                    <h4>Recently Joined</h4>
                </div>
            </div>
            <!-- company list -->
            <company-list-item  v-for="item in cList" v-bind="item" :key="item.c_id" v-bind:path="preFix">
            </company-list-item>
            <div class="">
            </div>
        </div>
    </div>
</div>