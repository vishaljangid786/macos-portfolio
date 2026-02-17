import { useEffect, useState } from "react";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

import { Dock, Home, Navbar, Welcome } from "#components";
import {
  Contact,
  Finder,
  Image,
  Photos,
  Resume,
  Safari,
  Terminal,
  Text,
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // 👇 Mobile Warning Screen
//   if (isMobile) {
//     return (
//       <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white text-center px-6">
//         <h1 className="text-2xl font-bold mb-4">
//           This website is not suitable for mobile view
//         </h1>

//         <p className="mb-6 text-gray-400">
//           Please open this website on a desktop device for the best experience.
//         </p>

//         <button
//           onClick={() => (window.location.href = "https://google.com")}
//           className="bg-white text-black px-6 py-2 rounded-lg hover:scale-105 transition"
//         >
//           Go to Another Website
//         </button>
//       </div>
//     );
//   }

  // 👇 Desktop Version
  return (
    <main>
      {isMobile && (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white text-center px-6">
          <h1 className="text-2xl font-bold mb-4">
            This website is not suitable for mobile view
          </h1>

          <p className="mb-6 text-gray-400">
            Please open this website on a desktop device for the best
            experience.
          </p>

          <button
            onClick={() => (window.location.href = "https://vishal-jangid-portfolio.vercel.app/")}
            className="bg-white text-black px-6 py-2 rounded-lg hover:scale-105 transition"
          >
            Go to Another Website
          </button>
        </div>
      )}
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
      <Photos />
    </main>
  );
};

export default App;
