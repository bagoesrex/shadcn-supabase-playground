'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"
import { headers } from "next/headers"

export async function signUp(formData: FormData) {
    const supabase = await createClient()

    const credentials = {
        username: formData.get("username") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    }

    const { error, data } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        options: {
            data: {
                username: credentials.username
            }
        }
    })

    if (error) {
        return {
            status: error?.message,
            message: error.message,
            user: null
        }
    } else if (data?.user?.identities?.length === 0) {
        return {
            status: "User dengan email ini sudah ada",
            user: null,
        }
    }

    revalidatePath("/", "layout")
    return { status: "success", user: data.user }
}