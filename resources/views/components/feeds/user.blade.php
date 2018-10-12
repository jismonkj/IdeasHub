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

            <!-- <div v-if="showOverLay" class="overlay">
                <div class="container">
                    <div class="row pt-5 mt-5">
                        <div class="offset-md-1 col-md-10 card">
                            <div class="card-header">
                            <button type="button" class="close" v-on:click="hideOverLay"><span aria-hidden="true">×</span></button>
                            </div>
                            <div class="card-body" v-html="content">
                                @{{ content }}
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</div>