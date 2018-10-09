<form id="regForm" method="POST" action="/company/profile/{{Auth::id()}}" aria-label="{{ __('Edit') }}" enctype="multipart/form-data">
    @csrf
    <input name="_method" type="hidden" value="PUT">

    <div class="form-group row">
        <label for="website" class="col-md-2 col-form-label text-md-right">
        {{ __('forminputs.website') }}
        </label>
        <div class="col-md-10">
            <input id="website" type="text" name="website" value="Kudiyanmala" required="required" class="form-control">
        </div>
    </div>

    <div class="form-group row">
        <label for="industries" class="col-md-2 col-form-label text-md-right">{{ __('forminputs.industry') }}</label>
        <div class="col-md-10">
            <input id="industries" type="text" name="industries" value="Fashion" required="required" class="form-control">
        </div>
    </div>

    <div class="form-group row">
        <label for="twitter" class="col-md-2 col-form-label text-md-right">{{ __('forminputs.twitter') }}</label>
        <div class="col-md-10">
            <input id="twitter" type="text" name="twitter" value="www.twitter.com/mycompany" required="required" class="form-control">
        </div>
    </div>

    <div class="row">
        <div class="col">
            @component('components.forms.input', ['label'=>'forminputs.uni_name', 'type'=>'text', 'id'=>'uni_name', 'required'=>'required', 'autofocus'=>'', 'data'=>$profile['uni_name']])
            @endcomponent

            <div class="form-group row">
                <label for="bio" class="col-md-4 col-form-label text-md-right">{{ __('Bio') }}</label>
                <div class="col-md-8">
                    <textarea name="bio" id="bio" rows="3" class="form-control">
                        {{ $profile['bio']}}
                    </textarea>
                </div>
            </div>

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

            @component('components.forms.input', ['label'=>'forminputs.cmp_type', 'type'=>'text', 'id'=>'comp_type', 'required'=>'required', 'autofocus'=>'', 'data'=>$profile['comp_type']])
            @endcomponent


        </div>
        <div class="col">

            @component('components.forms.input', ['label'=>'forminputs.loc', 'type'=>'text', 'id'=>'location', 'required'=>'required', 'autofocus'=>'', 'data'=>$profile['location']])
            @endcomponent

            @component('components.forms.input', ['label'=>'forminputs.contact', 'type'=>'text', 'id'=>'contact', 'required'=>'required', 'autofocus'=>'', 'data'=>$profile['contact']])
            @endcomponent

            @component('components.forms.input', ['label'=>'forminputs.founded', 'type'=>'text', 'id'=>'founded', 'required'=>'required', 'autofocus'=>'', 'data'=>$profile['founded']])
            @endcomponent

            <!-- @component('components.forms.input', ['label'=>'forminputs.cover', 'type'=>'file', 'id'=>'avatar', 'required'=>'', 'autofocus'=>''])
            @endcomponent -->

            <div class="form-group row">
                <label for="avatar" class="col-md-4 col-form-label text-md-right">{{ __('forminputs.cover') }}</label>
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
