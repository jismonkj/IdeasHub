<?php

namespace Ideashub;

use Illuminate\Database\Eloquent\Model;

class Idea extends Model
{
    protected $fillable = [
        'c_id', 'uid', 'title', 'summary', 'content', 'status'
    ];

    public function user()
    {
        return $this->belongsTo('Ideashub\User', 'id');
    }
    public function photos()
    {
        return $this->hasMany('Ideashub\IdeaPhoto', 'iid');
    }
    public function docs()
    {
        return $this->hasMany('Ideashub\IdeaDocs', 'iid');
    }
}
