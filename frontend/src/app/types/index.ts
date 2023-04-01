// TODO: ver country, Biography. Omitir password
export interface IUser {
  // id: string
  firstName: string
  email: string
  role?: string
  country: string
  Biography?: string
}

export interface INewUser extends IUser {
  password: string
}
