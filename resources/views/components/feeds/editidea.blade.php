@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="card-header">Profile</div>
                <div class="card-body">
                    <form id="regForm" method="POST" action="{{ route('edit-idea') }}" aria-label="{{ __('Got an Idea?') }}">
                        @csrf
                        <input hidden value="{{ $idea->c_id }}" name="c_id">
                        <input hidden value="{{ $idea->id }}" name="id">
                        <div class="row justify-content text-center">
                            <div class="offset-md-1 col-md-10">
                                <div class="form-group">
                                    <!-- <label for="lname" class="text-md-right">{{ __('Last Name') }}</label> -->
                                    <input id="title" type="text" class="validate form-control{{ $errors->has('title') ? ' is-invalid' : '' }}" name="title" value="{{ $idea['title']
                                     }}" required data-type="name" placeholder="Title">
                                    @if ($errors->has('title'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('title') }}</strong>
                                        </span>
                                    @endif
                                </div>  
                                <div class="form-group">
                                    <!-- <label for="lname" class="text-md-right">{{ __('Last Name') }}</label> -->
                                    <textarea id="summary" type="text" class="validate form-control{{ $errors->has('summary') ? ' is-invalid' : '' }}" name="summary" value="{{ $idea['summary'] }}" required data-type="name" placeholder="Brief Your Idea Here!
Make an Impression. This is the only part initially visible to companies." rows="4">{{ $idea['summary'] }}
                                    </textarea>
                                    @if ($errors->has('summary'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('summary') }}</strong>
                                        </span>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <!-- <label for="lname" class="text-md-right">{{ __('Last Name') }}</label> -->
                                    <textarea id="content" type="text" class="validate form-control{{ $errors->has('content') ? ' is-invalid' : '' }}" name="content" value="{{ $idea['content'] }}" required data-type="name" placeholder="Now... detail your idea." rows="6">{{ $idea['summary'] }}
                                    </textarea>
                                    @if ($errors->has('content'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('content') }}</strong>
                                        </span>
                                    @endif
                                </div>
                                <div class="form-group mb-0">
                                    <div class="float-right">
                                        <button type="submit" class="btn btn-primary px-4">
                                            {{ __('Update') }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
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
