export type User = {
  _id: string
  email: string
  name: string
  password: string
  createdAt: string
  updatedAt: string | null
  disabledAt: string | null
  isDisabled: boolean
}
