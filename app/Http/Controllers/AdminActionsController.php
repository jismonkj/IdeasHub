<?php
namespace Ideashub\Http\Controllers;

use Ideashub\CompanyProfile;
use Ideashub\UserProfile;

class AdminActionsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getDashboard()
    {
        // fetch users list
        $users = UserProfile::all();
        // fetch companies list
        $companies = CompanyProfile::all();
        return view('admin', ['users' => $users, 'companies' => $companies]);
    }

    public function getProfile($id)
    {
        echo $id;
    }
}
