import DBconnect from "../../lib/DBconnect.js"

import roadSafetyHeroesSchemaData from "../../models/roadSafetyHeros.js"
import { writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import {uploadOnCloudinary} from "../../utils/cloudinary.js"


export async function GET(){
    await DBconnect()
    const foundUser = await roadSafetyHeroesSchemaData.find()
   if (!foundUser || foundUser.length === 0) {
    return NextResponse.json({ message: "No items found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Items found successfully", foundUser }, { status: 200 });
}


export async function POST(req){
    await DBconnect()

    try {
        const formData = await req.formData()
        const name = await formData.get("name")
        const text = await formData.get("text")
        const file = await formData.get("image")

       if (!name || !text || !file) {
      return NextResponse.json({ message: "Name, title, and image are required" }, { status: 400 });
    }

    const buffer =  Buffer.from(await file.arrayBuffer())
    const tempFilePath = path.join("/tmp" ,file.name)
    await writeFile(tempFilePath,buffer)
    const uploaded  = await uploadOnCloudinary(tempFilePath )

    if (!uploaded) {
      return NextResponse.json({ error: "Cloudinary image upload failed" }, { status: 500 });
    }

    const createRoadSaftyHero = await roadSafetyHeroesSchemaData.create({
        name,
        text,
        image:uploaded.secure_url
    })

    if (!createRoadSaftyHero) {
      return NextResponse.json({ message: "Failed to create heros" }, { status: 500 });
    }

 return NextResponse.json({ message: "heros created successfully", createRoadSaftyHero }, { status: 200 });
    } catch (error) {
        console.error("POST error:", error);
    return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }

}


