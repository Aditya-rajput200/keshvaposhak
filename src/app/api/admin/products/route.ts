import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

//Adding Product
export async function POST(req:NextRequest) {

    const {title,price,discount,image,detail,category} = await req.json();
try {
    const NewProduct = await prisma.product.create({
        data:{
            title,
            price,
            discount,
            image,
            detail,
            category
        }
    })
    return NextResponse.json(NewProduct, { status: 201 });
    
} catch (error) {
    NextResponse.json("Product not added",{status:400})
}}


