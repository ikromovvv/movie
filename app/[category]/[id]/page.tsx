import MovieDetailPage from "@/pages/movie-detail";

export default function MovieDetail({ params } : any) {

    return params ? <MovieDetailPage params={params} /> : "loading";
}