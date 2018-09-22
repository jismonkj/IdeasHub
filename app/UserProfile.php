<?php

namespace Ideashub;

use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    protected $table = 'profile_user';
    protected $fillable = [
        'uid', 'fullname', 'dob', 'city', 'state_id', 'pincode', 'contact', 'profession', 'avatar', 'gender',
    ];

    public function user()
    {
        // return $this->belongsTo('Ideashub\User', 'id');
    }
}
