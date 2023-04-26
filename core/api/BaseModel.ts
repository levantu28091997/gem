import dayjs from 'dayjs'

class BaseModel {
    created_at: string
    constructor() {
        this.created_at = dayjs().format()
    }
}
export default BaseModel
