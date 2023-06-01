// path to this snippet:
// app/db/api/[id]/status/route.ts
//route :"/db/api/"

import { getDatabases } from "@flexidb/appwrite";

export async function GET(){
    
    const databases = await getDatabases();
    console.log("api log",databases);
    return JSON.stringify(databases.documents);
}