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
                            <form action="company/view/user" method="post" class="d-inline-block">
                                <input name="_token" :value="csrfToken" hidden>
                                <input type="hidden" name="uid" :value="uid">
                                 <button class="btn btn-sm btn-primary" type="submit">
                                    <i class="fas fa-user-check"></i>
                                </button>
                            </form>
                            <button class="btn btn-sm btn-success">
                                <i class="fas fa-thumbs-up"></i>
                            </button>
                            <button class="btn btn-sm btn-danger">
                                <i class="fas fa-thumbs-down"></i>
                            </button>
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
  props: ["id", "c_id", "company", "title", "summary", "uid"],
  data:function(){
      return {
          csrfToken: $('meta[name="csrf-token"]').attr('content')
      }
  },
  methods: {
    showInterest: function() {
      //change idea status on db
      
    },
    userCheck:function(){
        alert(this.uid);
    }
  }
};
</script>
