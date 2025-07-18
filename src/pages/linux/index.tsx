import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card"
import { Button } from "@/components/button"
import { Shield, Terminal, Zap, Skull } from "lucide-react"
import Link from "next/link"

const machines = [
  {
    id: "metasploitable2",
    name: "Metasploitable 2",
    description: "Máquina virtual intencionalmente vulnerable para práctica de penetration testing",
    icon: Shield,
    difficulty: "Muy Vulnerable",
    os: "Ubuntu 8.04",
   
    color: "from-red-500 to-red-700",
  },
  {
    id: "dc1",
    name: "DC-1",
    description: "Desafío de captura la bandera con múltiples vectores de ataque",
    icon: Terminal,
    difficulty: "Vulnerable",
    os: "Debian",

    color: "from-blue-500 to-blue-700",
  },
  {
    id: "basic-pentesting1",
    name: "Basic Pentesting 1",
    description: "Introducción práctica a técnicas básicas de pentesting",
    icon: Zap,
    difficulty: "Vulnerable",
    os: "Ubuntu",
    
    color: "from-green-500 to-green-700",
  },
  {
    id: "kali-linux",
    name: "Kali Linux",
    description: "Distribución especializada en seguridad y pentesting",
    icon: Skull,
    difficulty: "No muy Vulnerable",
    os: "Debian-based",
   
    color: "from-purple-500 to-purple-700",
  },
]

export default function LinuxHomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <Shield className="w-8 h-8 text-red-500" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Linux Security Lab</h1>
                <p className="text-slate-500">Penetration Testing Documentation</p>
              </div>
            </div>

            
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Linux Vulnerability
            <span className="block text-red-500">Assessment</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Documentación completa de penetration testing realizado en 4 máquinas virtuales Linux
          </p>
        </div>
      </section>

      {/* Machines Grid */}
      <section className="py-4 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Máquinas Vulneradas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {machines.map((machine) => {
              const IconComponent = machine.icon
              return (
                <Card
                  key={machine.id}
                  className="bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${machine.color} bg-opacity-20`}>
                        <IconComponent className="w-8 h-8 text-slate-900" />
                      </div>
                      <span className="px-2 py-1 text-xs bg-slate-200 text-slate-700 rounded-full">
                        {machine.difficulty}
                      </span>
                    </div>
                    <CardTitle className="text-slate-900 text-xl">{machine.name}</CardTitle>
                    <CardDescription className="text-slate-600">{machine.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Sistema Operativo:</span>
                        <span className="text-slate-700">{machine.os}</span>
                      </div>
                    </div>
                    <Link href={`/linux/${machine.id}`} className="block">
                      <Button
                        className={`w-full bg-gradient-to-r ${machine.color} hover:opacity-90 transition-opacity text-white`}
                      >
                        Ver Reporte Completo
                        <Terminal className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-slate-500">© 2024 Linux Security Lab - Penetration Testing Documentation</p>
          <p className="text-slate-400 text-sm mt-2">
            Realizado con fines educativos y de investigación en seguridad informática
          </p>
        </div>
      </footer>
    </div>
  )
}