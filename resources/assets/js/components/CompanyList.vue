<template>
    <div class="card">
        <div class="p-2">
            <div class="card-header s-bg p-color">{{ uni_name }}</div>
            <div class="card-body" :style="path + avatar"> 
                <div class="row">
                  <div class="col-md-12">
                    <div class="my-auto">
                        {{ industries }} | {{ location }} | {{ bio }}
                        <div class="float-right">
                            <button type="button" class="btn btn-sm btn-primary" v-on:click="sellIdea" :key="'sellId' + c_id">Got Some Ideas?</button>
                            <button type="button" class="btn btn-sm btn-primary" :key="'sellId' + c_id">Follow</button>
                            <button class="btn btn-sm btn-primary" v-if="!showoverlay" :data-id="c_id" :key="'moreBtn' + c_id" v-on:click="detCompanyView">More</button>
                            <button type="button" class="btn btn-sm btn-primary" v-else :key="'closeBtm' + c_id"  v-on:click="hideOverLay">Close</button>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <transition
                      enter-active-class="animated fadeIn"
                      leave-active-class="animated fadeOut faster">
                      <div v-if="showoverlay" v-html="content"> 
                          {{ content }}
                      </div>
                    </transition>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      content: null,
      showoverlay: false
    };
  },
  props: [
    "c_id",
    "uni_name",
    "industries",
    "location",
    "bio",
    "avatar",
    "path"
  ],
  methods: {
    detCompanyView: function() {
      if (this.content == null) {
        axios
          .get("/view/company/" + this.c_id)
          .then(
            function(response) {
              this.content = response.data;
              // console.log(response);
            }.bind(this)
          )
          .catch(function(error) {
            console.log(error);
          });
      }
      this.showoverlay = true;
    },
    hideOverLay: function() {
      this.showoverlay = false;
    },
    sellIdea: function() {
      window.location.href = "/idea/sell/" + this.c_id;
    }
  }
};
</script>