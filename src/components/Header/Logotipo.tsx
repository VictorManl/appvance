import Link from 'next/link'

export default function Logotipo() {
	return (
		<Link
			href="/home"
			className="inline-flex items-center gap-1.5 font-space-grotesk"
		>
			<p className="flex size-9 items-center justify-center rounded-lg bg-black font-semibold text-white">
				Av
			</p>
			<span className="text-foreground text-2xl font-bold tracking-tight">
				Appvance
			</span>
		</Link>
	)
}
