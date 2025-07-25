import { NextResponse } from "next/server"
import user from "../models/user.model.js"


const authUser = async(req)=>{
    try {
        const token  = req.cookies.get("accesstoken")?.value || req.headers("authization").replace("Bearer" , "")

        if(!token){
            return NextResponse.json({message:"Token  not found"}, {status:404})
        }

        const decoded = await user.verfyToken(token , process.env.accesToken)
    } catch (error) {
        
    }
}