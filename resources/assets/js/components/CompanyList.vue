<template>
    <div class="card">
        <div class="p-2">
            <div class="card-header">{{ uni_name }}</div>
            <div class="card-body" :style="path + avatar"> {{ industries }} | {{ location }} | {{ bio }}
                <button class="btn float-right btn-default" :data-id="c_id" v-on:click="detCompanyView">More</button>
                <div v-if="showOverLay">
                  @{{ content }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
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
      axios
        .get("/view/company/" + this.c_id)
        .then(
          function(response) {
            this.$parent.content = response.data;
            // console.log(response);
            this.$parent.showOverLay = true;
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
