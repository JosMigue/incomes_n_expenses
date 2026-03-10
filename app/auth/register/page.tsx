'use client'

import { useState, useTransition } from "react"
import Link from "next/link"
import { registerHandler } from "@/app/actions/register"

export default function Page() {

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const [isPending, startTransition] = useTransition()

	const handleSubmit = () => {
		startTransition(async () => {
			const result = await registerHandler(name, email, password)
			console.log(result)
		})
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-[#0B1220] text-white px-4">

			<div className="w-full max-w-md bg-[#111827] p-8 rounded-xl shadow-lg">

				<h1 className="text-2xl font-semibold mb-2">Create Account</h1>
				<p className="text-gray-400 mb-6 text-sm">
					Register a new account to start tracking your incomes.
				</p>

				<div className="space-y-4">

					<div>
						<label className="text-sm text-gray-400">Name</label>
						<input
							className="w-full mt-1 px-3 py-2 rounded-lg bg-[#1F2937] border border-gray-700 focus:outline-none focus:border-gray-500"
							type="text"
							placeholder="John Doe"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>

					<div>
						<label className="text-sm text-gray-400">Email</label>
						<input
							className="w-full mt-1 px-3 py-2 rounded-lg bg-[#1F2937] border border-gray-700 focus:outline-none focus:border-gray-500"
							type="email"
							placeholder="email@example.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div>
						<label className="text-sm text-gray-400">Password</label>
						<input
							className="w-full mt-1 px-3 py-2 rounded-lg bg-[#1F2937] border border-gray-700 focus:outline-none focus:border-gray-500"
							type="password"
							placeholder="••••••••"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<button
						onClick={handleSubmit}
						disabled={isPending}
						className="w-full bg-gray-600 hover:bg-gray-500 transition py-2 rounded-lg font-medium"
					>
						{isPending ? "Creating..." : "Create Account"}
					</button>

				</div>

				<p className="text-sm text-gray-400 mt-6 text-center">
					Already have an account?{" "}
					<Link href="/" className="text-gray-300 hover:text-white">
						Sign in
					</Link>
				</p>

			</div>
		</div>
	)
}