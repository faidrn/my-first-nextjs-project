import { NextResponse } from 'next/server';

export async function GET() {
    // aqui se puede:
    // - obtener datos de una base de datos
    // - llamar a una API externa
    // - extraer parametros
    // - comunicarme con otros servicios o con otro backend
    // - realizar cualquier otra lógica necesaria
    // luego devolver una respuesta JSON

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return NextResponse.json(data);
}

export async function POST(request) {
    const data = await request.json();
    console.log(data);

    return NextResponse.json({
        message: "Creando datos!"
    });
}

export function PUT(request) {
    return NextResponse.json({
        message: "Actualizando datos!"
    });
}

export function DELETE(request) {
    return NextResponse.json({
        message: "Eliminando datos!"
    });
}