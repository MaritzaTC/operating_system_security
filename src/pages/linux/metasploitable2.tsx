import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Target, AlertTriangle, Monitor, CheckCircle, Info } from "lucide-react"
import Image from "next/image"

export default function Metasploitable2Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-300 bg-gray-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button
              size="sm"
              className="text-white bg-gradient-to-r from-red-500 to-red-700 hover:opacity-90"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-red-500 to-red-700 bg-opacity-20 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Reporte: Análisis de Vulnerabilidades en Metasploitable 2</h1>
                <p className="text-gray-600 text-sm">Evaluación completa de penetration testing en entorno controlado</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Overview */}
        <Card className="bg-white border-gray-300 mb-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-gray-900 text-2xl mb-2">Metasploitable 2</CardTitle>
                <CardDescription className="text-gray-700 text-base">
                  Metasploitable 2 es una máquina virtual Linux intencionalmente vulnerable, diseñada para la práctica
                  de técnicas de penetration testing y evaluación de seguridad.
                </CardDescription>
              </div>
              <Badge variant="secondary" className="bg-gradient-to-r from-red-500 to-red-700 text-white">
                Principiante
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Sistema Operativo:</span>
                <p className="text-gray-900 font-medium">Ubuntu 8.04</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introducción de la Máquina Virtual */}
            <Card className="bg-white border-gray-300">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <Monitor className="w-5 h-5" />
                  Introducción: Configuración del Entorno de Pruebas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Metasploitable 2 es una máquina virtual Linux basada en Ubuntu 8.04, desarrollada por Rapid7
                    como plataforma de entrenamiento para técnicas de penetration testing. Esta distribución
                    contiene múltiples vulnerabilidades conocidas que permiten practicar diferentes vectores
                    de ataque en un entorno controlado y legal.
                  </p>
                  
                  <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                    <h4 className="text-gray-900 font-medium mb-3">Configuración del Laboratorio:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="space-y-1">
                        <p className="text-gray-600">Máquina Objetivo:</p>
                        <p className="text-gray-900">Metasploitable 2 (192.168.101.21)</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-600">Máquina Atacante:</p>
                        <p className="text-gray-900">Kali Linux (192.168.101.26)</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-600">Red Virtual:</p>
                        <p className="text-gray-900">192.168.101.0/24</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-600">Conectividad:</p>
                        <p className="text-gray-900">Bridged Network</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    El entorno de laboratorio está diseñado para ser completamente aislado, permitiendo la
                    ejecución segura de exploits y técnicas de pentesting sin riesgo para sistemas de
                    producción. La configuración de red facilita la comunicación entre atacante y víctima
                    mientras mantiene el control sobre el alcance del análisis.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Objetivos */}
            <Card className="bg-white border-gray-300">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Objetivos del Análisis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Identificar servicios vulnerables mediante enumeración",
                    "Explotar vulnerabilidades conocidas usando Metasploit Framework",
                    "Obtener acceso root a través de múltiples vectores",
                    "Documentar técnicas de post-explotación",
                    "Evaluar la efectividad de diferentes métodos de ataque",
                    "Demostrar escalamiento de privilegios"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Procedimiento Paso a Paso */}
            <Card className="bg-white border-gray-300">
              <CardHeader>
                <CardTitle className="text-gray-900">Procedimiento de Pentesting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {[
                  {
                    title: "1. Verificación de Dirección IP en la Víctima",
                    description: "Obtención de la IP de la máquina Metasploitable mediante ip addr.",
                    command: "ip addr",
                    imageText: "Dirección IP local identificada",
                    imageSrc: "/assets/metas1.png",
                  },
                  {
                    title: "2. Verificación de IP y Conectividad desde Kali",
                    description: "Se comprueba la IP local del atacante y se verifica conexión a la víctima con ping.",
                    command: "ping 192.168.101.21",
                    imageText: "Conectividad confirmada",
                    imageSrc: "/assets/metas2.png",
                  },
                  {
                    title: "3. Escaneo de Servicios con Nmap",
                    description: "Escaneo de puertos y servicios activos en la máquina víctima.",
                    command: "nmap -sV -Pn 192.168.101.21",
                    imageText: "Servicios y versiones detectadas",
                    imageSrc: "/assets/metas3.png",
                  },
                  {
                    title: "4. Acceso al Servicio FTP",
                    description: "Autenticación en FTP y exploración del sistema de archivos.",
                    command: "ftp 192.168.101.21",
                    imageText: "Estructura de directorios vía FTP",
                    imageSrc: "/assets/metas4.png",
                  },
                  {
                    title: "5. Búsqueda de Módulo vsftpd en Metasploit",
                    description: "Búsqueda del módulo vulnerable vsftpd_234_backdoor en Metasploit Framework.",
                    command: "search vsftpd",
                    imageText: "Módulo vsftpd identificado",
                    imageSrc: "/assets/metas5.png",
                  },
                  {
                    title: "6. Ejecución del Exploit vsftpd",
                    description: "Configuración y ejecución del módulo para obtener shell remota como root.",
                    command: "use exploit/unix/ftp/vsftpd_234_backdoor",
                    imageText: "Shell root obtenida con Metasploit",
                    imageSrc: "/assets/metas6.png",
                  },
                  {
                    title: "7. Acceso por Telnet",
                    description: "Acceso directo a la máquina víctima mediante Telnet usando las credenciales obtenidas.",
                    command: "telnet 192.168.101.21",
                    imageText: "Inicio de sesión por Telnet exitoso",
                    imageSrc: "/assets/metas7.png",
                  },
                  {
                    title: "8. Ataque por Fuerza Bruta a VNC",
                    description: "Uso de Metasploit para intentar acceso por VNC, con resultado exitoso.",
                    command: "use auxiliary/scanner/vnc/vnc_login",
                    imageText: "Contraseña descubierta en VNC",
                    imageSrc: "/assets/metas8.png",
                  },
                  {
                    title: "9. Acceso al Escritorio VNC",
                    description: "Conexión VNC exitosa con autenticación y visualización del entorno gráfico remoto.",
                    command: "vncviewer 192.168.101.21",
                    imageText: "Escritorio remoto accesible",
                    imageSrc: "/assets/metas9.png",
                  },
                  {
                    title: "10. Exploración del Sistema desde Escritorio Remoto",
                    description: "Navegación por el sistema de archivos desde la terminal en entorno gráfico.",
                    command: "",
                    imageText: "Directorios del sistema listados en escritorio remoto",
                    imageSrc: "/assets/metas10.png",
                  },
                  {
                    title: "11. Enumeración de Módulos PostgreSQL",
                    description: "Búsqueda de exploits o auxiliares relacionados con PostgreSQL.",
                    command: "search PostgreSQL",
                    imageText: "Listado de módulos encontrados",
                    imageSrc: "/assets/metas11.png",
                  },
                  {
                    title: "12. Configuración de Exploit PostgreSQL",
                    description: "Preparación del exploit con opciones de objetivo y payload.",
                    command: "",
                    imageText: "Parámetros del módulo configurados",
                    imageSrc: "/assets/metas12.png",
                  },
                  {
                    title: "13. Ejecución del Exploit PostgreSQL",
                    description: "Obtención de sesión Meterpreter en el servidor PostgreSQL.",
                    command: "",
                    imageText: "Sesión Meterpreter abierta",
                    imageSrc: "/assets/metas13.png",
                  },
                  {
                    title: "14. Búsqueda de Exploits Apache Tomcat",
                    description: "Enumeración de módulos disponibles para Apache Tomcat.",
                    command: "search apache tomcat",
                    imageText: "Listado de exploits para Tomcat",
                    imageSrc: "/assets/metas14.png",
                  },
                  {
                    title: "15. Fuerza Bruta de Credenciales Tomcat",
                    description: "Prueba de credenciales para acceso al Manager de Tomcat.",
                    command: "",
                    imageText: "Credenciales encontradas",
                    imageSrc: "/assets/metas15.png",
                  },
                  {
                    title: "16. Configuración de Exploit Tomcat",
                    description: "Carga del payload en el Manager de Tomcat usando credenciales válidas",
                    command: "",
                    imageText: "Opciones del exploit configuradas",
                    imageSrc: "/assets/metas16.png",
                  },
                  {
                    title: "17. Obtención de Shell en Servidor Tomcat",
                    description: "Ejecución exitosa del exploit para obtener shell remoto.",
                    command: "",
                    imageText: "Shell interactivo abierto",
                    imageSrc: "/assets/metas17.png",
                  },
                  {
                    title: "18. Navegación en Sistema Objetivo",
                    description: "Comandos para explorar el sistema comprometido vía shell.",
                    command: "",
                    imageText: "Estructura de directorios listada",
                    imageSrc: "/assets/metas18.png",
                  },
                ].map((step, index) => {
                  const criticalSteps = [
                    "4. Acceso al Servicio FTP",
                    "5. Búsqueda de Módulo vsftpd en Metasploit",
                    "6. Ejecución del Exploit vsftpd",
                    "7. Acceso por Telnet",
                    "8. Ataque por Fuerza Bruta a VNC",
                    "11. Enumeración de Módulos PostgreSQL",
                    "13. Ejecución del Exploit PostgreSQL",
                    "14. Búsqueda de Exploits Apache Tomcat",
                    "17. Obtención de Shell en Servidor Tomcat"
                  ];

                  const isCritical = criticalSteps.includes(step.title);

                  return (
                    <div key={index} className="space-y-3">
                      <h4 className={`text-lg font-semibold ${isCritical ? "text-red-600" : "text-gray-900"}`}>
                        {step.title}
                      </h4>
                      <p className="text-gray-700 text-sm">{step.description}</p>
                      {step.command && (
                        <div className="bg-gray-100 rounded-lg p-3 border border-gray-200 w-fit">
                          <code className="text-red-600 text-sm font-mono">{step.command}</code>
                        </div>
                      )}
                      <div className="bg-gray-100 rounded-lg p-4 text-center space-y-2 border border-gray-200">
                        <Image
                                                src={step.imageSrc}
                                                alt={step.imageText}
                                                width={600}
                                                height={300}
                                                className="mx-auto rounded-md border border-gray-300"
                                              />
                        <p className="text-gray-600 text-xs">{step.imageText}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Conclusiones */}
            <Card className="bg-white border-gray-300">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Conclusiones y Análisis de Resultados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-gray-900 font-medium mb-2">Vectores de Ataque Exitosos:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                        <span><strong>FTP vsftpd 2.3.4:</strong> Backdoor explotado exitosamente para obtener shell root directo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                        <span><strong>VNC:</strong> Acceso sin autenticación permitió control total del escritorio remoto</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                        <span><strong>PostgreSQL:</strong> Configuración insegura permitió ejecución de código y sesión Meterpreter</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                        <span><strong>Apache Tomcat:</strong> Credenciales por defecto comprometieron el servidor de aplicaciones</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                        <span><strong>Telnet:</strong> Protocolo inseguro con credenciales débiles facilitó acceso remoto</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-gray-900 font-medium mb-2">Evaluación de Herramientas:</h4>
                    <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-red-600 font-medium">Metasploit Framework</p>
                          <p className="text-gray-700">Herramienta principal para explotación automatizada y post-explotación</p>
                        </div>
                        <div>
                          <p className="text-red-600 font-medium">Nmap</p>
                          <p className="text-gray-700">Fundamental para enumeración inicial y identificación de servicios</p>
                        </div>
                        <div>
                          <p className="text-red-600 font-medium">VNC Viewer</p>
                          <p className="text-gray-700">Acceso gráfico remoto para análisis visual del sistema</p>
                        </div>
                        <div>
                          <p className="text-red-600 font-medium">Clientes FTP/Telnet</p>
                          <p className="text-gray-700">Herramientas básicas para validación de acceso y exploración</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-gray-900 font-medium mb-2">Impacto y Severidad:</h4>
                    <div className="bg-gray-100 rounded-lg p-4 border border-gray-200 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-red-600 font-medium">CRÍTICO</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Múltiples vectores de ataque permitieron comprometer completamente el sistema objetivo.
                        Se obtuvo acceso root a través de al menos 4 servicios diferentes, demostrando una
                        superficie de ataque extremadamente amplia.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-gray-900 font-medium mb-2">Recomendaciones de Mitigación:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span>Actualizar inmediatamente vsftpd a una versión sin backdoor conocido</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span>Configurar autenticación robusta en VNC y limitar acceso por IP</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span>Deshabilitar Telnet y migrar a SSH con autenticación por clave</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span>Cambiar credenciales por defecto en PostgreSQL y Tomcat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span>Implementar segmentación de red y firewall con reglas restrictivas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span>Establecer monitoreo continuo y sistemas de detección de intrusiones</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Info className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-900 font-medium">Contexto Educativo</span>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Metasploitable 2 está diseñado intencionalmente para ser vulnerable con fines educativos.
                      Las múltiples vulnerabilidades identificadas representan casos de estudio reales de
                      problemas de seguridad comunes en sistemas empresariales. Este análisis demuestra la
                      importancia de mantener sistemas actualizados y configurados correctamente.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Herramientas */}
            <Card className="bg-white border-gray-300">
              <CardHeader>
                <CardTitle className="text-gray-900 text-lg">Herramientas Utilizadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Nmap",
                    "Metasploit",
                    "FTP Client",
                    "Telnet",
                    "VNC Viewer",
                  ].map((tool) => (
                    <Badge
                      key={tool}
                      variant="outline"
                      className="text-gray-700 border-gray-400"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Vulnerabilidades */}
            <Card className="bg-white border-gray-300">
              <CardHeader>
                <CardTitle className="text-gray-900 text-lg flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Vulnerabilidades Identificadas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "FTP vsftpd 2.3.4 Backdoor", severity: "Crítica" },
                  { name: "VNC sin autenticación", severity: "Alta" },
                  { name: "PostgreSQL mal configurado", severity: "Alta" },
                  { name: "Apache Tomcat credenciales por defecto", severity: "Alta" },
                  { name: "Telnet con credenciales débiles", severity: "Media" },
                ].map((vuln, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-3"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-900 text-sm font-medium">{vuln.name}</span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          vuln.severity === 'Crítica' ? 'text-red-600 border-red-600' : 
                          vuln.severity === 'Alta' ? 'text-orange-600 border-orange-600' :
                          vuln.severity === 'Media' ? 'text-yellow-600 border-yellow-600' : 
                          'text-green-600 border-green-600'
                        }`}
                      >
                        {vuln.severity}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Resumen Estadístico */}
            <Card className="bg-white border-gray-300">
              <CardHeader>
                <CardTitle className="text-gray-900 text-lg">Resumen del Análisis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Servicios Analizados:</span>
                    <span className="text-gray-900">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vulnerabilidades:</span>
                    <span className="text-red-600">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Exploits Exitosos:</span>
                    <span className="text-red-600">4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shells Obtenidos:</span>
                    <span className="text-red-600">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tiempo de Compromiso:</span>
                    <span className="text-gray-900">~2 horas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nivel de Acceso:</span>
                    <span className="text-red-600">Root</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Metodología OWASP */}
            <Card className="bg-white border-gray-300">
              <CardHeader>
                <CardTitle className="text-gray-900 text-lg">Metodología Aplicada</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    <span className="text-gray-700">Reconocimiento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    <span className="text-gray-700">Enumeración</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    <span className="text-gray-700">Explotación</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    <span className="text-gray-700">Post-explotación</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    <span className="text-gray-700">Documentación</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recomendaciones de Seguimiento */}
              <Card className="bg-white border border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900 text-lg">
                    Recomendaciones de Seguimiento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {[
                      "Reforzar políticas de contraseñas y autenticación multifactor en todos los servicios expuestos.",
                      "Implementar escaneos periódicos de vulnerabilidades internas y externas.",
                      "Aplicar actualizaciones y parches de seguridad de forma proactiva.",
                      "Capacitar al equipo de TI en respuesta ante incidentes y análisis forense.",
                      "Simular ataques regularmente mediante ejercicios de Red Team / Blue Team."
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

          </div>
        </div>
      </div>
    </div>
  )
}