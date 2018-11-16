<?php

namespace Ideashub\Http\Controllers;

use Illuminate\Http\Request;
use Ideashub\CompanyProfile;
use Ideashub\State;
use Ideashub\User;
use Ideashub\Idea;
use Ideashub\IdeaDoc;
use Ideashub\IdeaPhoto;
use Illuminate\Support\Facades\Auth;

class UserFeedController extends Controller
{
    public function listCompanies()
    {
        $companies = CompanyProfile::all();
        return $companies;
    }

    public function listIdeas()
    {
        // $ideas = Idea::select('id', 'c_id', 'title', 'summary')->where('uid', Auth::id())->get();
        $ideas = User::find(Auth::id())->ideas;
        return $ideas;
        // return 'some';
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
        session(['iid' => $idea->id]);

        return view('info', ['info' => '<b>Well done!</b> You have sent the idea to the company', 'htmlclass' => 'alert-success', 'more' => 'partials.moretoidea']);
    }

    public function uploadIdeaFiles(Request $request)
    {
        $type = "";
        if (session()->exists('iid')) {
            $iid = session('iid');
            $file = $request->file;
            // foreach ($request->file as $file) {
            $type = $file->getMimeType();
            switch ($type) {
                case 'image/png':
                    $filename = $file->store('images/ideas/' . Auth::id());
                    IdeaPhoto::create([
                        'iid' => $iid,
                        'photo_path' => $filename
                    ]);
                    break;
                case 'application/pdf':
                    $filename = $file->store('docs/ideas/' . Auth::id());
                    IdeaDoc::create([
                        'iid' => $iid,
                        'doc_path' => $filename
                    ]);
                    break;
            }
            return $filename;
        // }
        }
    }

    public function getIdeaPreview()
    {
        $iid = session('iid');
        $idea = Idea::find($iid);
        $photos = IdeaPhoto::select('photo_path')->where('iid', $iid)->get();
        $docs = IdeaDoc::select('doc_path')->where('iid', $iid)->get();

        return view('info', ['info' => '<b>Look!</b> Here is the summary of your proposal', 'htmlclass' => 'alert-info', 'more' => 'partials.ideapreview', 'data' => ['photos' => $photos, 'docs' => $docs, 'idea' => $idea]]);
    }

    public function getIdeaView(Request $request){
       
        $iid = $request->id;
        $idea = Idea::find($iid);
        $photos = IdeaPhoto::select('photo_path')->where('iid', $iid)->get();
        $docs = IdeaDoc::select('doc_path')->where('iid', $iid)->get();

        return view('info', ['info' => '<b>Look!</b> Here is the summary of your proposal', 'htmlclass' => 'alert-info', 'more' => 'partials.ideapreview', 'data' => ['photos' => $photos, 'docs' => $docs, 'idea' => $idea]]);
    }

    public function getIdeaEditView(Request $request){
        
        $idea = Idea::find($request->id);
        // return $idea;
        return View('components.feeds.editidea', ['idea' => $idea]);
    }

    public function editIdea(Request $request){
        
        //idea id
        $iid = $request->id;
        session(['iid' => $iid]);
        $data = [];

        $photos = IdeaPhoto::where('iid', $iid)->get();;
        $docs = IdeaDoc::where('iid', $iid)->get();;
        $data['docs'] = (sizeof($docs)==0) ? null: $docs;
        $data['photos'] = (sizeof($photos)==0) ? null : $photos;

        $idea = Idea::find($iid);
        $idea->title = $request->title;
        $idea->summary = $request->summary;
        $idea->content = $request->content;
        $idea->save();

        return view('info', ['info' => 'Here is your documents and photos!', 'data'=> $data, 'htmlclass' => 'alert-info', 'more' => 'partials.moretoidea_']);
    }

    public function delIdeaPhoto(Request $request)
    {

        $iid = session('iid');
        $data = [];
        //delete photo from storage

        //delete the photo from table
        IdeaPhoto::destroy($request->delId);

        $photos = IdeaPhoto::where('iid', $iid)->get();;
        $docs = IdeaDoc::where('iid', $iid)->get();;
        $data['docs'] = (sizeof($docs)==0) ? null: $docs;
        $data['photos'] = (sizeof($photos)==0) ? null : $photos;

        return view('info', ['info' => 'Photo is removed!', 'data'=> $data, 'htmlclass' => 'alert-info', 'more' => 'partials.moretoidea_']);
    }

    public function delAnIdea(Request $request)
    {
        //remove idea
        Idea::destroy($request->iid);

        return $request->all();
    }
}
