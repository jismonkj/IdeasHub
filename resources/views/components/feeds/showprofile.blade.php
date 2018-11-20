@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="card-header bg-success text-white">{{ $profile['fname']." ".$profile['lname']}} {{ $profile['uni_name'] }}</div>
                <div class="card-body">
                    @if (Auth::user()->u_type== 'company')
                        @component('components.feeds.partials.userprofile', ['profile' => $profile ])
                        @endcomponent
                    @elseif(Auth::user()->u_type== 'user')
                        @component('components.feeds.partials.companyprofile', ['profile' => $profile ])
                        @endcomponent
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('sidebar')
        @component('components.sidebar')
        @endcomponent
@endsection
