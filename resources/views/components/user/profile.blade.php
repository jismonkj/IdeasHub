<form method="POST" action="/user/profile" aria-label="{{ __('Register') }}">
    @csrf

    @component('components.forms.input', ['label'=>'forminputs.full_name', 'type'=>'text', 'id'=>'full_name', 'required'=>'required', 'autofocus'=>''])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.dob', 'type'=>'date', 'id'=>'dob', 'required'=>'required', 'autofocus'=>''])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.city', 'type'=>'text', 'id'=>'city', 'required'=>'required', 'autofocus'=>''])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.state', 'type'=>'text', 'id'=>'state', 'required'=>'required', 'autofocus'=>''])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.zipcode', 'type'=>'text', 'id'=>'zipcode', 'required'=>'required', 'autofocus'=>''])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.contact', 'type'=>'text', 'id'=>'contact', 'required'=>'required', 'autofocus'=>''])
    @endcomponent

     @component('components.forms.input', ['label'=>'forminputs.profession', 'type'=>'text', 'id'=>'profession', 'required'=>'required', 'autofocus'=>''])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.gender', 'type'=>'text', 'id'=>'gender', 'required'=>'gender', 'autofocus'=>''])
    @endcomponent

    <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('forminputs.gender') }}</label>

                            <div class="col-md-6">
                            <!-- <div class="input-group mb-3"> -->
                                <select class="custom-select" id="u_type" name="u_type">
                                    <option value="user" selected>User</option>
                                    <option value="company">Company</option>
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

    <div class="form-group row mb-0">
        <div class="col-md-6 offset-md-4">
            <button type="submit" class="btn btn-primary">
                {{ __('Update') }}
            </button>
        </div>
    </div>
</form>
