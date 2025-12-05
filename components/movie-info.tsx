"use client"

import type { Movie } from "@/store/slices/moviesSlice"
import { Calendar, Clock, Star, User } from "lucide-react"
import {useRouter} from "next/navigation";

export default function MovieInfo({ movie }: { movie: Movie }) {


  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-12">
      <div onClick={() => router.back()} className={"w-fit mb-[10px] cursor-pointer border-2  px-2 py-1 rounded-[7px] flex gap-1 items-center active:scale-95 "}>
        Ortga
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left Column - Poster */}
        <div className="md:col-span-1">
          <img src={movie.poster || "/placeholder.svg"} alt={movie.title} className="w-full rounded-lg shadow-2xl" />
        </div>

        {/* Right Column - Details */}
        <div className="md:col-span-2 space-y-5">
          <div>
            <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
            <p className=" text-accent font-semibold text-[18px]">{movie.category}</p>
          </div>

          {/* Rating and Year */}
          <div className="flex flex-wrap gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Star size={20} className="text-yellow-400" />
              <span className="font-semibold">{movie.rating}/10</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-primary" />
              <span className="font-semibold">{movie.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-primary" />
              <span className="font-semibold">{movie.duration}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-[18px] font-bold mb-3">Overview</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">{movie.description}</p>
          </div>

          {/* Director */}
          <div>
            <h3 className="text-[18px] font-bold mb-2 flex items-center gap-2">
              <User size={20} />
              Director
            </h3>
            <p className="text-lg">{movie.director}</p>
          </div>

          {/* Cast */}
          <div>
            <h3 className="text-[18px] font-bold mb-3">Cast</h3>
            <div className="flex flex-wrap gap-2">
              {movie.cast.map((actor, index) => (
                <span key={index} className="px-3 py-1 bg-card border border-border rounded-lg text-foreground text-[16px]">
                  {actor}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {/*<button className="w-[100px] h-[40px] text-[13px] bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:opacity-90 transition-opacity active:scale-95">*/}
            {/*  Watch Now*/}
            {/*</button>*/}
            <button className=" w-[150px] h-[40px] text-[13px] bg-card text-foreground border border-border rounded-lg font-bold text-lg hover:border-primary transition-colors active:scale-95">
              Add to Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
