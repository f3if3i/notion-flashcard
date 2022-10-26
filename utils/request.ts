import axios from "axios"

type RequestProps = {
	url: string,
	method?: string,
	headers?: any,
	data?: any
}

export const request = ({ url, method, headers, data }: RequestProps ,options={})=>{
    return axios(url,{
        method: method||"GET", 
        data, 
        headers: headers || {
            "content-type": "application/json"
        },
        ...options   
    })
}