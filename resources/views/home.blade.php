@extends('layouts.app')

@section('content')

@if (session('status'))
    <div class="alert alert-success" role="alert">
        {{ session('status') }}
    </div>
@endif
@if (Auth::user()->u_type== 'company')
    @component('components/feeds/company')
    @endcomponent
@elseif (Auth::user()->u_type== 'user')
    @component('components/feeds/user')
    @endcomponent
@endif
@endsection

@section('sidebar')
        @component('components.sidebar')
        @endcomponent
@endsection