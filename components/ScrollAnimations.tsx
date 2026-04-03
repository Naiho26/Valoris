'use client'
import { useEffect } from 'react'

export default function ScrollAnimations() {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .reveal {
        opacity: 0;
        transform: translateY(28px);
        transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
                    transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .reveal.visible {
        opacity: 1;
        transform: translateY(0);
      }
      .reveal-delay-1 { transition-delay: 0.1s; }
      .reveal-delay-2 { transition-delay: 0.2s; }
      .reveal-delay-3 { transition-delay: 0.3s; }
      .reveal-delay-4 { transition-delay: 0.4s; }
    `
    document.head.appendChild(style)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    // Observe all elements with reveal class
    const observe = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el)
      })
    }

    observe()

    // Re-observe on route changes (small delay for DOM update)
    const timeout = setTimeout(observe, 100)
    return () => {
      clearTimeout(timeout)
      observer.disconnect()
      document.head.removeChild(style)
    }
  }, [])

  return null
}
