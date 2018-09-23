@extends('layouts.app')


@section('content')
    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="card-header s-bg p-color">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <h3>Dashboard</h3>
                </div>
            </div>
        </div>
        <div class="col-md-10 mt-2">
            <div class="accordion" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="" aria-controls="collapseOne">
                                Customers Registered
                            </button>
                            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="" aria-controls="collapseOne">
                                Companies Registered
                            </button>
                        </h5>
                    </div>
                    <div id="collapseOne" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                            <!-- {{ $users }} -->
                            @foreach($users as $user)
                                <div class="row ulist-row">
                                    <div class="col">
                                        {{ $user['fullname'] }}
                                    </div>
                                    <div class="col">
                                        {{ $user['city'] }}
                                    </div>
                                    <div class="col">
                                        {{ $user['contact'] }}
                                    </div>
                                    <div class="col">
                                        {{ $user['profession'] }}
                                    </div>
                                    <div class="col">
                                        {{ $user['gender'] }}
                                    </div>
                                    <div class="col">
                                        <a href="admin/profile/del/{{ $user['uid'] }}" class=""><i class="fas fa-trash-alt"></i></a>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                        @foreach($companies as $company)
                                <div class="row ulist-row">
                                    <div class="col">
                                        {{ $company['uni_name'] }}
                                    </div>
                                    <div class="col">
                                        {{ $company['location'] }}
                                    </div>
                                    <div class="col">
                                        {{ $company['contact'] }}
                                    </div>
                                    <div class="col">
                                        {{ $company['industries'] }}
                                    </div>
                                    <div class="col">
                                        {{ $company['founded'] }}
                                    </div>
                                    <div class="col">
                                        <a href="admin/profile/del/{{ $company['uid'] }}" class=""><i class="fas fa-trash-alt"></i></a>
                                    </div>
                                    <div class="col">
                                        <a href="admin/profile/stat/{{ $company['uid'] }}" class=""><i class="fas fa-eye"></i></a>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('sidebar')
      <!-- side navbar -->
    @auth
        @component('components.sidebar')
        @endcomponent
    @endauth
    <!-- sid navbar end -->
@endsection
