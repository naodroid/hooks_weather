import {useState, useEffect} from 'react'
import { JsonConvert } from 'json2typescript';
import Result from '../entity/Result';
import { request } from 'https';

export type HttpResult = any | Error | null


//experimental implementation, create http-request with Hooks
export function useGetRequest<T>(url: string | null, classReference: any): Result<T> {
    const [result, setResult] = useState(Result.empty<T>())

    useEffect(() => {
        if (url && url.length > 0) {
            const request = new XMLHttpRequest()
            request.open("GET", url)
            request.onreadystatechange = () => {
                if (request.readyState == XMLHttpRequest.DONE) {
                    const j = JSON.parse(request.response)
                    const c = new JsonConvert()
                    const r: T = c.deserialize(j, classReference)
                    setResult(Result.success<T>(r))
                }
            }
            request.onerror = () => {
                const e = new Error()
                setResult(Result.error<T>(e))
            }
            request.send()
        } else {
            setResult(Result.empty<T>())
        }
    }, [url])

    return result
}
export function useGetRequestDummy<T>(json: any | null, classReference: any): Result<T> {
    const [result, setResult] = useState(Result.empty<T>())

    useEffect(() => {
        const t = setTimeout(() => {
            setResult(json)
        }, 1000)
    }, [json])

    return result
}

//promise pattern
export function getRequest(url: string) : Promise<HttpResult> {
    return new Promise((resolve, rejected) => {
        const request = new XMLHttpRequest()
        request.open("GET", url)
        request.onreadystatechange = () => {
            if (request.readyState == XMLHttpRequest.DONE) {
                resolve(JSON.parse(request.response))
            }
        }
        request.onerror = () => {
            rejected(new Error())
        }
        request.send()
    })
}

export function getRequestDummy(json: any): Promise<HttpResult> {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve(json)
        }, 1000)
    })
}

