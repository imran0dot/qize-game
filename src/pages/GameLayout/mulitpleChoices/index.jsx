import { useEffect, useState } from "react";
import uesData from "../../../hooks/uesData";

const MulitpleChoices = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        uesData().then(responce => setData(responce));
    }, [])

    const items = data?.questions?.item;

    const filterItems = items?.filter(item => item.category === "Multiple Choices")

    return (
        <div>
            {
                filterItems?.slice(1, 10).map((datas, index) => {
                    const question = datas.landscape.question.__cdata;
                    const options = datas?.landscape?.answers?.answer;

                    return (
                        <div
                            key={index}
                            className="text-white text-8xl">
                            <h1 className="font-bold">{question}</h1>

                            <div className="flex justify-center flex-wrap items-center gap-20 mt-10">
                                {
                                    options?.map((option, index) => {
                                        return (
                                            <div key={index}>
                                                <button className="btn bg-[#A2CD4A] w-96 py-5 rounded-lg shadow-solid text-5xl" >{option.__cdata}</button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default MulitpleChoices;