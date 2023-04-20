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
