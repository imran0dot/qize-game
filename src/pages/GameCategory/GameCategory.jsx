import { useEffect, useState } from "react";
import buttonPrev from "../../assets/button_prev.svg"
import buttonNext from "../../assets/button_next.svg"
import uesData from "../../hooks/uesData";
import { Link } from "react-router-dom";

const GameCategory = () => {
    const [data, setData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0); // Starting index

    const handleNext = () => {
        if (currentIndex + 3 < data?.length) {
            setCurrentIndex(currentIndex + 3);
        }
    };

    const handlePrevious = () => {
        if (currentIndex - 3 >= 0) {
            setCurrentIndex(currentIndex - 3);
        }
    };

    useEffect(() => {
        uesData().then(data => {
            setData(data.thumb)
        });
    }, [])


    return (
        <div className="min-h-[770px] flex justify-center  bg-[#107fc9] items-center flex-col text-center py-12">
            <div className="w-screen  flex justify-center gap-12">
                {data.slice(currentIndex, currentIndex + 3).map((data, index) => (
                    <Link
                        key={index}
                        to={data?.path}
                        className="flex justify-center items-center flex-col cursor-pointer">
                        <img className="w-full h-auto" src={data.__text} alt={`text ${index}`} />
                        <p className="text-white text-[20px] p-[5%]">{data._name}</p>
                    </Link>
                ))}
            </div>


            {/* Next previos Button  */}
            <div className="flex gap-3 items-center mt-10">
                {currentIndex >= 2 && (
                    <img
                        src={buttonPrev}
                        onClick={handlePrevious}
                        className="px-4 py-2 cursor-pointer"
                    />
                )}
                {currentIndex + 2 < data?.length && (
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