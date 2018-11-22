

<div class="row">
    <div class="col-md-8">
        <div class="card border-0 text-center">
            <img src="{{ asset('storage/'.$profile['avatar']) }} " alt="" class="img-responsive avatar mx-auto d-block">
        </div>
    </div>
    <div class="col-md-4 text-center">
        <div class="card border-0">
            <h3 class="mx-auto mt-5">
                {{ $profile['fname']." ".$profile['lname'] }}
            </h3>
            <p class="profile-d-box">{{ $profile['profession'] }}</p>
            <p class="profile-d-box">
            <!-- <i class="fas fa-phone profile-icon"></i> -->
                {{ $profile['contact'] }}
            </p>
            <p id="profileEdit" class="float-right profile-d-box" v-on:click="redirectEditProfile" v-bind:data-uid="id = '{{ Auth::id() }}'" v-bind:data-type="type = '{{ Auth::user()->u_type }}'">
                <i class="fas fa-edit"></i>
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
