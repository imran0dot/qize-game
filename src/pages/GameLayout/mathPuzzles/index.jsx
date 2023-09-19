import { useEffect, useState } from "react";
import uesData from "../../../hooks/uesData";
import ShowScore from "../../../components/showScrore";

const MathPuzzles = () => {
    const [quizs, setquizs] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectItem, setSelectItem] = useState([]);
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false);





    const selectItemsFunction = (option) => {
        if (selectItem.includes(option)) {
            setSelectItem(selectItem.filter(item => item !== option));
        } else {
            setSelectItem((prev) => [...prev, option])
        }
    }

    const indexChange = () => {
        if (quizs.length - 1 > currentIndex) {
            setCurrentIndex((prev) => prev + 1)
            setSelectItem([])
        } else {
            setShowScore(true);
        }
    }


    const changeItem = (answer) => {
        if (answer.length === selectItem.length) {

            const result = selectItem.every(element => {
                if (element.value) {
                    return answer.includes(element.value);
                }
                else {
                    return answer.includes(element);
                }
            })



            if (result) {
                setScore(prev => prev + 1)
            } else {
                console.log("ans is wrong")
            }
        }
        indexChange()
    }


    useEffect(() => {
        uesData("math-questions")
            .then(res => setquizs(res?.categoryData))
    }, [])


    return (
        showScore ? <ShowScore score={score} /> :
            <div className="text-white text-8xl">
                <h1 className="font-bold">
                    {quizs[currentIndex]?.question}
                </h1>
                <div>
                    <img src={quizs[currentIndex]?.relatedImg} alt="" />

                    <div className="flex justify-center flex-wrap items-center gap-10 mt-10">

                        {
                            quizs[currentIndex]?.type === "text" ?

                                <>
                                    {quizs[currentIndex]?.options?.map((option, index) =>

                                        <div key={index}>
                                            <button
                                                onClick={() => selectItemsFunction(option)}
                                                className={`btn w-96 py-5 rounded-lg text-5xl ${selectItem.includes(option) ? "bg-secondary shadow-red" : "bg-primary shadow-green"
                                                    }`}
                                            >
                                                {option}
                                            </button>
                                        </div>)}

                                    <div>
                                        <button
                                            onClick={() => changeItem(quizs[currentIndex].answer)}
                                            className="btn bg-[#A2CD4A] w-96 py-5 rounded-lg shadow-solid text-5xl mt-20">Done</button>
                                    </div>
                                </>
                                :
                                <>
                                    {quizs[currentIndex]?.options?.map((option, index) => <div key={index}>
                                        <img
                                            onClick={() => selectItemsFunction(option)}
                                            className={`${selectItem.includes(option) ? "" : "opacity-40"} cursor-pointer`}

                                            src={option.img} alt="" />
                                    </div>)}

                                    <div>
                                        <button
                                            onClick={() => changeItem(quizs[currentIndex].answer)}
                                            className="btn bg-[#A2CD4A] w-96 py-5 rounded-lg shadow-solid text-5xl mt-20">Done</button>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>

    );
};

export default MathPuzzles;