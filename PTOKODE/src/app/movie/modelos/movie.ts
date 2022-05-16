export interface Movie {
    data: ReqMovie;
}

interface ReqMovie {
    id: number,
    overview: string,
    poster_path: string,
    title: string
}
