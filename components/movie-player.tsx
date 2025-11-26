"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"

export default function MoviePlayer({ videoUrl, title }: { videoUrl: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
    setIsMuted(newVolume === 0)
  }

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = volume
        setIsMuted(false)
      } else {
        videoRef.current.volume = 0
        setIsMuted(true)
      }
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen()
    }
  }

  return (
    <div className="relative w-full bg-black aspect-video group sm: p-[5px]">
      <video onClick={togglePlay} ref={videoRef} src={videoUrl} className="w-full h-full" onEnded={() => setIsPlaying(false)} />

      {/* Player Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent sm:p-4 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-3">
          {/* Play Button */}
          <button onClick={togglePlay} className="sm:p-2 p-1 rounded hover:bg-white/20 transition-colors">
            {isPlaying ? <Pause size={24} className="text-white" /> : <Play size={24} className="text-white" />}
          </button>

          {/* Volume Controls */}
          <div className="flex items-center gap-2">
            <button onClick={toggleMute} className="sm:p-2 p-1 rounded hover:bg-white/20 transition-colors">
              {isMuted ? <VolumeX size={20} className="text-white" /> : <Volume2 size={20} className="text-white" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-1 bg-white/30 rounded cursor-pointer"
            />
          </div>

          {/* Title */}
          {/*<span className="ml-auto text-white font-semibold">{title}</span>*/}

          {/* Fullscreen Button */}
          <button onClick={toggleFullscreen} className="sm:p-2 p-1 rounded hover:bg-white/20 transition-colors">
            <Maximize size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
