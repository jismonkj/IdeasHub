<form method="POST" action="/company/profile/{{Auth::id()}}" aria-label="{{ __('Edit') }}" enctype="multipart/form-data">
    @csrf
    <input name="_method" type="hidden" value="PUT">
    @component('components.forms.input', ['label'=>'forminputs.uni_name', 'type'=>'text', 'id'=>'uni_name', 'required'=>'required', 'autofocus'=>'', 'data'=>$profile['uni_name']])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.cmp_type', 'type'=>'text', 'id'=>'comp_type', 'required'=>'required', 'autofocus'=>'', 'data'=>$profile['comp_type']])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.website', 'type'=>'text', 'id'=>'website', 'required'=>'required', 'autofocus'=>'', 'data'=>$profile['website']])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.industry', 'type'=>'text', 'id'=>'industries', 'required'=>'required', 'autofocus'=>'', 'data'=>$profile['industries']])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.twitter', 'type'=>'text', 'id'=>'twitter', 'required'=>'required', 'autofocus'=>'', 'data'=>$profile['twitter']])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.loc', 'type'=>'text', 'id'=>'location', 'required'=>'required', 'autofocus'=>'', 'data'=>$profile['location']])
    @endcomponent

    <div class="form-group row">
        <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('forminputs.state') }}</label>

        <div class="col-md-6">
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

    @component('components.forms.input', ['label'=>'forminputs.contact', 'type'=>'text', 'id'=>'contact', 'required'=>'required', 'autofocus'=>'', 'data'=>$profile['contact']])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.founded', 'type'=>'text', 'id'=>'founded', 'required'=>'required', 'autofocus'=>'', 'data'=>$profile['founded']])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.avatar', 'type'=>'file', 'id'=>'avatar', 'required'=>'', 'autofocus'=>''])
    @endcomponent

     <div class="form-group row">
        <label for="bio" class="col-md-4 col-form-label text-md-right">{{ __('Bio') }}</label>
        <div class="col-md-6">
            <textarea name="bio" id="bio" rows="3" class="form-control">
                {{ nl2br($profile['bio'])}}
            </textarea>
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
