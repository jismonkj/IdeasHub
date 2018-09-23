@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="card-header">Profile</div>
                <div class="card-body">
                    @if( $flag=="view" )
                        @if (Auth::user()->u_type== 'company')
                            @component('components.company.viewprofile', ['profile' => $profile ])
                            @endcomponent
                        @elseif(Auth::user()->u_type== 'user')
                            @component('components.user.viewprofile', ['profile' => $profile ])
                            @endcomponent
                        @endif
                    @elseif($flag=="edit")
                        @if (Auth::user()->u_type== 'company')
                            @component('components.company.editprofile', ['profile'=> $profile, 'states' => $states ])
                            @endcomponent
                        @elseif(Auth::user()->u_type== 'user')
                            @component('components.user.editprofile', ['profile'=> $profile, 'states' => $states ])
                            @endcomponent
                        @else
                            //
                        @endif
                    @else
                        @if (Auth::user()->u_type== 'company')
                            @component('components.company.addprofile', ['states'=> $states])
                            @endcomponent
                        @elseif(Auth::user()->u_type== 'user')
                            @component('components.user.addprofile', ['states'=> $states])
                            @endcomponent
                        @else
                            //
                        @endif
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
