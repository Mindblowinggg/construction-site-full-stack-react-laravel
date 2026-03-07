<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::all();
        return response()->json([
            'status' => 'success',
            'data' => $services
        ]);
    }
    public function store(Request $request)
    {
        // 1. Image handling (Direct save bina validation ke)
        $imagePath = null;
        if ($request->hasFile('image')) {
            // 'services' folder mein image jayegi
            $imagePath = $request->file('image')->store('services', 'public');
        }

        // 2. Database mein direct insert
        $service = Service::create([
            'title'      => $request->input('title'),
            'short_desc' => $request->input('short_desc'),
            'content'    => $request->input('content'),
            'image'      => $imagePath,
        ]);

        // 3. Response wapas React ko bhej do
        return response()->json([
            'status' => 'success',
            'message' => 'Wah Aman! Data save ho gaya.',
            'data' => $service
        ], 201);
    }
    public function destroy($id)
    {
        $service = Service::find($id);
        $service->delete();
        return response()->json(['status' => 'success']);
    }

    public function update(Request $request, $id)
    {
        $service = Service::find($id);
        if (!$service) {
            return response()->json(['status' => 'error', 'message' => 'Service not found'], 404);
        }

        // 1. Pehle basic fields update karein
        $service->title = $request->input('title');
        $service->short_desc = $request->input('short_desc');
        $service->content = $request->input('content');

        // 2. Agar nayi image aayi hai toh use save karein
        if ($request->hasFile('image')) {
            // Purani image delete karne ka logic (optional par achha hai)
            // if ($service->image) { \Storage::disk('public')->delete($service->image); }

            $service->image = $request->file('image')->store('services', 'public');
        }

        $service->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Mubarak ho! Service update ho gayi.',
            'data' => $service
        ]);
    }

    public function show($id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'status' => 'error',
                'message' => 'Service not found'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $service
        ], 200);
    }
}
