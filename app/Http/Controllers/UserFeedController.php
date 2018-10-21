<?php

namespace Ideashub\Http\Controllers;

use Illuminate\Http\Request;
use Ideashub\CompanyProfile;
use Ideashub\State;
use Ideashub\Idea;
use Illuminate\Support\Facades\Auth;

class UserFeedController extends Controller
{
    public function listCompanies()
    {
        $companies = CompanyProfile::all();
        return $companies;
    }

    public function viewCProfile($id)
    {
        $profile = CompanyProfile::find($id);
        $states = State::all();
        if ($profile == "") {
            return view('profile')->with(['flag' => 'new', 'states' => $states]);
        }
        $state = State::find($profile['state_id']);
        $profile['state'] = $state['state'];
        return view('components.feeds.partials.companyprofile')->with(['profile' => $profile, 'flag' => 'view']);
    }

    public function sellIdea(Request $request)
    {
        $idea = new Idea($request->all());
        $idea->uid = Auth::user()->id;
        $idea->save();

        return view('info', ['info' => '<b>Well done!</b> You have sent the idea to the company', 'htmlclass' => 'alert-success', 'more' => 'partials.moretoidea']);
    }

    public function uploadIdeaFiles(Request $request)
    {
        return $request->all();
    }
}
