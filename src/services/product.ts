import { prisma } from "@/lib/prisma"

export const getAllProducts = async ()=>{
    const pizzas = await prisma.product.findMany()

    return pizzas
}