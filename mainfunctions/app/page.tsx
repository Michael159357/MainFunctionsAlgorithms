
  import Link  from "next/link"
  import {Inter} from "next/font/google"

  const inter = Inter({subsets: ["latin"]})

  export default function Home() {



    return (

      <main className=" bg-[#1A1A1A] min-h-screen w-full flex items-center justify-center ">
        
        <section className="relative flex px-8 pt-10   justify-center items-center bg-[#1A1A1A] w-full max-w-xl min-h-screen">
          
          {/* Capa de ataras*/}
          <div className=" bg-[#121212] flex justify-center px-4 items-cente w-full min-h-screen rounded-t-4xl">

            {/*Card*/}
            <div className="relative z-10 flex flex-col py-10 bg-black rounded-t-2xl ">
              
              <div className="flex justify-center pb-4">
                <img src="/mainlogo.svg" alt="Main Logo" className="w-32 h-32"/>
              </div>
              <div className="px-4 ">
                <h1 className={`${inter.className} text-2xl pb-4 text-center text-white`}>
                Canal Main Function</h1>
                <p className={`${inter.className} text-xs pb-4 px-16 text-center text-white`}>
                En esta página encontrarás los algoritmos más importantes del libro de Cormen (CLRS), explicados de forma simple y acompañados de ejemplos y código para practicar.</p>
              </div>

              <div className=" flex justify-center">
                <Link href="algorithms" className="bg-black border-2 border-white text-white text-center py-2 px-16 hover:bg-[#1b1b1b] rounded-sm">
                Algorithms
                </Link>
              </div>
            </div> 
          </div>
        </section>
        

      </main>
      
      
      
      
    );
  }
