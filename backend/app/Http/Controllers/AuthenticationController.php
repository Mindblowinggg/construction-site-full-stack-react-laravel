<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticationController extends Controller
{
    public function authenticate(Request $request)
    {

        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);


        if (Auth::attempt($credentials)) {

            $user = Auth::user();
            return response()->json([
                'status' => 'success',
                'message' => 'User exist',
                'user' => $user
            ], 200);
        }


        return response()->json([
            'status' => 'error',
            'message' => 'Invalid credentials'
        ], 401);
    }
}
