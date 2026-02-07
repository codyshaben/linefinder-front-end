export interface Trail {
  id: number
  trail_id: number
  name: string
  location: string
  stars: number
  starVotes: number
  summary: string
  difficulty: string
  length: number
  ascent: number
  descent: number
  high: number
  low: number
  latitude: number
  longitude: number
  imgMedium: string
}

export interface User {
  first_name: string
  trails?: Trail[]
}
