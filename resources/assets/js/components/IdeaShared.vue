<template>
    <div class="card">
        <div class="p-2">
            <div class="card-header s-bg p-color">{{ title }} <span class="float-right">{{ company }}</span></div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <h5>Summary</h5>
                        <p>{{ summary }}</p>
                    </div>
                    <div class="col-md-12">
                        <div class="float-right">
                            <button type="button" class="btn btn-sm btn-primary" v-on:click="viewIdea" :key="'vi' + id">
                                View
                            </button>
                            <button type="button" class="btn btn-sm btn-primary" :key="'ed' + c_id">
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  props: ["id", "c_id", "company", "title", "summary", "cid"],
  methods: {
    viewIdea: function() {
      alert();
    }
  }
};
</script>
