<div class="row mt-1 company-profile-cover user-feed" style="background-image:url('{{ asset('storage/'.$profile['avatar']) }}')">
    <div class="col-md-8">
    </div>
    <div class="col-md-4 text-center">
        <div class="card border-0">
            <h5 class="mx-auto mt-2 mb-2">
                {{ $profile['uni_name'] }}
            </h5>
            <p class="user-feed profile-d-box">{{ Auth::user()->email }}</p>
            <p class="user-feed profile-d-box">{{ $profile['website'] }}</p>
            <p class="user-feed profile-d-box">
                <!-- <i class="fas fa-phone user-feed profile-icon"></i> -->
                {{ $profile['contact'] }}
            </p>
        </div>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-xs-auto">
        <p class="user-feed profile-d-box">
            <i class="fas fa-user-tie user-feed profile-icon"></i>
            {{ $profile['comp_type'] }}
        </p>
    </div>
    <div class="col-xs-auto">
        <p class="user-feed profile-d-box">
            <i class="fas fa-birthday-cake user-feed profile-icon"></i>
            {{ $profile['founded'] }}
        </p>
    </div>
    <div class="col-xs-auto">
        <p class="user-feed profile-d-box">
            <i class="fas fa-city user-feed profile-icon"></i>
            {{ $profile['location'] }}
        </p>
    </div>
    <div class="col-xs-auto">
        <p class="user-feed profile-d-box">
            <i class="fas fa-thumbtack user-feed profile-icon"></i>
            {{ $profile['state'] }}
        </p>
    </div>
    <div class="col-xs-auto">
        <p class="user-feed profile-d-box">
            <i class="fab fa-twitter user-feed profile-icon"></i>
            {{ $profile['twitter'] }}
        </p>
    </div>
    <div class="col-xs-auto">
        <p class="user-feed profile-d-box">
            <i class="fas fa-industry user-feed profile-icon"></i>
            {{ $profile['industries'] }}
        </p>
    </div>
    <div class="col-xs-auto">
        <p class="user-feed profile-d-box">
            <i class="fas fa-info user-feed profile-icon"></i>
            {{ $profile['bio'] }}
        </p>
    </div>
</div>
