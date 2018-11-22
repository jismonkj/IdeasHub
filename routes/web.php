<?php

use Illuminate\Support\Facades\Auth;
use Ideashub\CompanyProfile;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
 */

Route::view('/', 'welcome');
Auth::routes();

/* main pages 
_______________________________________________________________ */
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/admin', 'AdminActionsController@getDashboard');
// Route::get('/admin/profile/{id}', 'AdminActionsController@getProfile');

/* profiles 
___________________________________________________________________ */
Route::resource('/company/profile', 'CompanyProfileController');
Route::resource('/user/profile', 'UserProfileController');

/* user-feed 
___________________________________________________________________________ */
Route::get('/idea/sell/{id}', function ($id) {
    $data = CompanyProfile::find(['c_id'=> $id]);
    return View('components.feeds.sellidea', ['id' => $id, 'cname' => $data[0]['uni_name']]);
});
Route::post('/idea/sell', 'UserFeedController@sellIdea')->name('sell-idea');
Route::get('/idea/preview', 'UserFeedController@getIdeaPreview');
Route::post('/idea/view', 'UserFeedController@getIdeaView');
Route::post('/idea/edit', 'UserFeedController@getIdeaEditView');
Route::post('/idea/update', 'UserFeedController@editIdea')->name('edit-idea');
Route::post('/idea/del/photo', 'UserFeedController@delIdeaPhoto')->name('delIdeaPhoto');
Route::post('/idea/del/doc', 'UserFeedController@delIdeaDoc')->name('delIdeaDoc');
//access to company on idea
Route::post('user/idea/auth', 'UserFeedController@allowCompanyOnIdea');
//set price on idea 
Route::post('user/idea/set/price', 'UserFeedController@setPriceOnIdea')->name('set-ideaprice');

/* ajax routes ---------------- */
Route::post('/list/company', 'UserFeedController@listCompanies');
Route::post('/list/idea', 'UserFeedController@listIdeas');
Route::get('/view/company/{id}', 'UserFeedController@viewCProfile');
Route::post('/idea/upload', 'UserFeedController@uploadIdeaFiles');
Route::post('/del/idea', 'UserFeedController@delAnIdea'); //removes an idea an related files

/* company-feed
___________________________________________________________________________*/
Route::post('company/view/user', 'CompanyFeedController@showUser')->name('showUser');
Route::post('company/view/idea', 'CompanyFeedController@showIdea')->name('showIdea');
Route::post('company/mark/idea', 'CompanyFeedController@markIdeaForReview')->name('mark-for-review');

/* ajax routes - company feed*/
Route::post('company/list/ideas/r', 'CompanyFeedController@listIdeasForReview');
Route::post('company/list/ideas/i', 'CompanyFeedController@listIdeasInterested');
Route::post('company/list/ideas/p', 'CompanyFeedController@listIdeasBought');
Route::post('company/change/idea/s', 'CompanyFeedController@changeIdeaStatus');

/* wallet 
_________________________________________________________________________________*/
Route::get('wallet/view', 'WalletController@showWallet')->name('wallet');
Route::post('wallet/collect', 'WalletController@walletCollect')->name('collect');

// ajax routes - wallet
Route::get('wallet/get/balance', 'WalletController@walletBalance');

// ajax routes - wallet_temp
Route::post('wallet/transfer/t', 'WalletController@walletTransfer');