import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";


//Get Product by Id
export async function GET(req:NextRequest,res:NextResponse,{params}:{params:{id:string}}) {
    const productId = params.id;
    const GetProduct = await prisma.product.findUnique({
        where:{
            id:productId
        }
    })
    return NextResponse.json(GetProduct, { status: 200 });
}

//Updating Product 
export async function PUT(req:NextRequest,{params}:{params:{id:string}}) {

    const productId = params.id;
    
    const {title,price,discount,image,detail,category} = await req.json();
    try {
        const UpdateProduct = await prisma.product.update({
            where:{
                id:productId
            },
            data:{
                title,
                price,
                discount,
                image,
                detail,
                category
            }
        })
        return NextResponse.json(UpdateProduct, { status: 201 });
    } catch (error) {
        return NextResponse.json("Product not updated,something went wrong",{status:400})
    }
    
    
}

//Deleting Product 

export async function DELETE(req:NextRequest,res:NextResponse,{params}:{params:{id:string}}) {

    try {
        const productId = params.id;
    const DeleteProduct = await prisma.product.delete({
        where:{
            id:productId
        }
    })

    return NextResponse.json(DeleteProduct, { status: 200 });
        
    } catch (error) {
        return NextResponse.json("Product not deleted",{status:400})
        
    }
    
    
    
}