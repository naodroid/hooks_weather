import { REFUSED } from "dns";

export default class Result<T> {
    result: T | null
    error: Error | null

    private constructor(r: T | null, e: Error | null) {
        this.result = r
        this.error = e
    }

    static success<T>(r: T): Result<T> {
        return new Result<T>(r, null)
    }
    static error<T>(e: Error): Result<T> {
        return new Result<T>(null, e)
    }
    static empty<T>() : Result<T> {
        return new Result<T>(null, null)
    }
}