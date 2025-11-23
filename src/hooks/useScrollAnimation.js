import { useEffect, useRef } from 'react'
import AOS from 'aos'

export const useScrollAnimation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50
    })

    return () => {
      AOS.refresh()
    }
  }, [])
}

export default useScrollAnimation
