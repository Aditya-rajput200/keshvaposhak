// /app/api/products/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Update the path based on your project structure

// GET request handler
export async function GET() {
    try {
        const products = await prisma.product.findMany();
        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json({ error: "Failed to fetch products" }, 
        { status: 500 });
    }
}

  