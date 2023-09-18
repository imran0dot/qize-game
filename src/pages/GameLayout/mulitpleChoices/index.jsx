import { useEffect, useState } from "react";
import uesData from "../../../hooks/uesData";

const MulitpleChoices = () => {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        uesData().then(responce => setData(responce.questions));
    }, [])



    return (
        <div className="text-white text-8xl">
            <h1 className="font-bold">
                {data[currentIndex]?.question}
            </h1>

            <div className="flex justify-center flex-wrap items-center gap-10 mt-10">
                {
                    data[currentIndex]?.options?.map((option, index) => {
                        return (
                            <div key={index}>
                                <button className="btn bg-[#A2CD4A] w-96 py-5 rounded-lg shadow-solid text-5xl" >{option}</button>
                            </div>
                        )
                    })
                }
            </div>

            <div>
                <button 
                onClick={() => setCurrentIndex((prev) =>  prev + 1)}
                className="btn bg-[#A2CD4A] w-96 py-5 rounded-lg shadow-solid text-5xl mt-20">Done</button>
            </div>
        </div>
    );
};

export default MulitpleChoices;