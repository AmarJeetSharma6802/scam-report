import user from "../../models/user.model.js";
import DBconnect from "../../lib/DBconnect.js"
import { NextResponse } from "next/server";
import { imagekit } from "../../../utils/imagekit.js";
import path from "path";
import { writeFile} from "fs/promises";