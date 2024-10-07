"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import { api } from "../constants/api";

interface IData {
    name: string,
    _id: number,
    imageUrl: string
}

const AxiosPage = () => {

    const [data, setData] = useState<IData[]>([]);
    const [erro, setErro] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("Não foi possível buscar os dados");
    const [page, setPage] = useState<string>("")
    const [name, setName] = useState<string>("")

    useEffect(() => {
        api.get(`/character/?page=${page}&name=${name}`).then((res) => {
            console.log(res.data)
            setErro(false)
            setData(res.data.data);
            // if(res.data.data) {
            //     setData(res.data.data);
            // }
            // else {
            //     console.log(res.data)
            //     setData(undefined);
            // }
        }).catch((error) => {
            if(error.response.status === 404) {
                setErrorMessage("Página não encontrada")
            }
            setErro(true);
        })
    }, [page, name])

    return(
        <div className="bg-gray-900 text-white">
            <h1 className="font-bold p-4 text-[20px]">Página com useEfect e Axios</h1>
            <input type="text" value={page} onChange={(e) => setPage(e.target.value)} placeholder="1/149 - insira a página" className="text-black"/>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="1/7449 - insira a página" className="text-black"/>
            <div className=" pt-10 pb-20 flex row flex-wrap justify-center">
                {erro && <h5>{errorMessage}</h5>}
                {data.map((item, index) => {
                    return(
                        <div key={item._id} className="bg-white rounded m-4 text-black w-[250px] flex flex-col items-center justify-center]">
                            <h2>{item.name}</h2>
                            {/* <Image src={item.image} width={100} height={100} alt="imagem"/> */}
                            <img className="w-[200px] h-[250px]" src={item.imageUrl} width={200} height={250} alt="imagem"/>
                            <br/><br/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AxiosPage;