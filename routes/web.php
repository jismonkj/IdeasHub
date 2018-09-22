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
Route::get('/home', 'HomeController@index')->name('home');

// Route::get('/profile', function () {
//     if (!Auth::check()) {
//         return redirect('/register')->with('message', 'Please sign up to continue!');
//     }

//     if (Auth::user()->u_type == "admin") {
//         return redirect('home');
//     }
//     return view('profile');
// });

Route::resource('/company/profile', 'CompanyProfileController');
Route::resource('/user/profile', 'UserProfileController');
