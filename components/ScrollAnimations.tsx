'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollAnimations() {
  const pathname = usePathname()

  useEffect(() => {
    // Inject CSS once
    const styleId = 'valoris-reveal-styles'
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style')
      style.id = styleId
      style.textContent = `
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `
      document.head.appendChild(style)
    }

    // Wait for DOM to settle after route change
    const timeout = setTimeout(() => {
      const elements = Array.from(document.querySelectorAll('.reveal'))

      if (elements.length === 0) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
      )

      elements.forEach((el) => {
        el.classList.remove('visible')
        observer.observe(el)
      })

      return () => observer.disconnect()
    }, 80)

    return () => clearTimeout(timeout)
  }, [pathname])

  return null
}
