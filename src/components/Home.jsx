
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Home = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const img = [
    {
      url: '/p1.jpeg',
    },
    {
      url: '/p2.jpeg',
    },
    {
      url: '/p3.jpeg',
    },
    {
      url: '/p4.jpeg',
    },
    {
      url: '/p5.jpeg',
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? img.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === img.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === img.length - 1 ? 0 : prevSlide + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [img.length]);

  return (
    <div>
      <div className='flex flex-wrap h-[100vh] w-full items-center justify-evenly '>
        <div className='flex justify-center items-center'>
          <p className='text-6xl text-blue-800 pl-10 font-semibold'>India's <span className='text-green-400'>#1</span>  <br /> End-to-End <br /> Digital Tipping Platform <br /> For<span className='text-white'>.</span>
            <TypeAnimation
              className='text-green-400' sequence={[
                ' Hotels.', 3000,
                ' Restaurants.', 3000,
                ' Housekeepers.', 3000,
                ' Salons.', 3000,
                ' Bars.', 3000,
              ]}
              wrapper="span"
              speed={200}
              style={{ fontSize: '5xl', display: 'inline-block', }}
              repeat={Infinity}
              duration={200}

            /></p>
        </div>

        <div>

        </div>

        <div className='sm:w-full mr-10 max-w-[500px] h-[400px] relative shadow-xl rounded-3xl shadow-gray-700 '>
          <div
            style={{
              backgroundImage: `url(${img[currentSlide].url})`,
              backgroundSize: 'cover', // Ensures the image covers the entire container
              backgroundPosition: 'center', // Centers the image within the container
              borderRadius: '20px', // Rounded corners for the image container
            }}
            className='sm:h-full w-full rounded-2xl duration-300 flex justify-end'
          ></div>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
            <div onClick={handlePrevSlide}>
              <BsChevronCompactLeft />
            </div>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
            <div onClick={handleNextSlide}>
              <BsChevronCompactRight />
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center '>
        <img className='hover:scale-110 duration-300 ml-56' src="/Revolutionizing-Tipping-Graphic.webp" alt="" />
        <p className='text-3xl text-blue-800 font-semibold mr-56 pb-48'>No <span className='font-semibold'>App</span>  needed, Just your <span className='text-teal-400 font-bold'>Phone</span> </p>
      </div>

      {/* <div className='flex  items-center mb-28'>
        <p className='text-3xl text-blue-800 ml-56 font-semibold'>Fast & simple cashless tipping for <span className='text-teal-400 font-bold'>Hotels</span> <br /> <span className='text-xl'>Attract, retain, and motivate your hardworking <br /> staff while delighting your guests.</span> </p>
        
        <img src="/phone.jpg" className='h-96 ml-48 hover:scale-110 duration-300' alt="" />
      </div> */}


      {/* //hotelgrid */}

    </div>
  )
}

export default Home
