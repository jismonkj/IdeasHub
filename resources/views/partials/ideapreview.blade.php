<div class="card-body">
    <div class="row py-2">
        <div class="col-md-3">
            <small>Title:</small>
        </div>
        <div class="col-md-9">
            {{ $data['idea']['title'] }}
        </div>
    </div>
    <div class="row py-2">
        <div class="col-md-3">
            <small>Summary:</small>
        </div>
        <div class="col-md-9">
            {{ $data['idea']['summary'] }}
        </div>
    </div>
    <div class="row py-2">
        <div class="col-md-3">
            <small>Content:</small>
        </div>
        <div class="col-md-9">
            {{ $data['idea']['content'] }}
        </div>
    </div>
</div>
<div class="card border-0">
    <div class="card-header">
        Photos Added
    </div>
    <div class="card-body">
        <div class="row">
            @foreach($data['photos'] as $photo)
            <div class="col-md-6">
                <a href="{{asset('storage/public/'.$photo['photo_path'])}}" target="_blank">
                    <img src="{{asset('storage/public/'.$photo['photo_path'])}}" alt="" class="img-responsive idea-photo d-block">
                </a>
            </div>
            @endforeach
        </div>
    </div>
</div>
<div class="card border-0">
    <div class="card-header">
        Docs Added
    </div>
    <div class="card-body">
        <div class="row">
            @foreach($data['docs'] as $doc)
            <div class="col-md-6">
                <a href="{{asset('storage/public/'.$doc['doc_path'])}}" target="_blank">
                    <img src="{{asset('storage/public/'.$doc['doc_path'])}}" alt="" class="img-responsive idea-photo d-block">
                </a>
            </div>
            @endforeach
        </div>
    </div>
</div>
<div class="row">
    <div class="col text-right">
        <form method="post" action="/idea/edit" class="d-inline">
        @csrf
            <input name="id" value="{{ $data['idea']['id'] }}" hidden>
            <button class="btn btn-primary" type="submit"><i class="fas fa-edit"></i></button>
        </form>
        <button class="btn btn-primary" onclick="window.location.href='/home'"><i class="fas fa-home"></i></button>
    </div>
</div>