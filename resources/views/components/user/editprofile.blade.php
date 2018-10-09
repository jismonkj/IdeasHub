<form id="regForm" method="POST" action="/user/profile/{{Auth::id()}}" aria-label="{{ __('Edit') }}" enctype="multipart/form-data">
    @csrf
    <input name="_method" type="hidden" value="PUT">

    <div class="row">
        <div class="col">
            @component('components.forms.input', ['label'=>'forminputs.fname', 'type'=>'text', 'id'=>'fname', 'required'=>'required', 'autofocus'=>'', 'data'=>$profile['fname']])
            @endcomponent

            @component('components.forms.input', ['label'=>'forminputs.lname', 'type'=>'text', 'id'=>'lname', 'required'=>'', 'autofocus'=>'', 'data'=>$profile['lname']])
            @endcomponent

            @component('components.forms.input', ['label'=>'forminputs.dob', 'type'=>'date', 'id'=>'dob', 'required'=>'required', 'autofocus'=>'', 'data'=>$profile['dob']])
            @endcomponent

            @component('components.forms.input', ['label'=>'forminputs.city', 'type'=>'text', 'id'=>'city', 'required'=>'required', 'autofocus'=>'', 'data'=>$profile['city']])
            @endcomponent

            <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('forminputs.state') }}</label>

                <div class="col-md-8">
                <!-- <div class="input-group mb-3"> -->
                    <select class="custom-select" id="state_id" name="state_id">
                        @foreach ($states as $state)
                            <option value="{{ $state['id'] }}"
                            @if ($profile['state'] == $state['state'])
                                {{ 'selected' }}
                            @endif>{{ $state['state'] }}</option>
                        @endforeach
                    </select>
                    @if ($errors->has('u_type'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('u_type') }}</strong>
                        </span>
                    @endif
                </div>
            </div>
            @component('components.forms.input', ['label'=>'forminputs.zipcode', 'type'=>'text', 'id'=>'pincode', 'required'=>'required', 'autofocus'=>'', 'data'=>$profile['pincode']])
            @endcomponent

        </div>
        <div class="col">

            @component('components.forms.input', ['label'=>'forminputs.contact', 'type'=>'text', 'id'=>'contact', 'required'=>'required', 'autofocus'=>'', 'data'=>$profile['contact']])
            @endcomponent

            @component('components.forms.input', ['label'=>'forminputs.profession', 'type'=>'text', 'id'=>'profession', 'required'=>'required', 'autofocus'=>'', 'data'=>$profile['profession']])
            @endcomponent

            <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('forminputs.gender') }}</label>

                <div class="col-md-8">
                <!-- <div class="input-group mb-3"> -->
                    <select class="custom-select" id="gender" name="gender">
                        @if($profile['gender']== "male")
                            <option value="male" selected>Male</option>
                            <option value="female">Female</option>
                        @else
                            <option value="male">Male</option>
                            <option value="female" selected>Female</option>
                        @endif
                    </select>
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
                        {{ __('Update') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</form>
