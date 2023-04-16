/* eslint-disable no-prototype-builtins */
/* eslint-disable camelcase */

import { get } from 'lodash'
import has from 'lodash/has'
import { createInstance } from './axios'

import BaseFactory from './Factory'

import { globalApiMiddleware } from './middleware'

export const DEFAULT_RESPONSE = {
    content: [],
    data: [],
    total: 0,
    page: 1,
    per_page: 10,
}
class BaseService {
    withTranslate(withTranslate: any) {
        throw new Error('Method not implemented.')
    }
    BASE_URL: any = process.env.BASE_URL

    BASE_ENDPOINT = '/api/'

    DEFAULT_RESPONSE = DEFAULT_RESPONSE

    DEFAULT_PAGE = 1

    DEFAULT_LIMIT = 10

    DEFAULT_SORT = 'updated_at desc'

    ALL_ITEMS = 10000

    APPLY_MIDDLEWARE: any = {
        ...globalApiMiddleware,
    }

    pimaryKey = 'id'

    factory = {}

    fakeData = []

    mockApi = {}

    allowTranslateFields = []

    allowScoreCompany = false
    request: any
    paramsGet: { page: number; per_page: number; sort: string } | undefined

    constructor(props: {
    BASE_URL: string;
    BASE_ENDPOINT: string;
    APPLY_MIDDLEWARE: { auth: (requestConfig: any) => Promise<any> };
  }) {
        if (has(props, 'BASE_URL')) {
            this.BASE_URL = props.BASE_URL
        }

        if (has(props, 'BASE_ENDPOINT')) {
            this.BASE_ENDPOINT = props.BASE_ENDPOINT
        }

        if (has(props, 'APPLY_MIDDLEWARE')) {
            this.APPLY_MIDDLEWARE = props.APPLY_MIDDLEWARE
        }

        this.setRequest()
    }

    setRequest() {
        this.request = createInstance(this.BASE_URL, this.middleware)
        this.paramsGet = {
            page: this.DEFAULT_PAGE,
            per_page: this.DEFAULT_LIMIT,
            sort: this.DEFAULT_SORT,
            // sort : this.DEFAULT_SORT,
        }
    }

    /**
   * Set a custom middleware
   * @param {string} name
   * @param {(request) => {}} callback
   */
    setApplyMiddleware = (name: string | number, callback: any) => {
        this.APPLY_MIDDLEWARE[name] = callback
    }

    createFactory = (factory: any) => {
        if (factory instanceof BaseFactory) {
            this.factory = factory.createModel
            this.fakeData = factory.getData()
        } else {
            this.factory = factory
        }
    }

    // makeFakeData = (...lens: any[]) => {
    //   const makeDataLevel = (depth = 0) => {
    //     const len = lens[depth];
    //     return Array.from(new Array(len)).map((d, index) => {
    //       return {
    //         ...this.factory(index),
    //         subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
    //       };
    //     });
    //   };
    //   this.fakeData = makeDataLevel();
    //   return this;
    // };

    /**
   * Apply middleware request instance axios
   * @param {requestConfig : axios} requestConfig
   */
    middleware = (requestConfig: any) => {
        const arr = Object.values(this.APPLY_MIDDLEWARE).map((m) => {
            if (typeof m === 'function') {
                return m(requestConfig)
            }
            return m
        })
        return arr
    }

    /**
   * Get all resource for paginate
   * @param {}
   * @returns
   */
    list = (query = {}, config = {}) => {
        const params = { ...this.paramsGet, ...query }
        return this.request.get(this.BASE_ENDPOINT, { params, ...config })
    }

    /**
   * Get specific of resource
   * @param {int} id
   * @param {object} config
   * @returns
   */
    find = (id: number | string, config = {}) => {
        const api = `${this.BASE_ENDPOINT}/${id}`
        return this.request.get(api, config)
    }

    /**
   * Store a newly created resource in storage.
   * @param {object} data
   * @param {object} config
   * @returns
   */
    create = (data = {}, config = {}) => {
        return this.request.post(this.BASE_ENDPOINT, data, config)
    }

    /**
   * Update the specified resource in storage.
   * @param {object} data
   * @param {object} config
   * @returns
   */
    update = (data: any = {}, config = {}) => {
        const { pimaryKey } = this
        return this.request.patch(
            `${this.BASE_ENDPOINT}/${data[pimaryKey]}`,
            data,
            config
        )
    }

    save = (data: any = {}, config = {}) => {
        const { pimaryKey } = this
        if (data.hasOwnProperty(pimaryKey) && data[pimaryKey]) {
            return this.update(data, config)
        }
        return this.create(data, config)
    }

    /**
   * Remove the specified resource from storage.
   * @param {int} id
   * @param {object} config
   * @returns
   */
    delete = (id: number | string, config = {}) => {
        const api = `${this.BASE_ENDPOINT}/${id}`
        return this.request.delete(api, config)
    }
}
export default BaseService
