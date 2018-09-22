<?php

namespace Ideashub\Http\Controllers;

use Ideashub\CompanyProfile;
use Ideashub\State;
use Ideashub\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CompanyProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $profile = User::find(Auth::id())->companyProfile;
        $states = State::all();
        if ($profile == "") {
            return view('profile')->with(['flag' => 'new', 'states' => $states]);
        }
        $state = State::find($profile['state_id']);
        $profile['state'] = $state['state'];
        return view('profile')->with(['profile' => $profile, 'flag' => 'view']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $imgPath = "";
        if ($request->hasFile('avatar') && $request->file('avatar')->isValid()) {
            $image = $request->file('avatar');
            $imgPath = $image->store('public/images/' . Auth::id());
        }
        $profile = new CompanyProfile($request->all());
        $profile->avatar = $imgPath;
        Auth::user()->companyProfile()->save($profile);
        return view('home');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $profile = User::find($id)->companyProfile;
        $state = State::find($profile['state_id']);
        $profile['state'] = $state['state'];
        $states = State::all();
        return view('profile')->with(['profile' => $profile, 'flag' => 'edit', 'states' => $states]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $imgPath = "";
        $path = "";

        if ($request->hasFile('avatar') && $request->file('avatar')->isValid()) {
            $image = $request->file('avatar');
            $imgPath = $image->store('/images/' . Auth::id());
            $data = $request->except(['_method', '_token']);
            $data['avatar'] = $imgPath;
        } else {
            $data = $request->except(['avatar', '_method', '_token']);
        }
        Auth::user()->companyProfile()->update($data);
        return view('home');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
