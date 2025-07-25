import { NextResponse } from "next/server"
import user from "../models/user.model.js"


const authUser = async(req)=>{
    try {
        const token  = req.cookies.get("accesstoken")?.value || req.headers("authization").replace("Bearer" , "")

        if(!token){
            return NextResponse.json({message:"Token  not found"}, {status:404})
        }

        const decoded = await user.verfyToken(token , process.env.accesToken)
        if(!decoded){
            return NextResponse.json({message:"deconded error"}, {status:404})
        }

        const user = await user.findById(decoded.user_id).select("-password  - refreshtoken")

        if(!user){
            return NextResponse.json({message:"user Not found"}, {status:404})

        }

        return{user}

    } catch (error) {
        console.log(error)
    }
}

export default authUser