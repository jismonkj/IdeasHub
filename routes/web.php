<?php

use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::view('/', 'welcome');
Auth::routes();

//main pages
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/admin', 'AdminActionsController@getDashboard');
// Route::get('/admin/profile/{id}', 'AdminActionsController@getProfile');
//profiles
Route::resource('/company/profile', 'CompanyProfileController');
Route::resource('/user/profile', 'UserProfileController');


//ajax routes
Route::post('/list/company', 'UserFeedController@list');
Route::get('/view/company/{id}', 'UserFeedController@viewCProfile');