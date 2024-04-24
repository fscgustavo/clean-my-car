import { CarFront } from "lucide-react";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full lg:grid min-h-[100vh] lg:grid-cols-[1fr_2fr] max-lg:place-content-center">
			<div className="hidden bg-muted lg:flex lg:items-center lg:flex-col lg:justify-center lg:gap-8 bg-[#19ebb6] text-center">
				<div className="grid place-items-center">
					<CarFront width={100} height={100} />
					<h1 className="font-bold text-2xl italic">CleanMyCar</h1>
				</div>
				<p className="font-medium max-w-[190px]">
					India&apos;s first waterless car cleaning company
				</p>
			</div>
			{children}
		</div>
	);
}
