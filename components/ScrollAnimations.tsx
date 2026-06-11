'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Scroll-Reveal (CSS in globals.css → .reveal / .visible)
 * + Count-up für Elemente mit [data-countup].
 */
export default function ScrollAnimations() {
  const pathname = usePathname()

  useEffect(() => {
    const timeout = setTimeout(() => {
      // — Reveal —
      const elements = Array.from(document.querySelectorAll('.reveal'))
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

      // — Count-up —
      const counters = Array.from(document.querySelectorAll<HTMLElement>('[data-countup]'))
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const countObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            const el = entry.target as HTMLElement
            countObserver.unobserve(el)
            const target = parseInt(el.dataset.countup || '0', 10)
            if (reduced || isNaN(target)) {
              el.textContent = String(target)
              return
            }
            const dur = 1400
            const start = performance.now()
            const tick = (now: number) => {
              const p = Math.min((now - start) / dur, 1)
              const eased = 1 - Math.pow(1 - p, 3)
              el.textContent = String(Math.round(target * eased))
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          })
        },
        { threshold: 0.4 }
      )
      counters.forEach((el) => countObserver.observe(el))

      return () => {
        observer.disconnect()
        countObserver.disconnect()
      }
    }, 80)

    return () => clearTimeout(timeout)
  }, [pathname])

  return null
}
