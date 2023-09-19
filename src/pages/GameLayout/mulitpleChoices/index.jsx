import { useEffect, useState } from "react";
import uesData from "../../../hooks/uesData";

const MulitpleChoices = () => {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectItem, setSelectItem] = useState([]);


    const selectItemsFunction = (option) => {
        if (selectItem.includes(option)) {
            setSelectItem(selectItem.filter(item => item !== option));
        } else {
            setSelectItem((prev) => [...prev, option])
        }
    }

    const changeItem = () => {
        if (data.length - 1 > currentIndex) {
            setCurrentIndex((prev) => prev + 1)
        }
    }



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
                    data[currentIndex]?.type === "text" ?

                        <>
                            {data[currentIndex]?.options?.map((option, index) =>

                                <div key={index}>
                                    <button
                                        onClick={() => selectItemsFunction(option)}
                                        className={`btn w-96 py-5 rounded-lg text-5xl ${selectItem.includes(option) ? "bg-secondary shadow-red" : "bg-primary shadow-green"
                                            }`}
                                    >
                                        {option}
                                    </button>
                                </div>)}
                        </>
                        :
                        <>
                            {data[currentIndex]?.options?.map((option, index) => <div key={index}>
                                <img 
                                onClick={() => selectItemsFunction(option)}
                                className={`${selectItem.includes(option)? "" : "opacity-40"} cursor-pointer`}
                                
                                src={option.img} alt="" />
                            </div>)}
                        </>
                }

                {/* {
                    data[currentIndex]?.map((option, index) => {
                        console.log(option);
                        return (
                            <div key={index}>
                                {option.type === "text" ? (
                                    <button
                                        onClick={() => selectItemsFunction(option)}
                                        className={`btn w-96 py-5 rounded-lg text-5xl ${selectItem.includes(option) ? "bg-secondary shadow-red" : "bg-primary shadow-green"
                                            }`}
                                    >
                                        {option}
                                    </button>
                                ) : (
                                    <img src={option} alt="" />
                                )}
                            </div>
                        )
                    })
                } */}
            </div>

            <div>
                <button
                    onClick={changeItem}
                    className="btn bg-[#A2CD4A] w-96 py-5 rounded-lg shadow-solid text-5xl mt-20">Done</button>
            </div>
        </div>
    );
};

export default MulitpleChoices;