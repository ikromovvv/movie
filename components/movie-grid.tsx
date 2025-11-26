"use client"

import {useDispatch, useSelector} from "react-redux"
import { setCurrentMovie } from "@/store/slices/moviesSlice"
import type { Movie } from "@/store/slices/moviesSlice"
import { Play } from "lucide-react"
import {RootState} from "@/store/store";
import {useRouter} from "next/navigation";


export default function MovieGrid() {
  const dispatch = useDispatch()
  const { movies } = useSelector((state: RootState) => state.movies)

  const router = useRouter();
  const category = localStorage.getItem("activeMenuItem");

  console.log(category, "category")
  const handleMovieClick = (movie: Movie) => {
    dispatch(setCurrentMovie(movie))
    if (category === null || category === undefined || category === "/") {
      router.push(`/home/${movie.id}`)
    }else {
      router.push(`/${category}/${movie.id}`)
    }

  }

  if (movies.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl text-muted-foreground">No movies found. Try a different search!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-[20px]">
      {movies.map((movie) => (
        <div
          key={movie.id}
          onClick={() => handleMovieClick(movie)}
          className="group relative cursor-pointer overflow-hidden rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
        >
          {/* Movie Thumbnail */}
          <div className="relative w-full h-64 overflow-hidden">
            <img
              src={movie.thumbnail || "/placeholder.svg"}
              alt={movie.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="p-3 bg-primary rounded-full hover:bg-primary/90 transition-colors">
              <Play size={28} className="text-primary-foreground fill-primary-foreground" />
            </button>
          </div>

          {/* Movie Info */}
          <div className="p-4 space-y-2">
            <h3 className="font-bold text-lg text-balance line-clamp-2">{movie.title}</h3>
            <div className="flex items-center justify-between text-sm">
              <span className="text-accent font-semibold">{movie.category}</span>
              <span className="text-yellow-400">★ {movie.rating}</span>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">{movie.description}</p>
          </div>
        </div>
      ))}{movies.map((movie) => (
        <div
          key={movie.id}
          onClick={() => handleMovieClick(movie)}
          className="group relative cursor-pointer overflow-hidden rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
        >
          {/* Movie Thumbnail */}
          <div className="relative w-full h-64 overflow-hidden">
            <img
              src={movie.thumbnail || "/placeholder.svg"}
              alt={movie.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="p-3 bg-primary rounded-full hover:bg-primary/90 transition-colors">
              <Play size={28} className="text-primary-foreground fill-primary-foreground" />
            </button>
          </div>

          {/* Movie Info */}
          <div className="p-4 space-y-2">
            <h3 className="font-bold text-lg text-balance line-clamp-2">{movie.title}</h3>
            <div className="flex items-center justify-between text-sm">
              <span className="text-accent font-semibold">{movie.category}</span>
              <span className="text-yellow-400">★ {movie.rating}</span>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">{movie.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
