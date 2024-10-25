/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, stagger, useAnimate } from 'framer-motion'
import { ArrowDown } from '@/assets/icons'

export default function FAQSection() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const toggleCollapse = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index)
	}
	return (
		<section className="relative mx-auto flex h-fit w-full flex-col p-4 lg:flex-row">
			<div className="sticky left-0 top-20 h-fit w-full flex-1">
				<p className="border-border mb-2 inline-flex w-fit items-center gap-2 rounded-full border bg-white px-4 py-1 font-space-grotesk text-sm font-semibold text-foreground">
					<span className="block size-1.5 rounded-full bg-sky-500"></span>
					FAQs
				</p>
				<h2 className="mb-4 text-start text-5xl font-bold tracking-tight text-foreground">
					Preguntas Frecuentes
				</h2>
				<p className="my-4 max-w-lg text-start text-base">
					Estamos aquí para ayudarte con cualquier pregunta que puedas tener. Si
					no encuentra lo que necesita, por favor contáctenos en <br />
					<a
						href="mailto:victormel2003@gmail.com"
						className="font-space-grotesk font-semibold text-foreground underline"
					>
						suppor@appvance.com
					</a>
				</p>
			</div>
			<div className="mx-auto max-w-3xl flex-1 space-y-5">
				{FAQquiestions.map((item, index) => (
					<div
						key={index}
						className="cursor-pointer rounded-xl border border-gray-300 bg-white px-4 py-6 shadow-[2px_2px_2px_#a1a1a1]"
						onClick={() => toggleCollapse(index)}
					>
						<div className="flex items-center gap-4">
							<ArrowDown
								className={`size-6 ${activeIndex === index ? 'rotate-180' : 'rotate-0'} transition duration-100 ease-linear`}
							/>
							<h3 className="font-space-grotesk text-lg font-semibold text-black">
								{item.question}
							</h3>
						</div>
						<AnimatePresence mode="wait">
							{activeIndex === index && (
								<motion.div
									layout
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: 'auto' }}
									exit={{ opacity: 0, height: 0 }}
									className="overflow-hidden pl-10 pr-5"
								>
									<TextGeneratareEffect words={item.answer} />
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				))}
			</div>
		</section>
	)
}

const TextGeneratareEffect = ({
	words,
	filter = true,
}: {
	words: string
	filter?: boolean
}) => {
	const [scope, animate] = useAnimate()
	const wordsArray = words.split(' ')

	useEffect(() => {
		animate(
			'span',
			{
				opacity: 1,
				filter: filter ? 'blur(0)' : 'none',
			},
			{
				duration: 0.3,
				delay: stagger(0.04),
				ease: 'easeIn',
			}
		)
	}, [scope.current])

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map((word, idx) => (
					<motion.span
						key={word + idx}
						className="text-[14px] leading-snug"
						style={{
							filter: filter ? 'blur(6px)' : 'none',
							opacity: 0,
						}}
					>
						{word}{' '}
					</motion.span>
				))}
			</motion.div>
		)
	}

	return <div className="w-full">{renderWords()}</div>
}

const FAQquiestions = [
	{
		question: '¿Qué es Appvance?',
		answer:
			'Appvance es una agencia de desarrollo web y diseño de aplicaciones móviles que ofrece servicios de desarrollo personalizados para crear sitios innovadores y optimizados, enfocados en mejorar la experiencia del usuario y generar resultados.',
	},
	{
		question: '¿Cuánto cuesta un sitio web?',
		answer:
			'El costo de un sitio web varía según el alcance del proyecto y los requisitos específicos del cliente.',
	},
	{
		question: '¿Cuánto tiempo lleva desarrollar un sitio web?',
		answer:
			'El tiempo de desarrollo de un sitio web depende del alcance del proyecto y los requisitos específicos del cliente. Para obtener una estimación precisa, contáctenos en support@appvance.com',
	},
	{
		question: '¿Qué servicios ofrece Appvance?',
		answer:
			'Appvance ofrece servicios de desarrollo web personalizados, diseño de aplicaciones móviles, optimización de motores de búsqueda (SEO), marketing digital y más. Para obtener más información sobre nuestros servicios, visite nuestra página de servicios.',
	},
	{
		question: '¿Cómo puedo contactar a Appvance?',
		answer:
			'Puede contactar a Appvance por correo electrónico en support@appvance.com',
	},
	{
		question: '¿Cómo puedo agender una cita ?',
		answer:
			'Puede contactar a Appvance por correo electrónico en support@appvance.com',
	},
]
