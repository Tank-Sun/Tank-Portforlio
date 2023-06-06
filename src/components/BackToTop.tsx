import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, []);


  return (
    <>
      {isVisible && (
        <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8">
          <button
            type="button"
            onClick={scrollToTop}
            className='text-pink-400 focus:text-yellow-300'
          >
            <FontAwesomeIcon icon={faShuttleSpace} className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl' rotation={270}/>
          </button>
        </div>
      )}
    </>
  )
}

export default BackToTop