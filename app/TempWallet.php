<?php

namespace Ideashub;

use Illuminate\Database\Eloquent\Model;

class TempWallet extends Model
{
    protected $table = 'temp_wallet';
    protected $fillable = [
        'id', 'uid', 'did', 'refer_id', 'amount', 'type'
    ];

    public function user()
    {
        return $this->belongsTo('Ideashub\User', 'id');
    }
}
