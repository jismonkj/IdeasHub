<template>
<transition leave-active-class="animated fadeOut faster">
    <div class="card">
        <div class="p-2">
            <div class="card-header s-bg p-color idea-paragraph">{{ title }} <span class="float-right">{{ company }}</span></div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <h5>Summary</h5>
                        <p class="idea-paragraph">{{ summary }}</p>
                    </div>
                    <div class="col-md-12">
                        <div class="float-right">
                            <form method="post" action="user/idea/auth" class="d-inline" v-if="(status=='interested')">
                                <input name="_token" :value="csrfToken" hidden>
                                <input name="id" :value="id" hidden>
                                <button type="submit" class="btn btn-sm btn-success" v-on:click="viewIdea" :key="'vi' + id">
                                    Authorize
                                </button>
                            </form>
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
                            <button class="btn btn-sm btn-danger" :key="'del' + c_id" v-on:click="$emit('remove')">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
export default {
  props: ["id", "c_id", "company", "title", "summary", "price", "cid", "status"],
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
