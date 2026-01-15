import { NextRequest, NextResponse } from 'next/server';
export const GET = async (request: NextRequest) =>{
    const {searchParams} =  new URL(request.url);
    return NextResponse.json({message:"API route is working", params: searchParams.get('search')},{status:200});
}
export const POST = async (request: NextRequest) =>{
    const data = await request.json();
    return NextResponse.json({message:"API route is working", your_stuffs: JSON.stringify(data)},{status:200});
}