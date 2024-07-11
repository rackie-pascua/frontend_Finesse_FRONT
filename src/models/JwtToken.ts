export enum UserRole {
    HR =1,
    Management = 2
}

export type JwtToken = {
    Role: UserRole
}