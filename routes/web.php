<?php

use Illuminate\Support\Facades\Auth;

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

/* main pages ---------------- */
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/admin', 'AdminActionsController@getDashboard');
// Route::get('/admin/profile/{id}', 'AdminActionsController@getProfile');

/* profiles -------------------- */
Route::resource('/company/profile', 'CompanyProfileController');
Route::resource('/user/profile', 'UserProfileController');

/* user-feed ------------------ */
Route::get('/idea/sell/{id}', function ($id) {
    return View('components.feeds.sellidea', ['id' => $id]);
});
Route::post('/idea/sell', 'UserFeedController@sellIdea')->name('sell-idea');
Route::get('/idea/preview', 'UserFeedController@getIdeaPreview');
Route::post('/idea/view', 'UserFeedController@getIdeaView');
Route::post('/idea/edit', 'UserFeedController@getIdeaEditView');
Route::post('/idea/update', 'UserFeedController@editIdea')->name('edit-idea');

/* ajax routes ---------------- */
Route::post('/list/company', 'UserFeedController@listCompanies');
Route::post('/list/idea', 'UserFeedController@listIdeas');
Route::get('/view/company/{id}', 'UserFeedController@viewCProfile');
Route::post('/idea/upload', 'UserFeedController@uploadIdeaFiles');
