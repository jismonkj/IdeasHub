<form method="POST" action="/user/profile" aria-label="{{ __('Register') }}"  enctype="multipart/form-data">
    @csrf

    @component('components.forms.input', ['label'=>'forminputs.full_name', 'type'=>'text', 'id'=>'fullname', 'required'=>'required', 'autofocus'=>''])
    @endcomponent

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

    <!-- @component('components.forms.input', ['label'=>'forminputs.avatar', 'type'=>'file', 'id'=>'avatar', 'required'=>'', 'autofocus'=>''])
    @endcomponent -->

    <input type="file" class="form-control" name="avatar">

    <div class="form-group row mb-0">
        <div class="col-md-6 offset-md-4">
            <button type="submit" class="btn btn-primary">
                {{ __('Create') }}
            </button>
        </div>
    </div>
</form>
