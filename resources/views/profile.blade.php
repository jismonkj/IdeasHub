@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Profile</div>
                <div class="card-body">
                    @if( $flag=="view" )
                        @component('components.user.viewprofile', ['profile' => $profile ])
                        @endcomponent
                    @elseif($flag=="edit")
                        @if (Auth::user()->u_type== 'company')
                            @component('components.company.editprofile', ['profile'=> $profile, 'states' => $states ])
                            @endcomponent
                        @elseif(Auth::user()->u_type== 'user')
                            @component('components.user.editprofile', ['profile'=> $profile, 'states' => $states ])
                            @endcomponent
                        @else
                            redirect('/home');
                        @endif
                    @else
                        @if (Auth::user()->u_type== 'company')
                            @component('components.company.addprofile', ['states'=> $states])
                            @endcomponent
                        @elseif(Auth::user()->u_type== 'user')
                            @component('components.user.addprofile', ['states'=> $states])
                            @endcomponent
                        @else
                            redirect('/home');
                        @endif
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
