<form method="POST" action="/company/profile/{{Auth::id()}}" aria-label="{{ __('Edit') }}">
    @csrf
    <input name="_method" type="hidden" value="PUT">
    @component('components.forms.input', ['label'=>'forminputs.uni_name', 'type'=>'text', 'id'=>'uni_name', 'required'=>'required', 'autofocus'=>''])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.cmp_type', 'type'=>'text', 'id'=>'comp_type', 'required'=>'required', 'autofocus'=>''])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.website', 'type'=>'text', 'id'=>'website', 'required'=>'required', 'autofocus'=>''])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.industry', 'type'=>'text', 'id'=>'industries', 'required'=>'required', 'autofocus'=>''])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.twitter', 'type'=>'text', 'id'=>'twitter', 'required'=>'required', 'autofocus'=>''])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.loc', 'type'=>'text', 'id'=>'location', 'required'=>'required', 'autofocus'=>''])
    @endcomponent

     @component('components.forms.input', ['label'=>'forminputs.state', 'type'=>'text', 'id'=>'state', 'required'=>'required', 'autofocus'=>''])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.contact', 'type'=>'text', 'id'=>'contact', 'required'=>'required', 'autofocus'=>''])
    @endcomponent

    @component('components.forms.input', ['label'=>'forminputs.founded', 'type'=>'text', 'id'=>'founded', 'required'=>'required', 'autofocus'=>''])
    @endcomponent

    <div class="form-group row mb-0">
        <div class="col-md-6 offset-md-4">
            <button type="submit" class="btn btn-primary">
                {{ __('Update') }}
            </button>
        </div>
    </div>
</form>
