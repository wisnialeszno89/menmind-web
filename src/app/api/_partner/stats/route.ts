import { NextResponse } from "next/server"

export async function GET(){

return NextResponse.json({

views:124,
clicks:32,
rank:2

})

}