import logoDark from "./logo-dark.png";
import logoLight from "./logo-light.png";

export function Welcome({ message }: { message: string }) {
	return (
		<main className="flex items-center justify-center pt-4 pb-10">
			<div className="flex-1 flex flex-col items-center gap-4 min-h-0">
				<header className="flex flex-col items-center gap-1">
					<div className="w-[300px] max-w-[100vw] p-">
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
				  <main className="hero">
      <section className="hero">
        <h1 class="text-center">Symbiotic Autonomous Organisation</h1>
        <p class="text-center"> </p>	  
       
      </section>
    </main>
				<div className="max-w-[300px] w-full space-y-6 px-4">
					<nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
						
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
		href: "https://discord.com/channels/1429693001617117256/1429693003299164214",
		text: "SAO Membership",
		
	},
	{
		href: "./sas.tsx",
		text: "Autonomous Systems",

	},
];
