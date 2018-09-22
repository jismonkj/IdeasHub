

<div class="row">
    <div class="col-md-6">
        <img src="{{ asset('storage/'.$profile['avatar']) }} " alt="" class="img-responsive avatar mx-auto d-block">
    </div>
    <div class="col-md-6 text-center">
        <button class="btn btn-primary btn-sm float-right" v-on:click="redirectEditProfile" v-bind:data-uid="id = '{{ Auth::id() }}'" v-bind:data-type="type = '{{ Auth::user()->u_type }}'">
            <i class="fas fa-edit"></i>
        </button>
        <h3 class="mx-auto mt-5">
            {{ $profile['fullname'] }}
        </h3>
        <p class="profile-d-box">{{ $profile['profession'] }}</p>
        <p class="profile-d-box">
        <!-- <i class="fas fa-phone profile-icon"></i> -->
            {{ $profile['contact'] }}
        </p>
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
