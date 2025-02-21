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
}