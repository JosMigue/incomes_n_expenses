'use server'
import { revalidatePath } from "next/cache";
import { signIn } from "../lib/db/auth";

export const handleLogin = async (email: string, password: string) => {
    try{
        await signIn('credentials', {
            email: email,
            password: password,
            redirect: false
        });
        return { success: true, message: "Login successful." };
    }catch (error) {
        return { success: false, message: "An error occurred during login.", err: error };
    }
}