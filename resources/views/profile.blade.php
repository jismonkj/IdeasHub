@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Profile</div>

                <div class="card-body">
                    @if (Auth::user()->u_type== 'company')
                        @component('components.company.profile')
                        @endcomponent
                    @elseif(Auth::user()->u_type== 'user')
                        @component('components.user.profile')
                        @endcomponent
                    @else
                        redirect('/home');
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
