import Link from 'next/link'
import { Logotipo } from '../Header'
import { Github, Instagram, Linkedin, Twitter } from '@/assets/icons'

export default function Footer() {
	return (
		<footer className="mx-auto mt-10 w-[calc(1400px+calc(2*24px))] px-6">
			<div className="grid grid-cols-12 space-x-4 py-4">
				<div className="col-span-4 w-full">
					<Logotipo />
					<p className="text-sm">
						© copyright Appvance 2024. Todos los derechos reservados
					</p>
				</div>
				<div className="col-span-2 flex flex-col gap-4">
					<span className="font-space-grotesk text-base font-semibold text-foreground">
						Servicios
					</span>
					<ul className="flex w-full flex-col gap-2 text-[14px]">
						<li className="">
							<Link
								href="/#"
								className="transition-colors hover:text-foreground"
							>
								Administración web
							</Link>
						</li>
						<li className="">
							<Link
								href="/#"
								className="transition-colors hover:text-foreground"
							>
								Aplicaciones web
							</Link>
						</li>
						<li>
							<Link
								href="/#"
								className="transition-colors hover:text-foreground"
							>
								Diseño web
							</Link>
						</li>
						<li className="">
							<Link
								href="/#"
								className="transition-colors hover:text-foreground"
							>
								Software a la medida
							</Link>
						</li>

						<li className="">
							<Link
								href="/#"
								className="transition-colors hover:text-foreground"
							>
								Seo
							</Link>
						</li>
						<li className="">
							<Link
								href="/#"
								className="transition-colors hover:text-foreground"
							>
								Renderizado
							</Link>
						</li>
					</ul>
				</div>
				<div className="col-span-2 flex flex-col gap-4">
					<span className="font-space-grotesk text-base font-semibold text-foreground">
						Social
					</span>
					<ul className="flex w-full flex-col gap-2 text-[14px]">
						<li className="">
							<Link
								href="/#"
								className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
							>
								<Github className="size-4 text-inherit" />
								<span>Github</span>
							</Link>
						</li>
						<li className="">
							<Link
								href="/#"
								className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
							>
								<Linkedin className="size-4 text-inherit" />
								<span>Linkedin</span>
							</Link>
						</li>
						<li className="">
							<Link
								href="/#"
								className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
							>
								<Twitter className="size-4 text-inherit" />
								<span>Twitter</span>
							</Link>
						</li>
						<li className="">
							<Link
								href="/#"
								className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
							>
								<Instagram className="size-4 text-inherit" />
								<span>Instagram</span>
							</Link>
						</li>
					</ul>
				</div>
				<div className="col-span-2 flex flex-col gap-4">
					<span className="font-space-grotesk text-base font-semibold text-foreground">
						Compañía
					</span>
					<ul className="flex w-full flex-col gap-2 text-[14px]">
						<li className="">
							<Link
								href="/#"
								className="transition-colors hover:text-foreground"
							>
								Nosotros
							</Link>
						</li>
						<li className="">
							<Link
								href="/#"
								className="transition-colors hover:text-foreground"
							>
								Contactanos
							</Link>
						</li>
						<li className="">
							<Link
								href="/#"
								className="transition-colors hover:text-foreground"
							>
								Politica de privacidad
							</Link>
						</li>
						<li className="">
							<Link
								href="/#"
								className="transition-colors hover:text-foreground"
							>
								Legal
							</Link>
						</li>
					</ul>
				</div>
				<div className="col-span-2 flex flex-col gap-4">
					<span className="font-space-grotesk text-base font-semibold text-foreground">
						Registro
					</span>
					<ul className="flex w-full flex-col gap-2 text-[14px]">
						<li className="">
							<Link
								href="/#"
								className="transition-colors hover:text-foreground"
							>
								Crear cuenta
							</Link>
						</li>
						<li className="">
							<Link
								href="/#"
								className="transition-colors hover:text-foreground"
							>
								Iniciar sesión
							</Link>
						</li>
						<li className="">
							<Link
								href="/#"
								className="transition-colors hover:text-foreground"
							>
								Recuperar contraseña
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<p className="inset-x-0 mt-14 bg-gradient-to-b from-neutral-200 to-neutral-300 bg-clip-text text-center font-space-grotesk text-5xl font-bold tracking-wide text-transparent md:text-9xl lg:text-[12rem] xl:text-[13rem]">
				Appvance
			</p>
		</footer>
	)
}
