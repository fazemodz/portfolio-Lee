import React, { useEffect, useRef } from 'react'
import TypeIt from 'typeit'

export default function Banner() {
  const headingRef = useRef(null)
  const descriptionRef = useRef(null)

  useEffect(() => {
    // Animate the heading
    new TypeIt(headingRef.current, {
      strings: ["Hello! I'm Lee"],
      speed: 100,
      waitUntilVisible: true,
      cursor: {
        char: "|",
        speed: 1000
      },
      afterComplete: function() {
        // Remove cursor after heading animation completes
        setTimeout(() => {
          const cursor = headingRef.current.querySelector('.ti-cursor')
          if (cursor) {
            cursor.style.display = 'none'
          }
        }, 1000)
      }
    }).go()

    // Animate the description after heading completes
    setTimeout(() => {
      new TypeIt(descriptionRef.current, {
        strings: ["I'm a London based BSc (Hons) student specializing in Games Development."],
        speed: 30,
        cursor: {
          char: "|",
          speed: 1000
        },
        afterComplete: function() {
          // Remove cursor after description animation completes
          setTimeout(() => {
            const cursor = descriptionRef.current.querySelector('.ti-cursor')
            if (cursor) {
              cursor.style.display = 'none'
            }
          }, 1000)
        }
      }).go()
    }, 2000) // Start description 2 seconds after heading starts

  }, [])

  return (
    <section className="bg-gray-900 text-white" id="aboutme">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            ref={headingRef}
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
          </h1>

          <p 
            ref={descriptionRef}
            className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed"
          >
          </p>

        </div>
      </div>
       
      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl px-8 py-6 border border-gray-700">
          <p className="text-gray-300 text-base mb-3">Scroll to see some of my projects</p>
          <div className="flex justify-center">
            <svg 
              className="w-7 h-7 text-gray-400 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
