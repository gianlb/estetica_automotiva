"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Layout from "../components/Layout"

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-gold text-center"
        >
          Sobre Mim
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Foto do profissional"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gold">João Silva</h2>
            <p className="text-gray-300 mb-6">
              Com mais de 10 anos de experiência na indústria de estética automotiva, sou apaixonado por transformar
              veículos comuns em verdadeiras obras de arte sobre rodas. Minha jornada começou com um amor profundo por
              carros e uma obsessão pelo detalhe.
            </p>
            <p className="text-gray-300 mb-6">
              Ao longo dos anos, aperfeiçoei minhas habilidades trabalhando com uma ampla gama de veículos, desde carros
              clássicos até superesportivos modernos. Meu compromisso com a excelência e a satisfação do cliente me
              levou a me tornar um dos profissionais mais respeitados na área de estética automotiva.
            </p>
            <p className="text-gray-300">
              Estou constantemente me atualizando com as mais recentes técnicas e produtos do mercado, garantindo que
              cada veículo receba o melhor tratamento possível. Minha missão é não apenas melhorar a aparência do seu
              carro, mas também protegê-lo e preservar seu valor ao longo do tempo.
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

