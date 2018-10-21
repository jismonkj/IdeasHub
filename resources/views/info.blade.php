@extends('layouts.app')


@section('content')

    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="card-header">
                    
                </div>
                <div class="card-body">  
                    <div class="alert {{ $htmlclass }}">
                    {!! $info !!}
                    </div>
                    @isset($more)
                        @component($more)
                        @endcomponent
                    @endisset

                    @isset($ret_url)
                    <div class="float-right">
                        <a class="btn btn-primary" href="{{ $ret_url }}">
                            <span class="fa fa-home"></span>
                        </a>
                        @isset($next_url)
                            <a class="btn btn-primary" href="{{ $next_url }}">
                                <span class="fa fa-arrow-alt-circle-left"></span>
                            </a>
                        @endisset
                    </div>
                    @endisset
                    
                </div>
            </div>

        </div>
    </div>

@endsection