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
  gender: string
  age: number | null
  height: number | null
  weight: number | null
  token?: string
}

export interface ILoginUser {
  email: string
  password: string
}

export interface INewUser extends ILoginUser {
  firstName: string
  password: string
  repassword: string
  terms: boolean
}
export interface IContact {
  name: string
  email: string
  subject: string
  message: string
}

export interface IForgotPassword {
  email: string
}

export interface INewPassword {
  password: string
  repassword: string
}

export interface IRoutine {
  id: number
  name: string
  daysNumber: number
  isCompleted: boolean
  imagen?: string
  days: IDay[]
  createdAt: Date
  updatedAt: Date
}

export interface IDay {
  id: number
  day: string
  exercises: IExercise[]
}

export interface IExercise {
  id: number
  name: string
  series: number
  bodyPart: string
  repetitions: string
  description: string
  isCompleted: boolean
}
