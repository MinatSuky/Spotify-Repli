
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://epnyhlyhqnxumohjjydz.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwbnlobHlocW54dW1vaGpqeWR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwMTEwOTAsImV4cCI6MjAzOTU4NzA5MH0.7HJd_uSaiaoPkZAOLvPxgffITesfCMEF8w3bEogqUKc"
export const supabase = createClient(supabaseUrl, supabaseKey)