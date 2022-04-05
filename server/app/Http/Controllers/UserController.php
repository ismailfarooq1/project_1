<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        // Log::debug('index for users');
        // $response = ['message' =>  '<function name> function'];
        return User::get();
    }
}
