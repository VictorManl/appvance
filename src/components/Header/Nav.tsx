'use client'

import { useMemo } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import {
	ArrowDown,
	Design,
	MobileDev,
	Software,
	Web,
	Dashboard,
	Mobile,
	Seo,
	WebRendering,
} from '@/assets/icons'

export default function Nav() {
	const pathname = usePathname()

	const Links = useMemo(
		() => [
			{
				id: 1,
				href: '/',
				label: 'Servicios',
				isActive: pathname === '/services',
				subLinks: true,
			},
			{
				id: 2,
				href: '/',
				label: 'Portafolio',
				isActive: pathname === '/porfolio',
			},
			{
				id: 3,
				href: '/',
				label: 'Plantillas',
				isActive: pathname === '/templates',
			},
			{ id: 4, href: '/', label: 'Precios', isActive: pathname === '/pricing' },
			{ id: 5, href: '/', label: 'Nosotros', isActive: pathname === '/about' },
		],
		[pathname]
	)

	return (
		<div className="relative">
			<nav className="w-full">
				<ul className="flex items-center gap-1.5 text-[14px]">
					{Links.map(({ id, href, label, isActive, subLinks }) => (
						<li key={id} className="group/item relative">
							<Link
								href={href}
								className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 hover:bg-[#ebebeb] hover:text-black ${isActive ? 'bg-[#ebebeb] text-foreground' : 'text-foreground-light'}`}
							>
								{label}
								{subLinks && <ArrowDown className="size-4" />}
							</Link>
							<AnimatePresence mode="wait">
								{subLinks && (
									<m.nav
										className="absolute"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									>
										<ul className="border-border absolute left-0 mt-1.5 grid w-[840px] grid-cols-9 gap-x-4 rounded-lg border bg-white px-4 py-3 shadow-lg">
											<div className="col-span-3 flex flex-col items-start justify-start gap-1">
												<span className="text-[15px]">Web</span>
												<div className="mt-3 flex w-full flex-col gap-1">
													<Link
														href="/"
														className="group inline-flex gap-2 py-2"
													>
														<span className="border-border flex size-10 items-center justify-center rounded-lg border text-black transition-all duration-100 ease-linear group-hover:bg-foreground group-hover:text-white">
															<Design className="size-5 text-inherit" />
														</span>
														<p className="flex flex-col">
															<span className="text-[15px] text-foreground">
																Diseño web
															</span>
															<span className="text-[13px]">
																Diseñamos tu sitio web
															</span>
														</p>
													</Link>
													<Link
														href="/"
														className="group inline-flex gap-2 py-2"
													>
														<span className="border-border flex size-10 items-center justify-center rounded-lg border text-black transition-all duration-100 ease-linear group-hover:bg-foreground group-hover:text-white">
															<Web className="size-5 text-inherit" />
														</span>
														<p className="flex flex-col">
															<span className="text-[15px] text-foreground">
																Aplicaciones web
															</span>
															<span className="text-[13px]">
																Desarrollamos tu aplicación web
															</span>
														</p>
													</Link>
													<Link
														href="/"
														className="group inline-flex gap-2 py-2"
													>
														<span className="border-border flex size-10 items-center justify-center rounded-lg border text-black transition-all duration-100 ease-linear group-hover:bg-foreground group-hover:text-white">
															<Software className="size-5 text-inherit" />
														</span>
														<p className="flex flex-col">
															<span className="text-[15px] text-foreground">
																Software a la medida
															</span>
															<span className="text-[13px]">
																Creamos tu software a la medida.
															</span>
														</p>
													</Link>
													<Link
														href="/"
														className="group inline-flex gap-2 py-2"
													>
														<span className="border-border flex size-10 items-center justify-center rounded-lg border text-black transition-all duration-100 ease-linear group-hover:bg-foreground group-hover:text-white">
															<Dashboard className="size-5 text-inherit" />
														</span>
														<p className="flex flex-col">
															<span className="text-[15px] text-foreground">
																Administracion web
															</span>
															<span className="text-[13px]">
																Nos encargamos de tu sitio web
															</span>
														</p>
													</Link>
												</div>
											</div>
											<div className="col-span-3 flex flex-col items-start justify-start gap-1">
												<span className="text-[15px]">Mobile</span>
												<div className="mt-3 flex w-full flex-col gap-1">
													<Link
														href="/"
														className="group inline-flex gap-2 py-2"
													>
														<span className="border-border flex size-10 items-center justify-center rounded-lg border text-black transition-all duration-100 ease-linear group-hover:bg-foreground group-hover:text-white">
															<Mobile className="size-5 text-inherit" />
														</span>
														<p className="flex flex-col">
															<span className="text-[15px] text-foreground">
																Aplicacion
															</span>
															<span className="text-[13px]">
																Creamos tu aplicación móvil
															</span>
														</p>
													</Link>
													<Link
														href="/"
														className="group inline-flex gap-2 py-2"
													>
														<span className="border-border flex size-10 items-center justify-center rounded-lg border text-black transition-all duration-100 ease-linear group-hover:bg-foreground group-hover:text-white">
															<MobileDev className="size-5 text-inherit" />
														</span>
														<p className="flex flex-col">
															<span className="text-[15px] text-foreground">
																Administracion movil
															</span>
															<span className="text-[13px]">
																Nos encargamos de tu aplicación móvil
															</span>
														</p>
													</Link>
												</div>
											</div>
											<div className="col-span-3 flex flex-col items-start justify-start gap-1">
												<span className="text-[15px]">Mejoras</span>
												<div className="mt-3 flex w-full flex-col gap-1">
													<Link
														href="/"
														className="group inline-flex gap-2 py-2"
													>
														<span className="border-border flex size-10 items-center justify-center rounded-lg border text-black transition-all duration-100 ease-linear group-hover:bg-foreground group-hover:text-white">
															<Seo className="size-5 text-inherit" />
														</span>
														<p className="flex flex-col">
															<span className="text-[15px] text-foreground">
																SEO
															</span>
															<span className="text-[13px]">
																Mejoramos el SEO de tu sitio web
															</span>
														</p>
													</Link>
													<Link
														href="/"
														className="group inline-flex gap-2 py-2"
													>
														<span className="border-border flex size-10 items-center justify-center rounded-lg border text-black transition-all duration-100 ease-linear group-hover:bg-foreground group-hover:text-white">
															<WebRendering className="size-5 text-inherit" />
														</span>
														<p className="flex flex-col">
															<span className="text-[15px] text-foreground">
																Renderezido
															</span>
															<span className="text-[13px]">
																Tu sitio web más rápido y seguro
															</span>
														</p>
													</Link>
												</div>
											</div>
										</ul>
									</m.nav>
								)}
							</AnimatePresence>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
