import { Link } from "react-router-dom";

const ShowScore = ({ score }) => {
    return (
        <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center border-2 border-white shadow-red bg-primary flex-col gap-10'>
            <h3 className="text-4xl font-bold text-white">Your Score Is {score}</h3>
            <Link
            to="/category"
                className={`btn w-96 py-5 rounded-lg text-5xl bg-secondary shadow-red`}
            >Back
            </Link>
        </div>
    );
};

export default ShowScore;