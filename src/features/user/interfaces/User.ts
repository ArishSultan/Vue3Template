export interface UserForm {
  name: string
  email: string
  age: number | null
}

export interface User {
  id?: string
  name: string
  age: number
  salary: number
  email?: string
  image?: string
  accessToken?: string
}
