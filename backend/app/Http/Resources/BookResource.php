<?php

//php aritsan make:resource (nama resource)
// digunakan untuk limitasi/ pegurangan data 

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            //$this berasal dari database
            "id" => $this->id,
            "name" => $this->name,
            "description" => $this->description,
            "price" => $this->price,
            "image" => $this->image,
            "createdAt" => $this->created_at,
            "UpdatedAt" => $this->updated_at,
        ];
    }
}
