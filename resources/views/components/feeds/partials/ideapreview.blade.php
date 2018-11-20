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
        <div class="col-md-9 idea-paragraph">
            {{ $data['idea']['summary'] }}
        </div>
    </div>
    <div class="row py-2">
        <div class="col-md-3">
            <small>Content:</small>
        </div>
        <div class="col-md-9 idea-paragraph">
            {{ $data['idea']['content'] }}
        </div>
    </div>
</div>
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

<div class="row py-4">
    <div class="col">
        <em>NB: You can mark the proposal for review if you find the it misleading!</em>
    </div>
</div>
<div class="row">
    <div class="col text-right">
        <form method="post" action="{{ route('mark-for-review') }}" class="d-inline">
        @csrf
            <input name="id" value="{{ $data['idea']['id'] }}" hidden>
            <button class="btn btn-sm btn-danger" type="submit" title="Misleading">
                <i class="fas fa-angry"></i>
            </button>
        </form>
        <form action="{{route('showUser')}}" method="post" class="d-inline-block">
                                @csrf
                                <input type="hidden" name="uid" value="{{ $data['idea']['uid'] }}">
                                 <button class="btn btn-sm btn-info" type="submit" title="User Profile">
                                    <i class="fas fa-user-check"></i>
                                </button>
                            </form>
        <button class="btn btn-sm btn-primary" onclick="window.location.href='/home'"><i class="fas fa-home" title="Home Feed"></i></button>
    </div>
</div>