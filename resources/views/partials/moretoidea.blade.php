<div class="container" id="vDropZone">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <div class="row py-4">
        <div class="col h3">
            Think you have more to add?
        </div>
    </div>
    <div class="row">
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
