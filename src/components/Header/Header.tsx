import { Logotipo, Nav } from './'

export default function Header() {
	return (
		<header className="sticky top-0 z-40 flex h-16 w-full max-w-full items-center">
			<div className="mx-auto flex w-[calc(1400px+calc(2*24px))] items-center justify-between px-6">
				<div className="flex items-center gap-8">
					<Logotipo />
					<Nav />
				</div>
				<div>opciones</div>
			</div>
		</header>
	)
}
