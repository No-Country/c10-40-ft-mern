export interface IUser {
  id: string
  firstName: string
  email: string
  role: string
  gender?: string
  age?: string
  height?: string
  weight?: string
  profileCompleted?: boolean
  googleId?: string
}

export interface ILoginUser {
  firstName?: string
  email: string
  password: string
}

export interface INewUser extends ILoginUser {
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
}
