@extends('layouts.app')

@section('content')

@if (session('status'))
    <div class="alert alert-success" role="alert">
        {{ session('status') }}
    </div>
@endif
@if (Auth::user()->u_type== 'company')
    <h1>Company</h1>
    <a href="/company/profile" class="btn">Profile</a>
@elseif (Auth::user()->u_type== 'user')
    @component('components/feeds/user')
    @endcomponent
@endif
@endsection

@section('sidebar')
        @component('components.sidebar')
        @endcomponent
@endsection