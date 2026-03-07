<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\ServiceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/services', [ServiceController::class, 'index']);
Route::post('/services', [ServiceController::class, 'store']);
Route::delete('/services/{id}', [ServiceController::class, 'destroy']);
Route::get('services/{id}', [ServiceController::class, 'show']);
Route::put('services/{id}', [ServiceController::class, 'update']);



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/authenticate', [AuthenticationController::class, 'authenticate']);
