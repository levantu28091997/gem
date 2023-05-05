import moment from 'moment'

class BaseModel {
    created_at: string
    constructor() {
        this.created_at = moment().format()
    }
}
export default BaseModel
