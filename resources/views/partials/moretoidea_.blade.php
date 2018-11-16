<!-- ------------------------------- -->
<div class="container" id="vDropZone">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <div class="accordion" id="accordionExample">
    @isset($data['photos'])  
        <div class="card">
            <div class="card-header" id="headingOne">
            <h5 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Photos
                </button>
            </h5>
            </div>
            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body row">
            
                @foreach($data['photos'] as $photo)
                <div class="col-md-6">
                    <form action="{{ route('delIdeaPhoto') }}" method="post">
                        @csrf
                        <input hidden name="delId" value="{{ $photo['id'] }}">
                        <button type="submit" class="close">
                            <span>&times;</span>
                        </button>
                    </form>
                    <a href="{{asset('storage/'.$photo['photo_path'])}}" target="_blank">
                        <img src="{{asset('storage/'.$photo['photo_path'])}}" alt="" class="img-responsive idea-photo">
                    </a>
                </div>
                @endforeach
            </div>
        </div>
    </div>
    @endisset
    @isset($data['docs'])  
        <div class="card">
            <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Docs
                </button>
            </h5>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body row">
                @foreach($data['docs'] as $doc)
                <div class="col-md-6">
                    <form action="{{ route('delIdeaDoc') }}" method="post">
                        @csrf
                        <input hidden name="delId" value="{{ $doc['id'] }}">
                        <button type="submit" class="close">
                            <span>&times;</span>
                        </button>
                    </form>
                    <a href="{{asset('storage/public/'.$doc['doc_path'])}}" target="_blank">
                        <img src="{{asset('storage/public/'.$doc['doc_path'])}}" alt="" class="img-responsive idea-photo d-block">
                    </a>
                </div>
                @endforeach
            </div>
            </div>
        </div>
    @endisset
    </div>
    <div class="row pt-4">
        <div class="col">
            <p class="h5">Express Better! Upload 
                <span class="text-primary" title="You can upload .jpg, .gif or .png">
                    Photos
                </span> or
                <span class="text-success" title="PDFs are allowed.">
                    Docs
                </span>
            </p>
        </div>
    </div>
    <div class="row py-1">
        <div class="col">
            <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" v-on:vdropzone-success="vdropzoneSuccess"></vue-dropzone>
        </div>
    </div>
    <div class="row float-right">
        <div class="col">
            <button class="btn btn-primary" v-on:click="uploadDropzone">Send</button>
            <button class="btn btn-primary" v-on:click="removeAll">Remove All</button>
            <button class="btn btn-primary" v-on:click="redirectHome"><i class="fas fa-home"></i></button>
            <button class="btn btn-primary" v-on:click="ideaPreview">Preview</button>
        </div>
    </div>
</div>
