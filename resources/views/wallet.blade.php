@extends('layouts.app')


@section('content')

    <div class="row justify-content-center" id="info">
        <div class="col-md-10">
            <div class="card">
                <div class="card-header bg-success text-white">
                    Your Wallet
                </div>
                <div class="card-body">  
                    <div class="alert {{ $alertClass }}">
                    Balance Amount : <i class="fas fa-rupee-sign"></i> {{ $balance }}
                    </div>                
                    @if(!$minBalance)
                        <div class="row py-2">
                            <div class="col">
                            Your wallet balance is low you may need to refill it
                                <a href="#">
                                    Here.
                                </a>
                            </div>
                        </div>
                         
                        <div class="row py-2">
                           
                        </div>
                    @endif

                    <p>
                        <button class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Wallet History</button>
                    </p>
                    <div class="row">
                        <div class="col">
                            <div class="collapse multi-collapse" id="multiCollapseExample1">
                                <div class="card card-body">
                                    <!-- transaction list -->
                                    @isset($transactions)
                                    <table class="table table-hover table-responsive-sm">
                                        <thead>
                                            <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <input hidden value="{{ $count = 1 }}">
                                            @foreach($transactions as $transaction)  
                                            <tr>
                                            <th scope="row">{{ $count++ }}</th>
                                            <td>{{ $transaction['uid'] }}</td>
                                            <td>{{ $transaction['amount'] }} </td>
                                            <td>{{ $transaction['type'] }}</td>
                                            <td>{{ $transaction['created_at'] }}</td>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                        </table>
                                    @endisset
                                </div>
                            </div>
                        </div>
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