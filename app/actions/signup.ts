'use server'
import becrypt from 'bcryptjs';
import User from '../lib/db/models/User.model';
import { revalidatePath } from 'next/cache';
import { connectToDatabase } from '../lib/db/mongo';
export const signUpHandler = async (name: string ,email: string, password: string) => {
    try {
        const hashedPassword = await becrypt.hash(password, 10);
        await connectToDatabase()
        const newUser = new User({
            name: name,
            email: email,
            password: hashedPassword,
        })
        await newUser.save();
        revalidatePath('auth/register');
        return { success: true, message: "Registration successful." };
    } catch (error) {
        return { success: false, message: "An error occurred during registration.", err: error };
    }
}