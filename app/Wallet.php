<?php

namespace Ideashub;

use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
    protected $table = 'wallet';
    protected $fillable = [
        'uid', 'did', 'refer_id', 'amount', 'type'
    ];

    public function user()
    {
        return $this->belongsTo('Ideashub\User', 'id');
    }
}
