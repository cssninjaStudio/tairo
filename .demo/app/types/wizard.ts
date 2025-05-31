export type TeamMemberRole =
  | 'reader'
  | 'collaborator'
  | 'manager'
  | 'owner'
  | undefined

export type ProjectType = 'design' | 'development' | 'marketing' | undefined

export interface Customer {
  name?: string
  logo?: string
  location?: string
}

export interface Tool {
  name: string
  logo: string
  description: string
}

export interface TeamMember {
  name: string
  picture: string
  role: TeamMemberRole
}

export interface Project {
  type?: ProjectType
  name?: string
  description?: string
  startDate?: string
  endDate?: string
  customer?: Customer
  budget?: string
  team?: TeamMember[]
  files: FileList | null
  avatar?: File | null
  tools?: Tool[]
}

export interface ProjectStepData {
  preview?: boolean
  name: string
  title: string
  subtitle: string
}

export interface StepData {
  name: string
  title: string
  subtitle?: string
}

export interface PaymentSend {
  recipient: {
    name: string
    picture?: string
    address: {
      lineOne: string
      lineTwo?: string
      city: string
      postalCode: string
      state: string
      country: string
    }
  }
  amount: number
  account: {
    id: number | undefined
    type: string
    label: string
    number: string
    balance: number
  } | null
  routingNumber: string
  prefix: string
  method: string | null
}

export interface PaymentReceive {
  method: 'bank_transfer' | 'payment_link' | 'wire' | null
  amount: number
  account: {
    id: number | undefined
    type: string
    label: string
    number: string
    balance: number
  } | null
  email?: string
}

export interface Invite {
  firstName: string
  lastName: string
  email: string
  role: string | null
}
