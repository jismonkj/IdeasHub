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
                            </div>
                        </div>
                         
                        <div class="row py-2">
                           
                        </div>
                    @endif
                    @isset($userMessage)
                        <div class="row py-2">
                            <div class="col">
                                {{ $userMessage }}
                            </div>
                        </div>
                         
                        <div class="row py-2">
                           
                        </div>
                    @endisset

                    <p>
                        <button class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Wallet History</button>
                        <button class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Add Money</button>
                    </p>
                    <div class="row">
                        <div class="col">
                            <div class="collapse multi-collapse" id="multiCollapseExample1">
                                <div class="card card-body">
                                    <!-- transaction list -->
                                    <table class="table table-responsive-sm">
                                    @isset($payments)
                                        <thead>
                                            <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colspan="4">
                                                <div class="alert alert-info text-left">
                                                    Payments
                                                </div>  
                                                </td>
                                            </tr>
                                            <input hidden value="{{ $count = 1 }}">
                                            @foreach($payments as $payment)  
                                            <tr>
                                            <th scope="row">{{ $count++ }}</th>
                                            <td>{{ $payment['uid'] }}</td>
                                            <td>{{ $payment['amount'] }} </td>
                                            <td>{{ $payment['created_at'] }}</td>
                                            </tr>
                                            @endforeach
                                    @endisset
                                    @isset($reciepts)
                                            <tr>
                                                <td colspan="4">
                                                <div class="alert alert-info text-left">
                                                    Reciepts
                                                </div>  
                                                </td>
                                            </tr> 
                                            <input hidden value="{{ $count = 1 }}">
                                            @foreach($reciepts as $reciept)  
                                            <tr>
                                            <th scope="row">{{ $count++ }}</th>
                                            <td>{{ $reciept['uid'] }}</td>
                                            <td>{{ $reciept['amount'] }} </td>
                                            <td>{{ $reciept['created_at'] }}</td>
                                            </tr>
                                            @endforeach
                                    @endisset
                                    @isset($reciepts_)
                                            <input hidden value="{{ $count = 1 }}">
                                            @foreach($reciepts_ as $reciept)  
                                            <tr>
                                            <th scope="row">{{ $count++ }}</th>
                                            <td>{{ $reciept['uid'] }}</td>
                                            <td>{{ $reciept['amount'] }} </td>
                                            <td>{{ $reciept['created_at'] }}</td>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                    @endisset
                                    </table>
                                </div>
                            </div>
                            <div class="collapse multi-collapse" id="multiCollapseExample2">
                                <div class="card card-body">
                                    <!-- transaction list -->
                                    <form action="{{ route('collect') }}" method="post" id="regForm">
                                        @csrf
                                        <input class="form-control validate" type="number" placeholder="Enter Amount |  Format: 7899.00" name="amount" data-type="wallet-price">
                                        <br/>
                                        <button type="submit" class="btn btn-primary">Collect Amount</button>
                                    </form>
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