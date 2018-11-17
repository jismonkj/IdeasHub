<?php

namespace Ideashub\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Ideashub\Idea;
use Ideashub\User;

class CompanyFeedController extends Controller
{
    public function listIdeas()
    {
        $ideas = Idea::where('c_id', Auth::id())->get();
        return $ideas;
    }

    public function showUser(Request $request)
    {
        $id = $request->uid;
        $profile = User::find($id)->userProfile;
        return view('profile')->with(['profile' => $profile, 'flag' => 'view']);
    }
}
