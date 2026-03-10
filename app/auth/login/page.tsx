'use client'
import { useState, useTransition } from "react";
import { handleLogin } from '@/app/actions/login'
import { auth } from "@/app/lib/db/auth";
import { redirect } from "next/navigation"
import { error } from "console";
const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedInSuccessfully, setisSingedSuccessFully] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const handleSingIn = async () => {
    setErrorMessage("");
    startTransition(async () => {
      const status = await handleLogin(email, password);
      if (status.success) {
        setisSingedSuccessFully(true);
        setTimeout(() => {
          redirect("/dashboard");
        }, 2000);
      } else {
        console.log(status)
        if (status.err?.name === "CredentialsSignin") {
          setisSingedSuccessFully(false);
          setErrorMessage("Invalid email or password. Please try again.");
        }
      }
    });
  };
  return (
    <>
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-6">
        <div className="w-full max-w-5xl bg-neutral-800 rounded-2xl shadow-xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

          {/* LEFT SIDE */}
          <div className="p-10 flex flex-col justify-center bg-neutral-800">

            <div className="mb-8">
            </div>

            <h1 className="text-2xl font-semibold text-white mb-6">
              Sign In To your Account
            </h1>
            {isSignedInSuccessfully && (
              <div className="bg-green-500 text-white p-3 rounded mb-6">
                Successfully signed in!. Redirecting to dashboard...
              </div>
            )}
            {errorMessage && (
              <div className="bg-red-500 text-white p-3 rounded mb-6">
                {errorMessage}
              </div>
            )}

            <div className="space-y-3 mb-6">

              <button className="w-full bg-neutral-700 hover:bg-neutral-600 transition rounded-lg py-2.5 text-sm text-white flex items-center justify-center gap-2">
                Sign In With Google
                <span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </span>
              </button>

              <button className="w-full bg-neutral-700 hover:bg-neutral-600 transition rounded-lg py-2.5 text-sm text-white flex items-center justify-center gap-2">
                Sign In With Twitter
                <span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="white" />
                  </svg>
                </span>
              </button>

            </div>

            <div className="text-center text-neutral-400 text-sm mb-6">
              Or sign in with your e-mail
            </div>

            <div className="space-y-4">

              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="w-full bg-neutral-700 text-white placeholder-neutral-400 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-neutral-500"
              />

              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full bg-neutral-700 text-white placeholder-neutral-400 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-neutral-500"
              />

              <button onClick={handleSingIn} className="w-full bg-neutral-600 hover:bg-neutral-500 transition text-white rounded-lg py-2.5 font-medium">
                {isPending ? "Signing In..." : "Sign In"}
              </button>

            </div>

            <div className="text-sm text-neutral-400 mt-6 text-center">
              Forgot Password?
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-neutral-700  items-center justify-center hidden sm:flex">

            <div className="text-neutral-300 text-center p-10">
              <div className="w-48 h-48 bg-neutral-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                Illustration
              </div>

              <p className="text-sm text-neutral-400">
                You can place an SVG or illustration here
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Page;