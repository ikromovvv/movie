import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface Movie {
  id: string
  title: string
  category: string
  thumbnail: string
  poster: string
  description: string
  year: number
  rating: number
  duration: string
  videoUrl: string
  director: string
  cast: string[]
}

interface MoviesState {
  movies: Movie[]
  currentMovie: Movie | null
}

const initialMovies: Movie[] = [
  {
    id: "1",
    title: "Neon Dreams",
    category: "Action",
    thumbnail: "/neon-action-movie-poster.jpg",
    poster: "/neon-dreams-movie-poster.jpg",
    description: "A thrilling action-packed adventure through neon-lit cyberpunk cities.",
    year: 2024,
    rating: 8.5,
    duration: "2h 15m",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    director: "Alex Turner",
    cast: ["Actor 1", "Actor 2", "Actor 3"],
  },
  {
    id: "2",
    title: "Midnight Echo",
    category: "Thriller",
    thumbnail: "/thriller-dark-movie-poster.jpg",
    poster: "/midnight-echo-poster.jpg",
    description: "A gripping psychological thriller that will keep you on the edge.",
    year: 2024,
    rating: 8.2,
    duration: "1h 58m",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    director: "Sarah Chen",
    cast: ["Actor 4", "Actor 5", "Actor 6"],
  },
  {
    id: "3",
    title: "Cosmic Journey",
    category: "Sci-Fi",
    thumbnail: "/sci-fi-space-movie-poster.png",
    poster: "/cosmic-journey-space-poster.jpg",
    description: "Explore the vast universe in this epic science fiction masterpiece.",
    year: 2024,
    rating: 8.7,
    duration: "2h 30m",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    director: "James Wilson",
    cast: ["Actor 7", "Actor 8", "Actor 9"],
  },
  {
    id: "4",
    title: "Heart Strings",
    category: "Drama",
    thumbnail: "/drama-romance-movie-poster.jpg",
    poster: "/heart-strings-drama-poster.jpg",
    description: "An emotional journey of love, loss, and redemption.",
    year: 2023,
    rating: 8.0,
    duration: "2h 5m",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    director: "Emma Davis",
    cast: ["Actor 10", "Actor 11", "Actor 12"],
  },
  {
    id: "5",
    title: "Laugh Out Loud",
    category: "Comedy",
    thumbnail: "/comedy-funny-movie-poster.jpg",
    poster: "/laugh-out-loud-comedy-poster.jpg",
    description: "A hilarious comedy that will make you laugh until you cry.",
    year: 2024,
    rating: 7.9,
    duration: "1h 45m",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    director: "Tom Hardy",
    cast: ["Actor 13", "Actor 14", "Actor 15"],
  },
  {
    id: "6",
    title: "Forest Guardian",
    category: "Adventure",
    thumbnail: "/adventure-fantasy-movie-poster.jpg",
    poster: "/forest-guardian-adventure-poster.jpg",
    description: "An epic adventure in a magical forest filled with wonders.",
    year: 2024,
    rating: 8.3,
    duration: "2h 20m",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    director: "Lisa Anderson",
    cast: ["Actor 16", "Actor 17", "Actor 18"],
  },
]

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: initialMovies,
    currentMovie: null,
  } as MoviesState,
  reducers: {
    setCurrentMovie: (state, action: PayloadAction<Movie | null>) => {
      state.currentMovie = action.payload
    },
  },
})

export const { setCurrentMovie } = moviesSlice.actions
export default moviesSlice.reducer
