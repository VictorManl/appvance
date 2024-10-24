import { Chat } from '@/assets/icons'

export default function HeroSection() {
	return (
		<section className="flex h-[calc(90dvh-80px)] w-full flex-col items-center justify-center gap-y-5">
			<div className="relative flex w-full justify-center">
				<span className="border-border relative z-10 mb-4 inline-block rounded-full border bg-white px-4 py-1.5 text-[13px] font-semibold text-foreground shadow-[2px_2px_2px_#a1a1aa] md:mb-0">
					Creacion web ✨
					<span className="absolute left-3 right-3 top-0 h-[1px] bg-gradient-to-r from-zinc-500/0 via-zinc-400 to-zinc-500/0"></span>
				</span>
			</div>
			<h1 className="max-w-6xl text-center text-8xl font-extrabold tracking-tighter text-foreground">
				Transforma tu visión en una experiencia digital inolvidable.
			</h1>
			<p className="max-w-4xl text-center text-lg">
				Ofrecemos servicios de desarrollo web personalizados para crear sitios
				innovadores y optimizados, enfocados en mejorar la experiencia del
				usuario y generar resultados. Transforma tu idea en una solución digital
				efectiva que impulse tu negocio.
			</p>
			<div className="flex w-full justify-center">
				<button className="inline-flex w-full max-w-44 items-center justify-center gap-x-4 rounded-full bg-foreground px-4 py-2 font-space-grotesk text-lg font-semibold text-white shadow-[4px_4px_4px_#a1a1aa]">
					Hablemos
					<Chat className="size-6 text-inherit" />
				</button>
			</div>
		</section>
	)
}
