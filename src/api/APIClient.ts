import React, {useState, useEffect} from 'react'

export type HttpResult = any | Error | null

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

