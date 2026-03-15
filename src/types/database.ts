export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Array<Json>

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
        Relationships: []
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
        Relationships: []
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
          techstack: Array<string> | null
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
          techstack?: Array<string> | null
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
          techstack?: Array<string> | null
          repo_url?: string | null
          external_url?: string | null
          features?: Json
          sort_order?: number | null
          is_published?: boolean
        }
        Relationships: []
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
  }
}

type PublicSchema = Database['public']

export type Tables<TTableName extends keyof PublicSchema['Tables']> =
  PublicSchema['Tables'][TTableName]['Row']

// Convenience type aliases for table rows
export type ImagesRow = Tables<'images'>
export type VideosRow = Tables<'videos'>
export type ProjectsRow = Tables<'projects'>
