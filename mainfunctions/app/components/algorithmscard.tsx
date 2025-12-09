
export default function AlgoCard({nombre,image,}:{nombre:string; image:string;}){
    return(
    <div className=" flex flex-col justify-center">
        <div className=" rounded-2xl flex justify-center items-center aspect-square w-full h-auto bg-white">
            <img src={image || "/default.png"} alt={image} className="h-28 w-28"/>
        </div>
        <div>
            <p className="text-white text-center">{nombre}</p>
        </div>
    </div>
    )
}