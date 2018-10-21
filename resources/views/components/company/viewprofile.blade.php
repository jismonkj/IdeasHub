<div class="row">
    <div class="col-md-6">
        <div class="card border-0">
            <img src="{{ asset('storage/'.$profile['avatar']) }} " alt="" class="img-responsive avatar mx-auto d-block">
        </div>
    </div>
    <div class="col-md-6 text-center">
        <div class="card border-0">
            <h3 class="mx-auto mt-5">
                {{ $profile['uni_name'] }}
            </h3>
            <p class="profile-d-box">{{ Auth::user()->email }}</p>
            <p class="profile-d-box">{{ $profile['website'] }}</p>
            <p class="profile-d-box">
                <!-- <i class="fas fa-phone profile-icon"></i> -->
                {{ $profile['contact'] }}
            </p>
            <p id="profileEdit" class="float-right profile-d-box" v-on:click="redirectEditProfile" v-bind:data-uid="id = '{{ Auth::id() }}'"
                v-bind:data-type="type = '{{ Auth::user()->u_type }}'">
                <i class="fas fa-edit show-pointer"></i>
            </p>
        </div>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-md-auto">
        <p class="profile-d-box">
            <i class="fas fa-user-tie profile-icon"></i>
            {{ $profile['comp_type'] }}
        </p>
    </div>
    <div class="col-md-auto">
        <p class="profile-d-box">
            <i class="fas fa-birthday-cake profile-icon"></i>
            {{ $profile['founded'] }}
        </p>
    </div>
    <div class="col-md-auto">
        <p class="profile-d-box">
            <i class="fas fa-city profile-icon"></i>
            {{ $profile['location'] }}
        </p>
    </div>
    <div class="col-md-auto">
        <p class="profile-d-box">
            <i class="fas fa-thumbtack profile-icon"></i>
            {{ $profile['state'] }}
        </p>
    </div>
    <div class="col-md-auto">
        <p class="profile-d-box">
            <i class="fab fa-twitter profile-icon"></i>
            {{ $profile['twitter'] }}
        </p>
    </div>
    <div class="col-md-auto">
        <p class="profile-d-box">
            <i class="fas fa-industry profile-icon"></i>
            {{ $profile['industries'] }}
        </p>
    </div>

</div>
<div class="row">
    <div class="col-md-auto">
        <p class="profile-d-box">
            <i class="fas fa-info profile-icon"></i>
            {{ $profile['bio'] }}
        </p>
    </div>
</div>
