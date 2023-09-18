import { useEffect, useState } from "react";
import loaderImage from "../../assets/loader.png"



const Loader = () => {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);



  return (
    <div className="flex justify-center items-center flex-col h-[770px]">
      <img src={loaderImage} alt="" />
      <span className="text-[30px] text-white">{progress}%</span>
    </div>
  );
};

export default Loader;
