<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Ideashub') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/idea.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-laravel">
            <a class="navbar-brand" href="{{ url('/home') }}">
                {{ config('app.name', 'Ideashub') }}
            </a>

            @guest
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="{{ route('login') }}" class="nav-link">Login</a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ route('register') }}" class="nav-link">Register</a>
                    </li>
                </ul>
            </div>
            @endguest
            @auth
                <button type="button" id="sidebarCollapse" class="btn btn-info" aria-label="{{ __('Toggle navigation') }}">
                    <i class="fas fa-align-left"></i>
                    <span>Menu</span>
                </button>
            @endauth
        </nav>
        <div class="wrapper">
            <main id="content" class="container py-4">
                @yield('content')
            </main>
            @yield('sidebar')
        </div>
    </div>

    <!-- alert-box -->
    <div class="alert-box" style="display:none">
        <p class="alert-data">
        </p>
    </div>
    <!-- alert-box-end -->
    
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/idea.js') }}" defer></script>
    <script src="{{ asset('js/validate.js') }}" defer></script>
   @auth
        @if (Auth::user()->u_type== 'company')
        <script src="{{ asset('js/icompany.js') }}" defer></script>
        @elseif (Auth::user()->u_type== 'user')
        <script src="{{ asset('js/iuser.js') }}" defer></script>
        @endif
   @endauth
</body>
</html>