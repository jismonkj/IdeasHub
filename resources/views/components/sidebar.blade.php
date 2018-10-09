<nav id="sidebar" class="active">
            <div class="sidebar-header text-center">
                <i class="fas fa-user display-1"></i>
                <h3>{{Auth::user()->name}}</h3>
                <div class="sidebar-row">
                    <div class="col p-2 sidebar-box">
                        @if(Auth::user()->u_type=="company")
                            <a href="/company/profile" >
                                Profile
                            </a>
                        @elseif(Auth::user()->u_type=="user")
                            <a href="/user/profile" >
                                Profile
                            </a>
                        @else
                            {{'Admin'}}
                        @endif
                    </div>
                    <div class="col p-2 sidebar-box">
                        Profile
                    </div>
                    <div class="col p-2 sidebar-box" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                        <i class="fas fa-sign-out-alt"></i>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </div>
                </div>
            </div>

            <ul class="list-unstyled components">
                <!-- <p>Dummy Heading</p> -->
                <!-- Authentication Links -->
                    <li class="">
                        <a href="#logoutSub" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        Menu <span class="caret"></span>
                        </a>
                        <ul class="collapse list-unstyled" id="logoutSub">
                            <li>
                            <a class="">
                                   Options
                                </a>
                            </li>
                        </ul>
                    </li>

            </ul>

        </nav>
