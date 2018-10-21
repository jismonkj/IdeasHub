<form id="regForm" method="POST" action="/user/profile" aria-label="{{ __('Register') }}"  enctype="multipart/form-data">
    @csrf
    <div class="row">
        <div class="col">
            @component('components.forms.input', ['label'=>'forminputs.fname', 'type'=>'text', 'id'=>'fname', 'required'=>'required', 'autofocus'=>'autofocus'])
            @endcomponent
            <div class="form-group row">
                <label for="lname" class="col-md-4 col-form-label text-md-right">{{ __('Last Name') }}</label>

                <div class="col">
                    <input id="lname" type="text" class="validate form-control{{ $errors->has('fname') ? ' is-invalid' : '' }}" name="lname" value="{{ old('lname') }}" required data-type="name">

                    @if ($errors->has('lname'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('lname') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

            @component('components.forms.input', ['label'=>'forminputs.dob', 'type'=>'date', 'id'=>'dob', 'required'=>'required', 'autofocus'=>''])
            @endcomponent

            @component('components.forms.input', ['label'=>'forminputs.city', 'type'=>'text', 'id'=>'city', 'required'=>'required', 'autofocus'=>''])
            @endcomponent

            <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('forminputs.state') }}</label>

                <div class="col-md-6">
                <!-- <div class="input-group mb-3"> -->
                    <select class="custom-select" id="state_id" name="state_id">
                        @foreach ($states as $state)
                            <option value="{{ $state['id'] }}">{{ $state['state'] }}</option>
                        @endforeach
                    </select>
                    @if ($errors->has('u_type'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('u_type') }}</strong>
                        </span>
                    @endif
                </div>
            </div>
        </div>
        <div class="col">
            @component('components.forms.input', ['label'=>'forminputs.zipcode', 'type'=>'text', 'id'=>'pincode', 'required'=>'required', 'autofocus'=>''])
            @endcomponent

            @component('components.forms.input', ['label'=>'forminputs.contact', 'type'=>'text', 'id'=>'contact', 'required'=>'required', 'autofocus'=>''])
            @endcomponent

            @component('components.forms.input', ['label'=>'forminputs.profession', 'type'=>'text', 'id'=>'profession', 'required'=>'required', 'autofocus'=>''])
            @endcomponent

            <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('forminputs.gender') }}</label>

                <div class="col-md-6">
                <!-- <div class="input-group mb-3"> -->
                    <select class="custom-select" id="gender" name="gender">
                        <option value="male" selected>Male</option>
                        <option value="female">Female</option>
                    </select>
                    <!-- <div class="input-group-append">
                        <label class="input-group-text" for="inputGroupSelect02">Options</label>
                    </div>
                    </div> -->

                    @if ($errors->has('u_type'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('u_type') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

           <div class="form-group row">
                <label for="avatar" class="col-md-4 col-form-label text-md-right">{{ __('forminputs.avatar') }}</label>
                <div class="col-md-8">
                    <input name="avatar" id="avatar" rows="3" class="form-control" type="file" accept=".jpeg, .png, .gif, .jpg">
                </div>
            </div>

            <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary">
                        {{ __('Create') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</form>
