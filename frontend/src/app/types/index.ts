export interface IUser {
  id: string
  firstName: string
  email: string
  role: string
  gender?: string
  age: number | null
  height: number | null
  weight: number | null
  profileCompleted?: boolean
  googleId?: string
}

export interface IUserProfile {
  id: string
  gender: string
  age: number | null
  height: number | null
  weight: number | null
}

export interface ILoginUser {
  email: string
  password: string
}

export interface INewUser extends ILoginUser {
  firstName: string
  password: string
  repassword: string
}

export interface IBodyPart {
  name: string
  rutinas: IRoutine[]
}

export interface IRoutine {
  name: string
  series: number
  repetitions: string
  description: string
  cuerpoId: number
  imagen: string
}

export interface IContact {
  name: string
  email: string
  subject: string
  message: string
}
