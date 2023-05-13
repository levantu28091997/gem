import http from "@/utils/axios"

export const getHotGame = () => {
    return http.get('/games/hot?populate=*')
}