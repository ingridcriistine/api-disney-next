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
    const [page, setPage] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const local = localStorage.getItem('data');
        if(local){
            setData(JSON.parse(local))
        }else{
            api.get(`/character?page=${page}&name=${search}`)
            // api.get(`/character/?page=${page}&name=${name}`).then((res) => {
            .then((res) => {
                setData(res.data.data);
                console.log(res.data)
                setErro(false)
            }).catch((error) => {
                if(error.response.status === 404) {
                    setErrorMessage("Página não encontrada")
                }
                setErro(true);
            })
        }
        // if(res.data.data) {
            //     setData(res.data.data);
            // }
            // else {
            //     console.log(res.data)
            //     setData(undefined);
            // }
    }, [page])

    return(
        <div className="bg-gray-900 text-white">
            <h1 className="font-bold p-4 text-[20px]">Página com useEfect e Axios</h1>
            <input type="number" value={page} onChange={(e) => setPage(e.target.value)} placeholder="1/149 - insira a página" className="text-black m-4 pl-2"/>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquise um nome" className="text-black m-4 pl-2"/>
            <div className=" pt-10 pb-20 flex row flex-wrap justify-center">
                {erro && <h5>{errorMessage}</h5>}

                {data.map((item, index) => {
                    {if(item.name.toLowerCase().includes(search.toLowerCase()))  
                        return(
                            <div key={item._id} className="bg-white rounded m-4 text-black w-[250px] flex flex-col items-center justify-center]">
                                <h2>{item.name}</h2>
                                <img className="w-[200px] h-[250px]" src={item.imageUrl} width={100} height={100} alt="imagem" /> 
                                <br/><br/>
                            </div>
                        )
                    }
                })}



            </div>
        </div>
    )
}

export default AxiosPage;