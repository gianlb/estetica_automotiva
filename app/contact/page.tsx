"use client"

import { motion } from "framer-motion"
import Layout from "../components/Layout"
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react"

export default function Contact() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Entre em Contato
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-background-lighter p-8 rounded-lg border border-primary/20 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-semibold mb-6 text-white">Informações de Contato</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <Clock className="text-primary w-6 h-6 mr-4 flex-shrink-0" />
              <div>
                <p className="font-medium text-white">Horário de Funcionamento</p>
                <p className="text-white/70">Segunda a Sábado: 8h às 18h</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="text-primary w-6 h-6 mr-4 flex-shrink-0" />
              <div>
                <p className="font-medium text-white">Telefone</p>
                <p className="text-white/70">(11) 94928-4012</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="text-primary w-6 h-6 mr-4 flex-shrink-0" />
              <div>
                <p className="font-medium text-white">E-mail</p>
                <p className="text-white/70">contato@dreamswash.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="text-primary w-6 h-6 mr-4 flex-shrink-0" />
              <div>
                <p className="font-medium text-white">Endereço</p>
                <p className="text-white/70">São Paulo, SP</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://wa.me/5511949284012"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
            >
              Fale conosco no WhatsApp
              <MessageCircle className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}

