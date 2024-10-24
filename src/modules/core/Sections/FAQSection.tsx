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
		<section className="mx-auto w-full max-w-4xl p-4">
			<h2 className="mb-4 text-center text-7xl font-bold tracking-tight text-foreground">
				Preguntas Frecuentes
			</h2>
			<p className="mx-auto my-6 max-w-2xl text-center text-base">
				Estamos aquí para ayudarte con cualquier pregunta que puedas tener. Si
				no encuentra lo que necesita, por favor contáctenos en
			</p>
			<div className="mx-auto w-full max-w-3xl space-y-4">
				{FAQquiestions.map((item, index) => (
					<div
						key={index}
						className="cursor-pointer rounded-xl border border-gray-300 bg-white p-4 shadow-[2px_2px_2px_#a1a1a1]"
						onClick={() => toggleCollapse(index)}
					>
						<div className="flex items-center gap-4">
							<ArrowDown
								className={`size-6 ${activeIndex === index ? 'rotate-180' : 'rotate-0'} transition duration-100 ease-linear`}
							/>
							<h3 className="text-lg font-semibold text-black">
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
				duration: 0.2,
				delay: stagger(0.03),
				ease: 'backInOut',
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
]
