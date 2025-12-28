import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { userId } = await params;
    // http://localhost:3000/api/users/1?nombre=L&apellido=S
    const { searchParams } = new URL(request.url);
    console.log("searchParams:", searchParams);
    console.log(searchParams.get("nombre"));
    console.log(searchParams.get("apellido"));
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await res.json();


    return NextResponse.json(data);
}