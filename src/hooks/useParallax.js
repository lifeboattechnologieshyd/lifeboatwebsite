import { useEffect, useState } from 'react'

export const useParallax = (ref, speed = 0.5) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const elementTop = rect.top
        const windowHeight = window.innerHeight
        
        if (elementTop < windowHeight && elementTop > -rect.height) {
          setOffset(elementTop * speed)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ref, speed])

  return offset
}

export default useParallax
