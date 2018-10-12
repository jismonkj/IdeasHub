<?php

namespace Ideashub\Http\Controllers;

use Illuminate\Http\Request;
use Ideashub\CompanyProfile;
use Ideashub\State;

class UserFeedController extends Controller
{
    public function list()
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
        return view('components.company.viewprofile')->with(['profile' => $profile, 'flag' => 'view']);
    }
}
