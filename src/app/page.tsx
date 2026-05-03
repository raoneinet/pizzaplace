import { PizzaList } from "@/components/home/pizza-list"
import { Header } from "@/components/layout/header"
import { api } from "@/lib/axios"

const Page = async () => {

    const pizzaReq = await api.get("/pizzas")
    const pizzas = pizzaReq.data.pizzas ?? []

    console.log(pizzas)

    return (
        <div>
            <Header/>
            <main className="container mx-auto mb-10">
                <PizzaList pizzas={pizzas}/>
            </main>
        </div>
    )
}

export default Page