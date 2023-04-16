import Axios from 'axios'
import Qs from 'qs'
export const createInstance = (baseUrl = null, middleware: any = () => {}) => {
    const options = {
        baseURL: baseUrl,
        timeout: 30000,
        // TODO:confirm
        // headers: {
        //     'X-Requested-With': 'XMLHttpRequest',
        // },
        withCredentials: false,
        paramsSerializer: {
            serialize: (params: any) =>
                Qs.stringify(params, { arrayFormat: 'brackets' }),
        },
    }

    const instance = Axios.create(options as any)

    instance.interceptors.request.use(
        async (requestConfig) => {
            await Promise.all(middleware(requestConfig))
            return requestConfig
        },
        (requestError) => {
            return Promise.reject(requestError)
        }
    )

    // Add a response interceptor
    instance.interceptors.response.use(
        (response) => {
            const { data } = response
            if (data.errors) {
                return Promise.reject(data)
            }
            if (data.error_msg) {
                return Promise.reject(data)
            }
            if (data?.data && !data?.total && !data?.current_page) {
                return data?.data
            }
            return data
        },
        (error) => {
            return Promise.reject(error)
        }
    )
    return instance
}
