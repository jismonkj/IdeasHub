<div class="form-group row">
    <label for="{{$id}}" class="col-md-4 col-form-label text-md-right">{{ __($label) }}</label>
    <div class="col-md-8">
        <input id="{{$id}}" type="{{$type}}" class="validate form-control{{ $errors->has($id) ? ' is-invalid' : '' }}" name="{{ $id }}" @if(isset($data))value="{{ $data }}" @endif {{ $required }} {{ $autofocus }} @if(isset($title))title="{{$title}}"@endif @if(($id=='dob')) readonly @endif>
        @if ($errors->has($id))
            <span class="invalid-feedback" role="alert">
                <strong>{{ $errors->first($id) }}</strong>
            </span>
        @endif
    </div>
</div>
