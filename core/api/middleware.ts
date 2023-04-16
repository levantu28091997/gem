const excludeAuthenApi: any = []
const authToken = async (requestConfig: any) => {
    let authToken = null
    const { url, notAuth } = requestConfig
    if (excludeAuthenApi.includes(url) || notAuth) {
        return requestConfig
    }
    // requestConfig.headers.Authorization = `Bearer ${authToken?.access_token}`
    requestConfig.headers.Authorization =
    localStorage.getItem('access_token') ?? ''

    // if (
    //   requestConfig.url.indexOf("auth") == -1 &&
    //   requestConfig.headers.Authorization == ""
    // ) {
    //   location.href = "/auth/login";
    // }

    return requestConfig
}

export const globalApiMiddleware = {
    auth: authToken,
}
