import NextAuth from "next-auth"
import {connectToDatabase} from "@/app/lib/db/mongo";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "./models/User.model";
import bcrypt from "bcryptjs";

export const  { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials as { email: string; password: string };
        try{
          await connectToDatabase();
          const user = await User.findOne({ email });
          if (!user) {
            return null;
          }
          const match = await bcrypt.compare(password, user.password);
          if (!match) {
            return null;
          }
          return user;
        } catch (error) {
          console.error("Error occurred while authorizing user:", error);
        }
      }
    })
  ],

  session: {
    strategy: "jwt"
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id
      return token
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    }
  },

  secret: process.env.AUTH_SECRET,

  pages: {
    signIn: "/"
  }
})