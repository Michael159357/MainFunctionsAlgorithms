import {ArrowLeft} from "lucide-react"
import Link from "next/link"

export default function Layout({children}:{children:React.ReactNode}){

    return(
            <section>
            {/*HEADER*/}
            <section className="flex w-full p-2 bg-white ">
                <div className="hover:text-amber-900 text-[#1A1A1A]">
                    <Link href="/"  className="flex font-bold text-xl ">
                        <ArrowLeft strokeWidth={2} className="w-6 h-6 "/>
                        Volver
                    </Link>
                </div>

                
            </section>
            {/*BODY */}
            {children}
        </section>
        
    )
}