<div class="container" id="vDropZone">
    <div class="row py-4">
        <div class="col h3">
            Think you have more to add?
        </div>
    </div>
    <div class="row">
        <div class="col">
            <span class="h5">Express Better!  </span>
            <button class="btn btn-sm btn-primary">
                Photos
            </button>
            <button class="btn btn-sm btn-primary">
                Docs
            </button>
        </div>
    </div>
    <div class="row py-1">
        <div class="col">
            <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
        </div>
    </div>
</div>