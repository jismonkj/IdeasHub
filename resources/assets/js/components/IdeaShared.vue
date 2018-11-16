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
                            <form method="post" action="/idea/view" class="d-inline">
                                <input name="_token" :value="csrfToken" hidden>
                                <input name="id" :value="id" hidden>
                                <button type="submit" class="btn btn-sm btn-primary" v-on:click="viewIdea" :key="'vi' + id">
                                    View
                                </button>
                            </form>
                            <form method="post" action="/idea/edit" class="d-inline">
                                <input name="_token" :value="csrfToken" hidden>
                                <input name="id" :value="id" hidden>
                                <button type="submit" class="btn btn-sm btn-primary" :key="'ed' + c_id">
                                    Edit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["id", "c_id", "company", "title", "summary", "cid"],
  data:function(){
      return {
          csrfToken: $('meta[name="csrf-token"]').attr('content')
      }
  },
  methods: {
    viewIdea: function() {
      window.location.href = "idea/view/"+this.id;
    }
  }
};
</script>
