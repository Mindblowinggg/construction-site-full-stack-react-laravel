<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    // Ye line likhna sabse zaroori hai!
    protected $fillable = [
        'title',
        'short_desc',
        'content',
        'image'
    ];
}
