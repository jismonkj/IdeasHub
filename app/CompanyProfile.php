<?php

namespace Ideashub;

use Illuminate\Database\Eloquent\Model;

class CompanyProfile extends Model
{
    protected $primaryKey = 'c_id';
    protected $table = 'profile_company';
    protected $fillable = [
        'c-id', 'uni_name', 'comp_type', 'website', 'industries', 'twitter', 'location', 'state', 'contact', 'founded', 'state_id', 'avatar', 'bio'
    ];

    public function user()
    {
        return $this->belongsTo('Ideashub\User', 'c_id');
    }
}
