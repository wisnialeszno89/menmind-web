import { createClient } from "@supabase/supabase-js"

function getUrl() {
  return process.env.NEXT_PUBLIC_SUPABASE_URL ?? ""
}

function getAnon() {
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
}

function getService() {
  return process.env.SUPABASE_SERVICE_ROLE_KEY ?? ""
}

export function getSupabasePublic() {
  const url = getUrl()
  const key = getAnon()

  if (!url || !key) {
    // build-time fallback
    return null as any
  }

  return createClient(url, key)
}

export function getSupabaseAdmin() {
  const url = getUrl()
  const key = getService()

  if (!url || !key) {
    // build-time fallback
    return null as any
  }

  return createClient(url, key)
}