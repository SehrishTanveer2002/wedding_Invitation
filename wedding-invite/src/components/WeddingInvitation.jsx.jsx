import React, {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react";
import nextBackgroundImage from "../assets/nextBackground.jpeg";
import white from "../assets/white.avif";
import top from "../assets/top.png";
import top2 from "../assets/top2.png";
import topRed from "../assets/topRed.png";
import topLights1 from "../assets/topLights1.png";
import couple from "../assets/couple.png";
import couple1 from "../assets/couple1.png";
import couple2 from "../assets/couple2.png";
import plants from "../assets/plants.png";
import dolki from "../assets/dholki.png";
import drum from "../assets/drum.png";
import drumImage from "../assets/drumImage.png";
import mehndiImage from "../assets/mehndiImage.png";
import mehndiImage2 from "../assets/mehndiImage2.png";
import dholkiImage from "../assets/dholkiImage.png";
import haldiImage from "../assets/haldiImage.png";
import { FaArrowAltCircleDown } from "react-icons/fa"; 

const WeddingInvitation = () => {
  const [step, setStep] = useState(0);
  const events = [
    { name: "Haldi", date: "2024-08-24T19:00:00" },
    { name: "Dholki", date: "2024-08-25T19:00:00" },
    { name: "Mehndi", date: "2024-08-26T19:00:00" },
    { name: "Wedding", date: "2024-08-27T19:00:00" },
  ];

  const weddingLocation = "XYZ Hall, Lahore";

  const qrCodeData = `BEGIN:VCALENDAR
VERSION:2.0
${events
  .map(
    (event) => `
BEGIN:VEVENT
SUMMARY:${event.name}
LOCATION:${weddingLocation}
DTSTART:${event.date.replace(/[-:]/g, "")}Z
DTEND:${event.date.replace(/[-:]/g, "")}Z
END:VEVENT`
  )
  .join("")}
END:VCALENDAR`;

  const nextStep = () => {
    setStep((prevStep) => (prevStep + 1) % 8);
  };


  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <AnimatePresence>

      {step === 0 && (
          <motion.div
            key="step1"
            className="absolute inset-0 flex justify-center items-center bg-cover lg:bg-contain lg:bg-no-repeat"
            style={{
              backgroundImage: `url(${nextBackgroundImage})`,
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative flex items-center justify-center w-64 h-64 bg-white/90 rounded-full">
              <h1
                className="text-[#bb595a] text-4xl font-bold text-center leading-normal"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                }}
              >
                HALIMA & YUNUS
              </h1>
              <motion.div
                className="absolute inset-0 border-4 border-dotted rounded-full border-[#bb595a]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
              />
            </div>
          </motion.div>
        )}

{step === 1 && (
  <motion.div
    className="absolute top-0 left-0 w-full h-auto min-h-screen"
    style={{
      backgroundImage: `url(${white})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >

    <motion.div
      className="-mt-10 left-0 w-full h-auto"
      style={{
        height: "35vh",
        backgroundImage: `url(${top})`,
        backgroundSize: "cover",
      }}
    />

    <div className="-mt-6 text-center w-96 mx-auto z-10">
      <h1 className="text-green-800 text-xl sm:text-3xl font-bold">
        بَارَكَ اللهُ لَكُماَ وَبَارَكَ عَلَيْكُماَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
      </h1>
      <p className="text-gray-600 text-xs sm:text-base mt-2">
        May Allah bless you, and shower His blessings upon you, and join you together in goodness.
      </p>
    </div>

    <motion.div
      className="mt-4 text-center z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
    
    <motion.p
        className="text-green-800 text-lg sm:text-xl font-bold mt-8 pl-10 pr-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        WE SOLICIT YOUR GRACIOUS PRESENCE & BLESSINGS ON THE AUSPICIOUS OCCASION OF
      </motion.p>

      <motion.h1
        className="text-[#bb595a] text-3xl sm:text-5xl font-bold mt-4 mb-2"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        WEDDING CEREMONY
      </motion.h1>

      <motion.p
        className="text-green-800 text-lg sm:text-xl font-semibold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        OF
      </motion.p>

      <motion.h2
        className="text-[#bb595a] text-3xl sm:text-4xl font-bold"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        HALIMA
      </motion.h2>

      <motion.p
        className="text-green-800 text-md sm:text-lg mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        D/O Mr. & Mrs. Ahmed
      </motion.p>

      <motion.h2
        className="text-[#bb595a] text-3xl sm:text-4xl font-bold mt-6"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        YUNUS
      </motion.h2>

      <motion.p
        className="text-green-800 text-md sm:text-lg mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        S/O Mr. & Mrs. Kareem
      </motion.p>
    </motion.div>

    <motion.div className="absolute bottom-0 left-0 mb-4 -ml-5">
      <img src={couple} alt="Couple" style={{ width: '225px', height: '250px' }} />
    </motion.div>

  </motion.div>
)}



{step === 2 && (
  <motion.div
    className="absolute top-0 left-0 w-full h-auto min-h-screen"
    style={{
      backgroundImage: `url(${white})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      className="-mt-10 left-0 w-full h-auto"
      style={{
        height: "35vh",
        backgroundImage: `url(${top})`,
        backgroundSize: "cover",
      }}
    />

    <motion.h1
      className="text-[#bb595a] text-3xl sm:text-5xl font-bold -mt-5 mb-2 text-center"
      style={{ fontFamily: "'Dancing Script', cursive" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0 }}
    >
      SAVE THE DATE
    </motion.h1>

    <div className="grid grid-cols-7 gap-2 w-11/12 mx-auto bg-white rounded-lg p-4 shadow-lg">
      <h1 className="text-green-800 text-xl sm:text-3xl font-bold col-span-7 text-center">
        2024, AUGUST
      </h1>
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
        <div key={day} className="text-center font-bold text-lg text-gray-600">
          {day}
        </div>
      ))}

      {Array.from({ length: 31 }, (_, index) => {
        const date = index + 1;
        const isHighlighted = [24, 25, 26, 27].includes(date);

        return (
          <div
            key={date}
            className={`flex items-center justify-center h-11 w-11 ${
              isHighlighted
                ? "relative rounded-full border-2 border-[#bb595a] bg-[#bb595a] text-white"
                : "border border-gray-200 text-gray-600"
            }`}
          >
            <span
              className={`text-lg font-medium ${
                isHighlighted ? "text-white" : "text-gray-600"
              }`}
            >
              {date}
            </span>
          </div>
        );
      })}
    </div>

    <motion.div className="absolute bottom-0 left-0 mb-4 -ml-5">
      <img src={couple1} alt="Couple" style={{ width: '250px', height: '250px' }} />
    </motion.div>
  </motion.div>
)}

{step === 3 && (
  <motion.div
    className="absolute top-0 left-0 w-full h-auto min-h-screen"
    style={{
      backgroundImage: `url(${white})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      className="-mt-10 left-0 w-full h-auto"
      style={{
        height: "75vh",
        backgroundImage: `url(${top2})`,
        backgroundSize: "cover",
      }}
    />

<div className="-mt-64 text-center mx-auto z-10">
  <p className="text-[#b0044c] text-lg sm:text-xl font-semibold mb-4">
    TOGETHER WITH THEIR FAMILIES
  </p>

  <h2
    className="text-[#d07624] text-3xl sm:text-4xl font-bold"
    style={{ fontFamily: "'Dancing Script', cursive" }}
  >
    HALIMA & 
  </h2>

  <h2
    className="text-[#d07624] text-3xl sm:text-4xl font-bold mt-1"
    style={{ fontFamily: "'Dancing Script', cursive" }}
  >
    YUNUS
  </h2>

  <p className="text-[#b0044c] text-lg sm:text-xl font-semibold mt-4">
    INVITE YOU TO CELEBRATE THEIR
  </p>

  <h2
    className="text-[#d07624] text-3xl sm:text-4xl font-bold mt-4 mb-2"
    style={{ fontFamily: "'Dancing Script', cursive" }}
  >
    HALDI CEREMONY
  </h2>

  <p className="text-[#b0044c] text-lg sm:text-xl font-semibold mt-4">
    ON
  </p>

  <motion.p
    className="text-[#3c3aa5] text-lg sm:text-xl font-semibold mt-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    24 August 2024 | 7:00 PM
  </motion.p>

  <motion.p
    className="text-[#2d6a4f] text-lg sm:text-xl font-semibold mt-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1 }}
  >
    ABC Hall, Lahore
  </motion.p>
</div>

<motion.div
  className="absolute bottom-0 right-0 mb-4 -ml-5"
  animate={{
    y: [0, -10, 0], 
    x: [0, 5, 0],  
  }}
  transition={{
    duration: 3,
    repeat: Infinity, 
    repeatType: "mirror", 
  }}
>
  <img
    src={dolki}
    alt="Couple"
    style={{ width: "200px", height: "200px" }}
  />
</motion.div>

    <motion.div className="absolute bottom-0 left-0 mb-4 -ml-5">
      <img src={haldiImage} alt="Couple" style={{ width: '230px', height: '230px' }} />
    </motion.div>
  </motion.div>
)}

{step === 4 && (
  <motion.div
    className="absolute top-0 left-0 w-full h-auto min-h-screen"
    style={{
      backgroundImage: `url(${white})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      className="-mt-10 left-0 w-full h-auto"
      style={{
        height: "75vh",
        backgroundImage: `url(${top2})`,
        backgroundSize: "cover",
      }}
    />

<div className="-mt-64 text-center mx-auto z-10">
  <p className="text-[#b0044c] text-lg sm:text-xl font-semibold mb-4">
    TOGETHER WITH THEIR FAMILIES
  </p>

  <h2
    className="text-[#d07624] text-3xl sm:text-4xl font-bold"
    style={{ fontFamily: "'Dancing Script', cursive" }}
  >
    HALIMA & 
  </h2>

  <h2
    className="text-[#d07624] text-3xl sm:text-4xl font-bold mt-1"
    style={{ fontFamily: "'Dancing Script', cursive" }}
  >
    YUNUS
  </h2>

  <p className="text-[#b0044c] text-lg sm:text-xl font-semibold mt-4">
    INVITE YOU TO CELEBRATE THEIR
  </p>

  <h2
    className="text-[#d07624] text-3xl sm:text-4xl font-bold mt-4 mb-2"
    style={{ fontFamily: "'Dancing Script', cursive" }}
  >
    DHOLKI CEREMONY
  </h2>

  <p className="text-[#b0044c] text-lg sm:text-xl font-semibold mt-4">
    ON
  </p>

  <motion.p
    className="text-[#3c3aa5] text-lg sm:text-xl font-semibold mt-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    25 August 2024 | 7:00 PM
  </motion.p>

  <motion.p
    className="text-[#2d6a4f] text-lg sm:text-xl font-semibold mt-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1 }}
  >
    ABC Hall, Lahore
  </motion.p>
</div>

<motion.div
  className="absolute bottom-0 right-0 mb-4 -ml-5"
  animate={{
    y: [0, -10, 0], 
    x: [0, 5, 0],  
  }}
  transition={{
    duration: 3,
    repeat: Infinity, 
    repeatType: "mirror", 
  }}
>
  <img
    src={drumImage}
    alt="Couple"
    style={{ width: "180px", height: "200px" }}
  />
</motion.div>

    <motion.div className="absolute bottom-0 left-0 mb-4 -ml-5">
      <img src={dholkiImage} alt="Couple" style={{ width: '230px', height: '230px' }} />
    </motion.div>
  </motion.div>
)}

{step === 5 && (
  <motion.div
    className="absolute top-0 left-0 w-full h-auto min-h-screen"
    style={{
      backgroundImage: `url(${white})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      className="-mt-10 left-0 w-full h-auto"
      style={{
        height: "75vh",
        backgroundImage: `url(${top})`,
        backgroundSize: "cover",
      }}
    />

<div className="-mt-64 text-center mx-auto z-10">
  <p className="text-green-800 text-lg sm:text-xl font-semibold mb-4">
    TOGETHER WITH THEIR FAMILIES
  </p>

  <h2
    className="text-[#bb595a] text-3xl sm:text-4xl font-bold"
    style={{ fontFamily: "'Dancing Script', cursive" }}
  >
    HALIMA & 
  </h2>

  <h2
    className="text-[#bb595a] text-3xl sm:text-4xl font-bold mt-1"
    style={{ fontFamily: "'Dancing Script', cursive" }}
  >
    YUNUS
  </h2>

  <p className="text-green-800 text-lg sm:text-xl font-semibold mt-4">
    INVITE YOU TO CELEBRATE THEIR
  </p>

  <h2
    className="text-[#bb595a] text-3xl sm:text-4xl font-bold mt-4 mb-2"
    style={{ fontFamily: "'Dancing Script', cursive" }}
  >
    MEHNDI CEREMONY
  </h2>

  <p className="text-green-800 text-lg sm:text-xl font-semibold mt-4">
    ON
  </p>

  <motion.p
    className="text-[#3c3aa5] text-lg sm:text-xl font-semibold mt-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    26 August 2024 | 7:00 PM
  </motion.p>

  <motion.p
    className="text-[#2d6a4f] text-lg sm:text-xl font-semibold mt-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1 }}
  >
    ABC Hall, Lahore
  </motion.p>
</div>

<motion.div
  className="absolute bottom-0 right-0 mb-4"
  animate={{
    x: ["100%", "-20%"],
  }}
  transition={{
    duration: 6, 
    repeat: Infinity, 
    ease: "linear", 
  }}
>
  <img
    src={mehndiImage2}
    alt="Couple"
    style={{ width: "180px", height: "180px" }}
  />
</motion.div>


    <motion.div className="absolute bottom-0 left-0 mb-4 -ml-5">
      <img src={mehndiImage} alt="Couple" style={{ width: '230px', height: '230px' }} />
    </motion.div>
    <motion.div className="absolute bottom-0 left-3 mb-4 -ml-5">
      <img src={drum} alt="" style={{ width: '70px', height: '70px' }} />
    </motion.div>
  </motion.div>
)}

{step === 6 && (
  <motion.div
    className="absolute top-0 left-0 w-full h-auto min-h-screen"
    style={{
      backgroundImage: `url(${white})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      className="-mt-56 left-0 w-full h-auto"
      style={{
        height: "65vh",
        backgroundImage: `url(${topRed})`,
        backgroundSize: "cover",
      }}
    />
    

<div className="-mt-5 text-center mx-auto z-10">
  <p className="text-green-800 text-lg sm:text-xl font-semibold mb-4">
    TOGETHER WITH THEIR FAMILIES
  </p>

  <h2
    className="text-[#bb595a] text-3xl sm:text-4xl font-bold"
    style={{ fontFamily: "'Dancing Script', cursive" }}
  >
    HALIMA & 
  </h2>

  <h2
    className="text-[#bb595a] text-3xl sm:text-4xl font-bold mt-1"
    style={{ fontFamily: "'Dancing Script', cursive" }}
  >
    YUNUS
  </h2>

  <p className="text-green-800 text-lg sm:text-xl font-semibold mt-4">
    INVITE YOU TO CELEBRATE THEIR
  </p>

  <h2
    className="text-[#bb595a] text-3xl sm:text-4xl font-bold mt-4 mb-2"
    style={{ fontFamily: "'Dancing Script', cursive" }}
  >
    WEDDING CEREMONY
  </h2>

  <p className="text-green-800 text-lg sm:text-xl font-semibold mt-4">
    ON
  </p>

  <motion.p
    className="text-[#3c3aa5] text-lg sm:text-xl font-semibold mt-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    27 August 2024 | 7:00 PM
  </motion.p>

  <motion.p
    className="text-[#2d6a4f] text-lg sm:text-xl font-semibold mt-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1 }}
  >
    ABC Hall, Lahore
  </motion.p>
</div>

    <motion.div className="absolute bottom-0 -left-56 -mb-8">
      <img src={couple2} alt="Couple" style={{ width: '230px', height: '265px' }} />
    </motion.div>

    <motion.div className="absolute bottom-0 right-0  mb-0">
      <img src={plants} alt="Couple" style={{width: '230px', height: '350px' }} />
    </motion.div>

  </motion.div>
)}

{step === 7 && (
        <motion.div className="bg-slate-950 absolute top-0 left-0 w-full h-auto min-h-screen">
          <motion.div
            className="mt-0 left-0 w-full h-auto"
            style={{
              height: "45vh",
              backgroundImage: `url(${topLights1})`,
              backgroundSize: "cover",
            }}
          />
          <div className="flex flex-col items-center justify-center -mt-10">
            <h2 className="text-white text-xl font-bold mb-4">Scan the QR Code</h2>
            <QRCodeCanvas
  value={qrCodeData}
  size={200}
  bgColor={"#ffffff"}
  fgColor={"#000000"}
  className="shadow-lg"
/>
            <p className="text-white mt-4">Get Venue and Event Details</p>
          </div>
        </motion.div>
      )}


      <motion.div
  className="absolute bottom-4 right-4 lg:right-80 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-50 block"
  onClick={nextStep}
>
  <FaArrowAltCircleDown size={40} color="#bb595a" />
</motion.div>




        
      </AnimatePresence>
    </div>
  );
};

export default WeddingInvitation;



