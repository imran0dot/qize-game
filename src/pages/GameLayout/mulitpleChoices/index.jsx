import { useEffect, useState } from "react";
import uesData from "../../../hooks/uesData";

const MulitpleChoices = () => {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectItem, setSelectItem] = useState([]);

    useEffect(() => {
        uesData().then(responce => setData(responce.questions));
    }, [])

    const selectItemsFuntion = (option) => {
        if (selectItem.includes(option)) {
            setSelectItem(selectItem.filter(item => item === option))
            console.log(selectItem);
        } else {
            setSelectItem((prev) => [...prev, option])
        }
    }

    const changeItem = () => {
        if (data.length - 1 > currentIndex) {
            setCurrentIndex((prev) => prev + 1)
        }
        console.log(selectItem);
    }

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
                                <button
                                    onClick={() => selectItemsFuntion(option)}

                                    className={`btn w-96 py-5 rounded-lg  text-5xl ${selectItem.includes(option)? "bg-secondary shadow-red" : "bg-primary shadow-green"}`} >{option}</button>
                            </div>
                        )
                    })
                }
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