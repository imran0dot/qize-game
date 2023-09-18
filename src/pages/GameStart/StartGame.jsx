import logo from "../../assets/logo.png"
import startButton from "../../assets/button_start.svg"
import buttonOption from "../../assets/button_option.svg"
import buttonOptionClose from "../../assets/button_option_close.svg"
import buttonFullScreen from "../../assets/button_fullscreen.svg"
import buttonSoundOn from "../../assets/button_sound_on.svg"
import buttonSoundOff from "../../assets/button_sound_off.svg"
import { useState } from "react";
import useToggle from "../../hooks/useToggle"
import { Link } from "react-router-dom"
const StartGame = () => {
    const [option, toggleOption] = useToggle(false);
    const [sound, toogleSound] = useToggle(false)
    const [isFullScreen, setIsFullScreen] = useState(false);

  
    const toggleFullScreen = () => {
        const element = document.documentElement;

        if (!isFullScreen) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }

        setIsFullScreen(!isFullScreen);
    };

    return (
        <div className=" h-[770px] flex justify-center items-center flex-col text-center py-12">
            <div className=" bg-[#107fc9] w-screen h-auto pb-28 relative">
                <div className="w-1/2 mx-auto pt-[7%]">
                    <img src={logo} alt="" />
                </div>
                <div className="flex justify-center items-center cursor-pointer  w-[15%] m-auto mt-[10px]">
                    <Link to='/category'>
                    <img src={startButton} alt="" />
                    </Link>
                </div>


                <div className="absolute top-20 right-20">
                    <img className="w-14 cursor-pointer h-auto transition-all" onClick={toggleOption} src={!option ? buttonOption : buttonOptionClose} alt="" />
                    <div className={option ? "block" : "hidden"}>
                        <img className="w-14 cursor-pointer h-auto mt-4" onClick={toggleFullScreen} src={buttonFullScreen} alt="" />
                        <img onClick={toogleSound} className="w-14 cursor-pointer h-auto mt-4" src={!sound ? buttonSoundOff : buttonSoundOn} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartGame;