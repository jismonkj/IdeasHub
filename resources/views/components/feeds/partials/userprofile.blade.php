

<div class="row">
    <div class="col-md-6">
        <div class="card border-0">
            <img src="{{ file_exists(asset('storage/'.$profile['avatar']))? asset('storage/'.$profile['avatar']) : asset('storage/images/user.jpg')}} " alt="" class="img-responsive avatar mx-auto d-block">
        </div>
    </div>
    <div class="col-md-6 text-center">
        <div class="card border-0">
            <h3 class="mx-auto mt-5">
                {{ $profile['fname']." ".$profile['lname'] }}
            </h3>
            <p class="profile-d-box">{{ $profile['profession'] }}</p>
            <p class="profile-d-box">
            <!-- <i class="fas fa-phone profile-icon"></i> -->
                {{ $profile['contact'] }}
            </p>
        </div>
    </div>
</div>
<hr>
<div class="row">
    <div class="col-md-auto">
        <p class="profile-d-box">
        <i class="fas fa-birthday-cake profile-icon"></i>
            {{ $profile['dob'] }}
        </p>
    </div>
    <div class="col-md-auto">
        <p class="profile-d-box">
        <i class="fas fa-city profile-icon"></i>
            {{ $profile['city'] }}
        </p>
    </div>
    <div class="col-md-auto">
        <p class="profile-d-box">
        <i class="fas fa-envelope profile-icon"></i>
            {{ $profile['pincode'] }}
        </p>
    </div>
    <div class="col-md-auto">
        <p class="profile-d-box">
        <i class="fas fa-thumbtack profile-icon"></i>
            {{ $profile['state'] }}
        </p>
    </div>
</div>
