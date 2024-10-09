<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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

Route::get('/', function () {
    return view('welcome');
});

Route::post('/upload-profile', function (Request $request) {
    $request->validate(['profile_pic' => 'required|image|mimes:jpg,jpeg,png|max:2048']);
    $path = $request->file('profile_pic')->store('profile_pics', 'public');
    return response()->json(['path' => Storage::url($path)]);
});