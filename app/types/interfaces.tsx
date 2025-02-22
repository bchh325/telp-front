import { ViewToken } from "react-native"

export interface UserSignUpParams {
    email: string,
    password: string,
    passwordConfirm: string
}

export interface UserSignInParams {
    email: string,
    password: string
}

export interface PaginationQueryParams {
    placeId: string, 
    documentIdKeyCursor: string, 
    querySize: number
    isRefresh?: boolean
}

export interface ExtendedViewTokens extends ViewToken {
    viewableItems: any[],
}

export interface PaginationResponse {
    urls: string[],
    documentIdStartKey: string,
    documentIdRefreshKey: string,
}