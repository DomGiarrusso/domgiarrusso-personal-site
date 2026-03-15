export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      images: {
        Row: {
          id: string
          page: string
          title: string
          alt: string
          thumb_url: string
          full_url: string | null
          variant: string | null
          width: number | null
          height: number | null
          sort_order: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          page: string
          title: string
          alt: string
          thumb_url: string
          full_url?: string | null
          variant?: string | null
          width?: number | null
          height?: number | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          page?: string
          title?: string
          alt?: string
          thumb_url?: string
          full_url?: string | null
          variant?: string | null
          width?: number | null
          height?: number | null
          sort_order?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      videos: {
        Row: {
          id: string
          created_at: string
          title: string
          thumbnail_url: string
          video_url: string
          sort_order: number
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          thumbnail_url: string
          video_url: string
          sort_order: number
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          thumbnail_url?: string
          video_url?: string
          sort_order?: number
        }
      }
      projects: {
        Row: {
          id: string
          created_at: string
          title: string
          slug: string
          blurb: string
          thumbnail_url: string | null
          content: string
          techstack: string[] | null
          repo_url: string | null
          external_url: string | null
          features: Json
          sort_order: number | null
          is_published: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          slug: string
          blurb: string
          thumbnail_url?: string | null
          content: string
          techstack?: string[] | null
          repo_url?: string | null
          external_url?: string | null
          features: Json
          sort_order?: number | null
          is_published: boolean
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          slug?: string
          blurb?: string
          thumbnail_url?: string | null
          content?: string
          techstack?: string[] | null
          repo_url?: string | null
          external_url?: string | null
          features?: Json
          sort_order?: number | null
          is_published?: boolean
        }
      }
    }
    Enums: Record<string, never>
  }
}

// Convenience type aliases for table rows
export type ImagesRow = Database['public']['Tables']['images']['Row']
export type VideosRow = Database['public']['Tables']['videos']['Row']
export type ProjectsRow = Database['public']['Tables']['projects']['Row']
