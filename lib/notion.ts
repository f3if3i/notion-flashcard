import { request } from "../utils/request"

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT

type DBIDDataType = {
	database_id: string
}

export default class notion {
    static retrieveUser(data: DBIDDataType) {
        return request ({
            url: `${API_ENDPOINT}/user`,
            method: "POST",
            data
        })
    }

    static queryDatabase(data: DBIDDataType) {
        return request ({
            url: `${API_ENDPOINT}/database`,
            method: "POST",
            data
        })
    }
}