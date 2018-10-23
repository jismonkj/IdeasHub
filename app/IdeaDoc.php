<?php

namespace Ideashub;

use Illuminate\Database\Eloquent\Model;

class IdeaDoc extends Model
{
    protected $table = 'ideas_docs';
    protected $fillable = [
        'iid', 'doc_path'
    ];

    public function idea()
    {
        return $this->belongsTo('Ideashub\Idea', 'id');
    }
}
