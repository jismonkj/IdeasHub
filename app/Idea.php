<?php

namespace Ideashub;

use Illuminate\Database\Eloquent\Model;

class Idea extends Model
{
    protected $fillable = [
        'c_id', 'uid', 'title', 'summary', 'content', 'status'
    ];
}
