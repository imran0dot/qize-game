import { Link } from "react-router-dom";
import successImg from "../../assets/item_cup.svg"
import resterBtn from "../../assets/button_replay.svg"

const ShowScore = ({ score }) => {
    return (
        <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center border-2 border-white shadow-red bg-primary-bg flex-col gap-10'>
            <img src={successImg} alt="" />
            <h3 className="text-8xl font-bold text-white uppercase">Your Score: {score}</h3>
            <Link to="/category">
                <img src={resterBtn} alt="" />
            </Link>
        </div>
    );
};

export default ShowScore;