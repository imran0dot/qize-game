import { useEffect, useState } from "react";
import buttonPrev  from "../../assets/button_prev.svg"
import buttonNext  from "../../assets/button_next.svg"

const GameCategory = () => {
    const [data, setData] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0); // Starting index

    const handleNext = () => {
        if (currentIndex + 3 < data?.questions?.category.thumb.length) {
            setCurrentIndex(currentIndex + 3);
        }
    };

    const handlePrevious = () => {
        if (currentIndex - 3 >= 0) {
            setCurrentIndex(currentIndex - 3);
        }
    };

    const getDATA = async () => {
        const res = await fetch("data.json")
        const data = await res.json()
        setData(data)
        console.log(data)
    }

    useEffect(() => {
        getDATA()
    }, [])

    console.log(data?.questions?.category.thumb)

    return (
        <div className="min-h-[770px] flex justify-center  bg-[#107fc9] items-center flex-col text-center py-12">
            <div className="w-screen  flex justify-center gap-12">
                {data?.questions?.category.thumb.slice(currentIndex, currentIndex + 3).map((data, index) => (
                    <div key={index} className="flex justify-center items-center flex-col">
                        <img className="w-full h-auto" src={data.__text} alt={`text ${index}`} />
                        <p className="text-white text-[20px] p-[5%]">{data._name}</p>
                    </div>
                ))}
            </div>
           <div className="flex gap-3 items-center mt-10">
           {currentIndex >= 2 && (
          <img
          src={buttonPrev}
            onClick={handlePrevious}
            className="px-4 py-2 cursor-pointer"
          />
        )}
        {currentIndex + 2 < data?.questions?.category.thumb.length && (
          <img
          src={buttonNext}
            onClick={handleNext}
            className="px-4 py-2 cursor-pointer"       
          />
        )}
           </div>
        </div>
    );
};

export default GameCategory;