"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Star, Award, Shield, Clock } from "lucide-react"
import Layout from "./components/Layout"
import ParticleBackground from "./components/ParticleBackground"

const features = [
  {
    icon: Star,
    title: "Excelência",
    description: "Comprometimento com os mais altos padrões de qualidade em cada detalhe.",
  },
  {
    icon: Award,
    title: "Experiência",
    description: "Anos de expertise em cuidados automotivos de alta performance.",
  },
  {
    icon: Shield,
    title: "Proteção",
    description: "Utilizamos produtos premium para proteger seu veículo.",
  },
  {
    icon: Clock,
    title: "Agilidade",
    description: "Serviço eficiente sem comprometer a qualidade.",
  },
]

const testimonials = [
  {
    name: "Carlos Silva",
    text: "Trabalho excepcional! Meu carro ficou melhor que novo.",
    role: "Cliente desde 2022",
    rating: 5,
  },
  {
    name: "Ana Paula",
    text: "Profissionalismo e atenção aos detalhes incomparáveis.",
    role: "Cliente desde 2023",
    rating: 5,
  },
  {
    name: "Roberto Martins",
    text: "O melhor serviço de estética automotiva que já experimentei.",
    role: "Cliente desde 2021",
    rating: 5,
  },
]

export default function Home() {
  return (
    <Layout>
      <ParticleBackground />
      <section className="relative h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/logo.jpg"
            alt="Dreams Wash Detail Background"
            layout="fill"
            objectFit="cover"
            className="opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-bold mb-6 animate-glow bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            Dreams Wash Detail
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl mb-8 text-white/90"
          >
            Transformando seu veículo em uma obra de arte sobre rodas
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/servicos"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center transform hover:scale-105"
            >
              Conheça Nossos Serviços
              <ChevronRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background-lighter relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Por que nos escolher?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-background p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            O que nossos clientes dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-background-lighter p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? "text-primary fill-primary" : "text-gray-400"}`}
                    />
                  ))}
                </div>
                <p className="text-white/90 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

