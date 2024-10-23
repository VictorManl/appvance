import { Logotipo, Nav } from './'

export default function Header() {
	return (
		<header className="sticky top-0 z-40 flex h-16 w-full max-w-full items-center">
			<div className="mx-auto flex w-[calc(1400px+calc(2*24px))] items-center justify-between px-6">
				<div className="flex items-center gap-6">
					<Logotipo />
					<Nav />
				</div>
				<div className="flex h-full items-center justify-end gap-x-2 text-[15px]">
					<button className="rounded-lg bg-foreground px-4 py-1.5 text-white">
						Contactanos
					</button>
					<button className="border-border rounded-lg border bg-white px-3 py-1.5 text-foreground">
						Inicia sesion
					</button>
				</div>
			</div>
		</header>
	)
}
