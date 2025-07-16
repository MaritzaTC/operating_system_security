import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { ArrowLeft, Skull, Target, AlertTriangle, Monitor, CheckCircle, Info } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function KaliLinuxPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/linux">
              <Button
                size="sm"
                className="text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:opacity-90"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-purple-700 bg-opacity-20 rounded-lg">
                <Skull className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Reporte: Análisis de Seguridad con Kali Linux</h1>
                <p className="text-slate-400 text-sm">Evaluación de herramientas de pentesting en entorno controlado</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Overview */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-white text-2xl mb-2">Kali Linux</CardTitle>
                <CardDescription className="text-slate-300 text-base">
                  Kali Linux es una distribución especializada en seguridad informática y penetration testing.
                  Análisis de herramientas de pentesting y configuración de entorno de trabajo.
                </CardDescription>
              </div>
              <Badge variant="secondary" className="bg-gradient-to-r from-purple-500 to-purple-700 text-white">
                Avanzado
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-slate-400">Sistema Operativo:</span>
                <p className="text-white font-medium">Debian-based</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introducción de la Máquina Virtual */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Monitor className="w-5 h-5" />
                  Introducción: Configuración del Entorno Virtual
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Para este análisis de seguridad, se implementó una máquina virtual con Kali Linux 2024.1 
                    ejecutándose en un entorno controlado. La virtualización permite realizar pruebas de 
                    penetración de manera segura sin comprometer sistemas de producción.
                  </p>
                  
                  <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
                    <h4 className="text-white font-medium mb-3">Especificaciones del Entorno:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="space-y-1">
                        <p className="text-slate-400">Hipervisor:</p>
                        <p className="text-white">VMware Workstation / VirtualBox</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-slate-400">RAM Asignada:</p>
                        <p className="text-white">4 GB</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-slate-400">Almacenamiento:</p>
                        <p className="text-white">25 GB SSD</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-slate-400">Red:</p>
                        <p className="text-white">NAT/Bridged (192.168.101.x)</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-sm leading-relaxed">
                    La configuración de red permite el acceso a objetivos locales mientras mantiene el 
                    aislamiento necesario para pruebas de seguridad. Se establecieron controles de acceso 
                    apropiados para evitar impactos no deseados en la infraestructura de red.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Objetivos */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Objetivos del Análisis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                        "Acceder y configurar el entorno de Kali Linux",
                        "Realizar escaneos de red y enumeración de hosts",
                        "Simular un ataque DDoS en entorno controlado",
                        "Evaluar la efectividad de las herramientas de pentesting",
                        "Documentar vulnerabilidades identificadas"
                      ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Procedimiento Paso a Paso */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Configuración y Análisis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {[
                  {
                    title: "1. Acceso al Sistema de Ataque",
                    description: "Pantalla de inicio de sesión en Kali Linux para autenticar al usuario antes de ejecutar herramientas de pentesting.",
                    command: "",
                    imageSrc: "/assets/kali1.png",
                    imageText: "Pantalla de inicio de sesión de Kali Linux",
                  },
                  {
                    title: "2. Escaneo de Red y Enumeración de Hosts",
                    description: "Se realiza un escaneo con Nmap para identificar hosts activos, direcciones MAC y puertos abiertos en la red.",
                    command: "sudo nmap -A -T4 192.168.101.26",
                    imageSrc: "/assets/kali 2.png",
                    imageText: "Resultado del escaneo de red con Nmap",
                  },
                  {
                    title: "3. Ataque DDoS Simulado",
                    description: "Se configura y lanza un ataque DDoS de prueba hacia un objetivo controlado para medir la capacidad de respuesta.",
                    command: "sudo hping3 -S --flood -p 80 192.168.101.26",
                    videoSrc: "/assets/Ddos.mp4",
                    videoAlt: "Demostración de ataque DDoS simulado",
                  },
                ].map((step, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                    <p className="text-slate-300 text-sm">{step.description}</p>
                    {step.command && (
                      <div className="bg-slate-900 rounded-lg p-3 border border-slate-600 w-fit">
                        <code className="text-purple-400 text-sm font-mono">{step.command}</code>
                      </div>
                    )}
                    <div className="bg-slate-700 rounded-lg p-4 text-center space-y-2">
                      {step.imageSrc && (
                        <>
                          <Image
                            src={step.imageSrc}
                            alt={step.imageText}
                            width={600}
                            height={300}
                            className="mx-auto rounded-md border border-slate-600"
                          />
                          <p className="text-slate-400 text-xs">{step.imageText}</p>
                        </>
                      )}
                      {step.videoSrc && (
                        <>
                          <video controls className="rounded-md border border-slate-600 w-full max-w-2xl mx-auto">
                            <source src={step.videoSrc} type="video/mp4" />
                            Tu navegador no soporta la reproducción de video.
                          </video>
                          <p className="text-slate-400 text-xs">{step.videoAlt}</p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Conclusiones */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Conclusiones y Resultados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-medium mb-2">Hallazgos Principales:</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span>El ataque DDoS simulado demostró la capacidad de saturar el objetivo, evidenciando falta de protección contra ataques de denegación de servicio</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-2">Evaluación de Herramientas:</h4>
                    <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-purple-400 font-medium">Nmap</p>
                          <p className="text-slate-300">Excelente para reconnaissance y enumeración de servicios</p>
                        </div>
                        <div>
                          <p className="text-purple-400 font-medium">hping3</p>
                          <p className="text-slate-300">Efectivo para pruebas de estrés y análisis de red</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-2">Recomendaciones de Seguridad:</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Implementar firewall con reglas restrictivas para limitar el acceso a puertos no esenciales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Configurar sistemas de detección y prevención de intrusiones (IDS/IPS)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Establecer rate limiting y protección anti-DDoS en servicios críticos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Realizar auditorías de seguridad regulares y mantener sistemas actualizados</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
                    <div className="flex items-center gap-2 mb-2">
                      <Info className="w-4 h-4 text-blue-400" />
                      <span className="text-white font-medium">Nota Importante</span>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Este análisis se realizó en un entorno controlado con fines educativos y de investigación. 
                      Las técnicas demostradas deben utilizarse únicamente en sistemas propios o con autorización 
                      explícita del propietario. El uso no autorizado de estas herramientas constituye una 
                      violación de la ley y políticas de seguridad.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Herramientas */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-lg">Herramientas Principales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                          "Nmap", 
                          "hping3"
                        ].map((tool) => (
                    <Badge key={tool} variant="outline" className="text-slate-300 border-slate-600">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Categorías */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-lg flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Vulnerabilidades Identificadas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                    {
                      name: "Ataques de Red (Network Attacks)",
                      severity: "Alta"
                    },
                    {
                      name: "Exposición a Enumeración",
                      severity: "Media"
                    },
                    {
                      name: "Falta de Protección DDoS",
                      severity: "Alta"
                    }
                  ].map((category, index) => (
                  <div key={index} className="border border-slate-600 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white text-sm font-medium">{category.name}</span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          category.severity === 'Alta' ? 'text-red-400 border-red-400' : 
                          category.severity === 'Media' ? 'text-yellow-400 border-yellow-400' : 
                          'text-green-400 border-green-400'
                        }`}
                      >
                        {category.severity}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Resumen Estadístico */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-lg">Resumen del Análisis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Hosts Analizados:</span>
                    <span className="text-white">1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Vulnerabilidades:</span>
                    <span className="text-red-400">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Herramientas Usadas:</span>
                    <span className="text-white">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Tiempo de Análisis:</span>
                    <span className="text-white">~45 min</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}