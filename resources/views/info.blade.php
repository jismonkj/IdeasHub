@extends('layouts.app')


@section('content')

    <div class="row justify-content-center" id="info">
        <div class="col-md-10">
            <div class="card">
                <div class="card-header bg-success text-white">
                    @isset($title)
                    {{ $title }}
                    @endisset
                </div>
                <div class="card-body">  
                    <div class="alert {{ $htmlclass }}">
                    {!! $info !!}
                    </div>
                    @isset($more)
                        @isset($data)
                        @component($more, ['data'=> $data])
                        @endcomponent
                        @else
                        @component($more)
                        @endcomponent
                        @endisset
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

@section('sidebar')
        @component('components.sidebar')
        @endcomponent
@endsection