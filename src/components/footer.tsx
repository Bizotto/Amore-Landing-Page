import Image from 'next/image'

export default function Footer() {
	return (
		<footer className="bg-zinc-400/10 mt-24">
			<div className="max-w-7xl mx-auto flex h-24 items-center justify-between">
				<p>
					Made with 💜 by{' '}
					<a
						className="underline hover:text-blue-500 transition-all duration-300"
						href="https://www.linkedin.com/in/nicolas-bizotto/"
					>
						Bizotto
					</a>
				</p>
				<Image
					src="/logo.jpg"
					alt="Logo"
					width={60}
					height={60}
					className="cursor-pointer"
				/>
			</div>
		</footer>
	)
}