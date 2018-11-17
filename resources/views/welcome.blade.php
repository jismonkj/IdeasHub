<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Ideashub') }}</title>

    <!-- Scripts -->
    <!-- <script src="{{ asset('js/app.js') }}" defer></script> -->
    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/idea.css') }}" rel="stylesheet">
    <style>
        /* home page
        -----------------*/
        body.home {
            background-color: var(--main-bg);
            color: var(--primary-color);
        }
        /* ---- reset ---- */ body{ margin:0; font:normal 75% Arial, Helvetica, sans-serif; } canvas{ display: block; vertical-align: bottom; } /* ---- particles.js container ---- */ #particles-js{ position:absolute; width: 100%; height: 100%; background-color: #0b0b58; background-image: url(""); background-repeat: no-repeat; background-size: cover; background-position: 50% 50%; }
        .content{
            z-index: 777;
        }
    </style>
    </head>
    <body class="home">
        <div class="flex-center position-ref full-height" id="welcome">
        <!-- particles.js container --> <div id="particles-js"></div>
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>
                        <a href="{{ route('register') }}">Register</a>
                    @endauth
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    Ideashub
                </div>

                <div class="links">
                    Where Customers Make Their Products
                </div>                                                                                                            
            </div>
        </div>
        <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script> 
          <script src="{{ asset('js/welcome.js') }}" defer></script>
    </body>
</html>
