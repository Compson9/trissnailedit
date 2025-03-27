"use client"

import { useState, useEffect, useCallback } from "react"

interface TypewriterProps {
  texts: string[]
  delay?: number
  deleteSpeed?: number
  typeSpeed?: number
  className?: string
}

export default function Typewriter({
  texts,
  delay = 2000,
  deleteSpeed = 50,
  typeSpeed = 75,
  className = "",
}: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const handleTyping = useCallback(() => {
    const currentFullText = texts[currentTextIndex]

    // If deleting
    if (isDeleting) {
      setCurrentText((prev) => prev.substring(0, prev.length - 1))

      // When done deleting, move to typing mode and next text
      if (currentText === "") {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }
    }
    // If typing
    else {
      setCurrentText((prev) => currentFullText.substring(0, prev.length + 1))

      // When done typing, wait and then start deleting
      if (currentText === currentFullText) {
        setTimeout(() => {
          setIsDeleting(true)
        }, delay)
      }
    }
  }, [currentText, currentTextIndex, delay, isDeleting, texts])

  useEffect(() => {
    const timer = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : currentText === texts[currentTextIndex] ? delay : typeSpeed,
    )

    return () => clearTimeout(timer)
  }, [currentText, currentTextIndex, delay, deleteSpeed, handleTyping, isDeleting, texts, typeSpeed])

  return (
    <span className={className}>
      {currentText}
      <span className="inline-block w-[0.1em] h-[1.2em] ml-1 bg-white animate-blink"></span>
    </span>
  )
}



