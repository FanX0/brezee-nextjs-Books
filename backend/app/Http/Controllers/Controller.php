<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function sendResponse($result, $massage){
        $response = [
        "success" => true,
        "massage" => $massage,
        "data" => $result
        ];

        return response()->json($response, 200);    //agar tidak menuliskan json berulang ulang lagi
    }


    public function sendError($error, $errorMessages = [], $code = 404){
        $response = [
            "success" => false,
            "massage" => $error,
            ];
        
        if(!empty($erorMessages)){
            $response['data'] = $errorMessages;
        }

        return response()->json($response,$code);
    }
}
