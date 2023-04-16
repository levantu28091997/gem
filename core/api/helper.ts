interface requestUrl {
  url: string;
}

export const checkRequestUrl = (path: string = '') => {
    const pathResult =
    typeof path === 'string'
        ? new RegExp(path.replace(/:\w+/g, '[^/]+'))
        : path
    return pathResult
}

export const extractIdPathParamFromUrl = (request: requestUrl) => {
    return request.url.split('/').pop()
}

export const paginate = (
    json: string | any[],
    params: { page: any; size: any; all: any }
) => {
    const pageNumber = Number(params?.page) ?? 1
    const pageSize = Number(params?.size) ?? 10
    const getAll = params?.all

    if (getAll === 'true') {
        return json
    }
    if (!pageNumber && !pageSize) {
        return json
    }
    const data: any = {}
    const minIndex = (pageNumber - 1) * pageSize
    const maxIndex = pageNumber * pageSize
    const totalRecords = json.length
    data.data = json.slice(minIndex, maxIndex)
    data.page = pageNumber
    data.size = pageSize
    data.total = totalRecords
    data.total_pages = Math.ceil(totalRecords / pageSize)
    return data
}
