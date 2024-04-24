"use client";

import Link from "next/link";
import { toast } from "sonner";

export default function Login() {
	// Simple function to simulate invalid credentials
	function loginAction(data: FormData) {
		const email = data.get("email");
		const password = data.get("password");

		if (email !== "joe@email.com" || password !== "123") {
			toast.error("Invalid Credentials", {
				position: "top-right",
			});
		}
	}

	return (
		<div className="flex flex-col items-center py-4 px-6 h-screen">
			<div className="flex items-end w-full">
				<Link
					href="/need-help"
					className="ml-auto inline-block text-sm font-medium"
				>
					Need help?
				</Link>
			</div>
			<form
				className="m-auto grid sm:w-[350px] w-full gap-12 justify-self-center"
				noValidate
				action={loginAction}
			>
				<h1 className="text-lg font-bold text-center">Log in</h1>
				<div className="grid gap-4">
					<div className="grid gap-2">
						<label htmlFor="email" className="font-medium">
							Email
						</label>
						<input
							id="email"
							type="email"
							placeholder="joe@email.com"
							className="rounded border border-solid border-[#22242626] py-2 px-4 placeholder:text-[#22242626]"
							required
						/>
					</div>
					<div className="grid gap-2">
						<label htmlFor="password" className="font-medium">
							Password
						</label>
						<input
							id="password"
							type="password"
							className="rounded border border-solid border-[#22242626] py-2 px-4 placeholder:text-[#22242626]"
							placeholder="Enter your Password"
							required
						/>
						<div className="flex items-end">
							<Link
								href="/forgot-password"
								className="ml-auto inline-block text-sm font-medium"
							>
								forgot password?
							</Link>
						</div>
					</div>
				</div>
				<button
					type="submit"
					className="w-full bg-[#19ebb6] py-3 px-6 rounded font-medium text-sm"
				>
					Login
				</button>
			</form>
		</div>
	);
}
