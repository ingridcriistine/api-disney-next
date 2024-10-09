import Image from "next/image";

interface IPerso {
    params: {
        _id: string;
    }
}

interface IData {
    _id: string,
    name: string,
    imageUrl: string
}

const Perso = async ({params: {_id}} : IPerso) => {

    const res = await fetch(`https://api.disneyapi.dev/character/:${_id}`)
    const data: IData = await res.json()

    return(
        <div>
            <h1>{data._id}</h1>
            <p>{data.name}</p>
            <Image className="w-[500px] h-auto" src={data.imageUrl} alt="photo" width={100} height={100} priority/>
        </div>
    )
}

export default Perso

export async function generateStaticParams() {
    return ["1", "2", "3", "4"]
}