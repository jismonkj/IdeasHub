<?php

namespace Ideashub;

use Illuminate\Database\Eloquent\Model;

class IdeaPhoto extends Model
{
    protected $table = 'ideas_photo';
    protected $fillable = [
        'iid', 'photo_path'
    ];


    public function idea()
    {
        return $this->belongsTo('Ideashub\Idea', 'id');
    }
}
