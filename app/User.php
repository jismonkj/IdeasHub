<?php

namespace Ideashub;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email', 'password', 'u_type',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function companyProfile()
    {
        return $this->hasOne('Ideashub\CompanyProfile', 'c_id');
    }

    public function userProfile()
    {
        return $this->hasOne('Ideashub\UserProfile', 'uid');
    }

    public function ideas()
    {
        return $this->hasMany('Ideashub\Idea', 'uid');
    }

    public function wallet()
    {
        return $this->hasOne('Ideashub\Wallet', 'uid');
    }
}
