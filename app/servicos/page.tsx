"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Layout from "../components/Layout"
import { SprayCanIcon as Spray, Shield, Car, MessageCircle } from "lucide-react"

const services = [
  {
    name: "Polimento",
    description:
      "Restaure o brilho original do seu veículo com nosso serviço de polimento profissional. Removemos arranhões, oxidações e imperfeições da pintura.",
    icon: Spray,
    image: "/placeholder.svg?height=300&width=400",
    features: ["Polimento em 3 etapas", "Remoção de arranhões", "Restauração do brilho", "Proteção da pintura"],
  },
  {
    name: "Proteção Cerâmica",
    description:
      "Proteja a pintura do seu carro com nossa avançada tecnologia de revestimento cerâmico. Garante proteção duradoura e brilho excepcional.",
    icon: Shield,
    image: "/placeholder.svg?height=300&width=400",
    features: ["Proteção por até 3 anos", "Repelente a água", "Resistência a químicos", "Brilho intenso"],
  },
  {
    name: "Detalhamento Interior",
    description:
      "Renove o interior do seu veículo com nossa limpeza profunda e tratamento de superfícies. Higienização completa e proteção dos materiais.",
    icon: Car,
    image: "/placeholder.svg?height=300&width=400",
    features: ["Higienização profunda", "Hidratação dos couros", "Proteção UV", "Sanitização"],
  },
]

export default function Servicos() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Nossos Serviços
        </motion.h1>
        <div className="grid gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background-lighter rounded-lg overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-primary mr-3" />
                    <h2 className="text-2xl font-semibold text-white">{service.name}</h2>
                  </div>
                  <p className="text-white/80 mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-white/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/5511949284012"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center transform hover:scale-105"
          >
            Agende seu serviço
            <MessageCircle className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </Layout>
  )
}

