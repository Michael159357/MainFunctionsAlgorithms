import AlgoCard from "../components/algorithmscard"
import Link from "next/link"

export default function Algorithms(){
    return(
        <main className="bg-[#1A1A1A] min-h-screen w-full">
            <section className=" p-6 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-6">
                <Link href="/algorithms/insertion-sort">
                   <AlgoCard nombre="Insertion Sort" image="/insert-sort.png"/>
                </Link>
                <AlgoCard nombre="Insertion Sort" image="/insert-sort.png"/>
                <AlgoCard nombre="Insertion Sort" image="/insert-sort.png"/>
            </section>
        </main>
    )
}