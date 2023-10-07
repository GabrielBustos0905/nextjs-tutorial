import { NextResponse } from "next/server";

console.log(process.env.TOKEN)

export async function GET(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users?apikey=" + process.env.TOKEN);
    const data = await res.json();
    return NextResponse.json(data)
};

export async function POST(request){
    const { name, lastname} = await request.json();
    console.log(name, lastname)

    return NextResponse.json({
        message: "Creando datos!"
    })
}

export function PUT(){
    return NextResponse.json({
        message: "Modificando datos!"
    })
}

export function DELETE(){
    return NextResponse.json({
        message: "Eliminando datos!"
    })
}