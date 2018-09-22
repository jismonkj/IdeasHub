@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    @if (Auth::user()->u_type=='admin')
                        <h1>Admin</h1>
                    @elseif (Auth::user()->u_type== 'company')
                        <h1>Company</h1>
                    @else
                        <h1>User</h1>
                    @endif

                    You are logged in!

                     <a href="/user/profile" class="btn">Profile</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
