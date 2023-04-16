import BaseModel from './BaseModel'

class BaseFactory {
    factoryModel: any = {}

    data: any = []

    setFactoryModel = (obj = {}) => {
        this.factoryModel = obj
        return this
    }

    createModel = (i: number) => {
        const _newObj: any = new BaseModel()
        _newObj.id = i + 1
        Object.keys(this.factoryModel).map((key) => {
            const value = this.factoryModel[key]
            if (typeof value === 'function') {
                _newObj[key] = value.call(_newObj, i)
            } else {
                _newObj[key] = value
            }

            return key
        })

        return _newObj
    }

    makeData = (...lens: any[]) => {
        const makeDataLevel = (depth = 0) => {
            const len = lens[depth]
            return Array.from(new Array(len)).map((d, index) => {
                return this.createModel(index)
            })
        }
        this.data = makeDataLevel()
        return this
    }

    setData = (data = []) => {
        this.data = data
        return this
    }

    getData = () => {
        return this.data
    }

    belongsTo = (factoryClass: any, foreign_key: any, key_name: any) => {}

    /**
   * @param  {} obj={}
   * @return factory function create a object Model
   */
    extends = (obj: { [x: string]: any }) => {
        return (i: number) => {
            const _newObj: any = new BaseModel()
            _newObj.id = i + 1
            Object.keys(obj).map((key) => {
                const value = obj[key]
                if (typeof value === 'function') {
                    _newObj[key] = value.call(_newObj, i)
                } else {
                    _newObj[key] = value
                }

                return key
            })

            return _newObj
        }
    }
}
export const Factory = new BaseFactory()
export default BaseFactory
