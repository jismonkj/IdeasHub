<?php

namespace Ideashub\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Ideashub\Idea;
use Ideashub\User;
use Ideashub\State;
use Ideashub\IdeaPhoto;
use Ideashub\IdeaDoc;
use Ideashub\CompanyProfile;


class CompanyFeedController extends Controller
{
    public function listIdeasForReview()
    {
        $ideas = Idea::where('c_id', Auth::id())->where('status', 'fresh')->get();
        return $ideas;
    }

    public function listIdeasInterested()
    {
        $ideas = Idea::where('c_id', Auth::id())->where('status', 'interested')->orWhere('status', 'authorised')->get();
        return $ideas;
    }

    public function listIdeasBought()
    {
        $ideas = Idea::where('c_id', Auth::id())->where('status', 'paid')->get();
        return $ideas;
    }

    //change idea status in the db
    public function changeIdeaStatus(Request $request)
    {
        $idea = Idea::find($request->id);
        $idea->status = $request->status;
        $idea->save();

        return 1;
    }

    //view idea details
    public function showIdea(Request $request)
    {
        $iid = $request->iid;
        $idea = Idea::find($iid);
        $photos = IdeaPhoto::select('photo_path')->where('iid', $iid)->get();
        $docs = IdeaDoc::select('doc_path')->where('iid', $iid)->get();
        $user = User::find($idea->uid)->userProfile()->select('fname', 'lname')->get();
        $name = $user[0]['fname']." ".$user[0]['lname'] ; 
        $data = CompanyProfile::find(['c_id'=> $idea->c_id]);
        // return $idea;
        return view('info', ['info' => '<b>Look!</b> Here is the summary of '.$name .'\'s proposal', 'htmlclass' => 'alert-info', 'more' => 'components.feeds.partials.ideapreview', 'data' => ['photos' => $photos, 'docs' => $docs, 'idea' => $idea], 'title'=>$data[0]['uni_name']]);
    }

    // view user profile
    public function showUser(Request $request)
    {
        $id = $request->uid;
        $profile = User::find($id)->userProfile;
        $state = State::find($profile['state_id']);
        $profile['state'] = $state['state'];
        return view('components.feeds.showprofile')->with(['profile' => $profile]);
    }

    public function markIdeaForReview()
    {
        return view('info', ['info' => '<b>Coming Soon!</b>', 'htmlclass' => 'alert-info', 'title'=> 'Mark for Review']);
    }

}
