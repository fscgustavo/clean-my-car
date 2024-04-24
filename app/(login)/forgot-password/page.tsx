import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Login() {
	return (
		<div className="flex flex-col items-center py-4 px-6 h-screen">
			<div className="flex justify-between w-full">
				<Link
					href="/login"
					className="text-sm font-medium flex gap-2 items-center"
				>
					<ArrowLeft height={16} width={16} />
					Login
				</Link>
				<Link href="/need-help" className="inline-block text-sm font-medium">
					Need help?
				</Link>
			</div>
			<div className="m-auto grid sm:w-[350px] w-full gap-12 justify-self-center">
				<div className="grid gap-2 text-center">
					<h1 className="text-lg font-bold">Forgot Password?</h1>
					<p className="font-medium text-sm">
						Don&apos;t worry! It happens. Please enter the address associated
						with your account.
					</p>
				</div>
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
				</div>
				<button
					type="submit"
					className="w-full bg-[#19ebb6] py-3 px-6 rounded font-medium text-sm"
				>
					Submit
				</button>
			</div>
		</div>
	);
}
