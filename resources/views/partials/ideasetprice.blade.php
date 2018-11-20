    <div class="row">
        <div class="col py-2">
           <h3><span class="badge badge badge-primary"> {{ $data['idea']['title'] }}</span></h3>
        </div>
    </div>
    <div class="row py-2 idea-paragraph">
        <div class="col-md-10">
            {{ $data['idea']['summary'] }}
        </div>
    </div>
    <form method="post" action="user/idea/set/price" class="py-4">
    @csrf
    <div class="row">
        <div class="col-md-4">
            <input type="number" name="price" class="form-control validate" placeholder="Set Price" required>
        </div>
        <input name="iid" value="{{ $data['idea']['id']}}" hidden>
        <div class="col-md-4">
            <button class="btn btn-primary" type="submit">
                <i class="fas fa-save"></i>
            </button>
            <button class="btn btn-primary" v-on:click="redirectHome"><i class="fas fa-home"></i></button>
        </div>
        <div class="col text-right">       
            
        </div>
    </div>
    </form>      

<div class="row">
    
</div>