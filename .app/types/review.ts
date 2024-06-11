export class Review {
  review_id: string
  rating: number
  review_text: string
  published_at: string
  published_at_date: string | null
  response_from_owner_text: string | null
  response_from_owner_ago: string | null
  response_from_owner_date: string | null
  review_likes_count: number
  total_number_of_reviews_by_reviewer: number
  total_number_of_photos_by_reviewer: number
  is_local_guide: boolean
  review_translated_text: string | null
  response_from_owner_translated_text: string | null
  review_photos: string[]
}
