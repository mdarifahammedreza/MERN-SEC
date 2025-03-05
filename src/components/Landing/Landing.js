import { FaNode, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { Spotlight } from "../ui/Spotlight";
const Landing = () => {
  return (
    <div className="min-h-screen flex justify-center items-center overflow-hidden relative " id="Landing">
      <Spotlight
        fill="rgba(20, 255, 255, 0.8)"
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(20, 255, 255, 0.1) 0%, rgba(20, 255, 255, 0.05) 50%, rgba(20, 255, 255, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(20, 255, 255, 0.1) 0%, rgba(20, 255, 255, 0.1) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(20, 255, 255, 0.1) 0%, rgba(20, 255, 255, 0.1) 80%, transparent 100%)"
        duration={20}
      />
      <div className="w-full min-h-screen flex justify-center items-center bg-black/10 z-10 p-4 md:p-10">
        <div className="w-full md:w-1/2 h-full md:h-1/2 border-x p-4 md:p-10 rounded-4xl overflow-hidden flex justify-center items-center z-0 animate-ping bg-sky-500/10 opacity-10"></div>
        <div className="w-full md:w-1/2 rounded-4xl overflow-hidden flex justify-center items-center z-20 absolute p-4 md:p-0">
          <div className="bg-gradient-to-t from-transparent from-15% to-transparent w-full rounded-4xl flex flex-col justify-center items-center p-4 md:p-8">
            
            <p className="text-xl md:text-3xl text-center">
              Unlock Your Development Potential With{" "}
              <span className="font-bold">MERN Stack</span>
            </p>
            <p className="text-center font-bold mt-2.5 md:p-2.5 text-white text-base">
              It's time to turn logic into code—where real developers shine.
              Start building with MERN today!
            </p>
            <p className="flex text-xl md:text-5xl overflow-hidden space-x-5 mt-10"><span className="text-green-700"><SiMongodb /></span> <span className="text-white"><SiExpress /></span><FaReact /> <span className="text-green-400"><FaNode/></span></p>
            <div className="text-center mt-10">
          <h3 className="text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Start Your Journey Today!
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            💻 Limited Seats Available – Enroll Now & Transform Your Career!
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfX1VoF1yCvCMIc0E16zRvtz_0c_Weof3zF_b_CFADyvdeNrQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-8 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Register Now
          </a>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;