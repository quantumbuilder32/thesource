"use client"

import React, { useRef } from 'react'

const svgProfiles = [
  <svg key={1} style={{ width: "3rem", fill: "#fff" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" /></svg>,

  <svg key={2} style={{ width: "3rem", fill: "#fff" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
]

const soothingColors = [
  '#E0A90E',
  '#0E7BE0',
  '#7CE00E',
  '#E00E58',
  '#FF8800',
  '#009688',
  '#9C27B0',
  '#607D8B',
  '#FF5722',
  '#795548',
];

export default function DefaultImage() {
  const randomR = useRef(Math.floor(Math.random() * 256))
  const randomG = useRef(Math.floor(Math.random() * 256))
  const randomB = useRef(Math.floor(Math.random() * 256))
  const randomSVGChoice = useRef(Math.floor(Math.random() * svgProfiles.length))
  const randomColorChoice = useRef(Math.floor(Math.random() * soothingColors.length))


  return (
    <div style={{ backgroundColor: `${soothingColors[randomColorChoice.current]}`, width: "100%", height: "100%", display: "grid", alignItems: "center", justifyItems: "center" }}>
      {svgProfiles[randomSVGChoice.current]}
    </div>
  )
}
