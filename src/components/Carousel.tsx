import React,{useState, useEffect} from 'react'
import Image, { StaticImageData } from 'next/image'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


type CarouselProps = {
  images: {
    url: StaticImageData,
    alt: string
  }[]
};

const Carousel = (props: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = props.images;

  const prevSlide = () => {
    setCurrentIndex((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const autoSlideInterval = 3000;
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className='max-w-[1400px] w-[90%] lg:w-[80%] m-auto pt-8 md:pt-12 md:pb-6 lg:pb-8 xl:pt-16 xl:pb-10 px-4 relative group'>
      <Image src={slides[currentIndex].url} alt={slides[currentIndex].alt} className='w-full h-full bg-center bg-cover rounded-lg md:rounded-xl xl:rounded-2xl shadow-lg shadow-white/50' />
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[45%] md:top-[46%] 2xl:top-[48%] -translate-x-0 translate-y-[-50%] left-6 md:left-8 lg:left-10 text-xl md:text-3xl lg:text-4xl xl:text-5xl rounded-full p-1 md:p-2 2xl:p-2.5 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[45%] md:top-[46%] 2xl:top-[48%] -translate-x-0 translate-y-[-50%] right-6 md:right-8 lg:right-10 text-xl md:text-3xl lg:text-4xl xl:text-5xl rounded-full p-1 md:p-2 2xl:p-2.5 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex: number) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`${slideIndex === currentIndex ? 'text-blue-400 scale-150' : 'text-white'} text-2xl cursor-pointer`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel