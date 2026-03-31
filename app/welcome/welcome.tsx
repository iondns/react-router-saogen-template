import logoDark from "./saogen-logo-dark.png";
import logoLight from "./saogen_logo_light.png";

export function Welcome({ message }: { message: string }) {
	return (
		<main className="flex items-center justify-center pt-16 pb-4">
			<div className="flex-1 flex flex-col items-center gap-16 min-h-0">
				<header className="flex flex-col items-center gap-9">
					<div className="w-[500px] max-w-[100vw] p-4">
						<img
							src={logoLight}
							alt="React Router"
							className="block w-full dark:hidden"
						/>
						<img
							src={logoDark}
							alt="React Router"
							className="hidden w-full dark:block"
						/>
					</div>
				</header>
				
				<div className="max-w-[300px] w-full space-y-6 px-4">
					<nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
						<p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
							What&apos;s next?
						</p>
						<ul>
							{resources.map(({ href, text, icon }) => (
								<li key={href}>
									<a
										className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
										href={href}
										target="_blank"
										rel="noreferrer"
									>
										{icon}
										{text}
									</a>
								</li>
							))}
							<li className="self-stretch p-3 leading-normal">{message}</li>
						</ul>
					</nav>
				</div>
			</div>
		</main>
	);
}

const resources = [
	{
		href: "https://github.com/QOGE/SAOGEN",
		text: "SAOGEN Docs",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
			>
				<path
					d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16[...]"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
		),
	},
	{
		href: "https://discord.gg/dcEMCcbct",
		text: "SAOGEN Discord",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="20"
				viewBox="0 0 24 20"
				fill="none"
				className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
			>
				<path
					d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.

