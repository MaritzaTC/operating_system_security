import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { ArrowLeft, Terminal, Target, AlertTriangle, Monitor, CheckCircle, Info, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DC1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/linux">
              <Button
                size="sm"
                className="text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-700 bg-opacity-20 rounded-lg">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Reporte: Análisis de Seguridad DC-1</h1>
                <p className="text-slate-400 text-sm">Evaluación de vulnerabilidades en sistema Drupal CMS</p>
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
                <CardTitle className="text-white text-2xl mb-2">DC-1 Challenge</CardTitle>
                <CardDescription className="text-slate-300 text-base">
                  DC-1 es un desafío de captura la bandera (CTF) diseñado para evaluar técnicas de pentesting 
                  web, específicamente contra aplicaciones basadas en Drupal CMS. El objetivo es demostrar 
                  vectores de ataque comunes y vulnerabilidades en sistemas de gestión de contenido.
                </CardDescription>
              </div>
              <Badge variant="secondary" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                Intermedio
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-slate-400">Sistema Operativo:</span>
                <p className="text-white font-medium">Debian</p>
              </div>
              <div>
                <span className="text-slate-400">CMS:</span>
                <p className="text-white font-medium">Drupal 7.x</p>
              </div>
              <div>
                <span className="text-slate-400">IP Objetivo:</span>
                <p className="text-white font-medium">192.168.101.24</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introducción del Entorno */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Monitor className="w-5 h-5" />
                  Introducción: Configuración del Entorno de Pruebas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    El DC-1 Challenge es un entorno de laboratorio diseñado específicamente para practicar 
                    técnicas de penetration testing contra aplicaciones web. Este sistema ejecuta Drupal 7, 
                    un CMS popular conocido por tener vulnerabilidades críticas que pueden ser explotadas 
                    mediante técnicas de reconocimiento y ataques dirigidos.
                  </p>
                  
                  <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
                    <h4 className="text-white font-medium mb-3">Especificaciones del Objetivo:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="space-y-1">
                        <p className="text-slate-400">Distribución:</p>
                        <p className="text-white">Debian GNU/Linux</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-slate-400">Servidor Web:</p>
                        <p className="text-white">Apache HTTP Server</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-slate-400">CMS:</p>
                        <p className="text-white">Drupal 7.x</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-slate-400">Base de Datos:</p>
                        <p className="text-white">MySQL</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-sm leading-relaxed">
                    El entorno está configurado en una red local aislada, permitiendo la ejecución de técnicas 
                    de ataque sin riesgo para sistemas de producción. Se utilizan herramientas estándar de 
                    pentesting para demostrar una metodología completa de evaluación de seguridad.
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
                    "Realizar reconocimiento de red para identificar hosts activos",
                    "Enumerar servicios web y detectar el CMS Drupal",
                    "Explotar vulnerabilidades críticas en Drupal 7",
                    "Obtener acceso remoto al sistema objetivo",
                    "Extraer credenciales de base de datos",
                    "Comprometer cuentas de usuario mediante cracking de contraseñas",
                    "Documentar el proceso completo de pentesting"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Metodología de Pentesting */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Metodología y Ejecución del Pentesting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {[
                  {
                    title: "1. Fase de Reconocimiento: Descubrimiento de Hosts",
                    description: "Se inicia el proceso de reconocimiento mediante un escaneo ARP para identificar todos los dispositivos activos en la red local, estableciendo el perímetro de ataque.",
                    command: "arp-scan --localnet",
                    imageText: "Identificación del host objetivo con IP 192.168.101.24 mediante escaneo ARP",
                    imageSrc: "/assets/dc1.png",
                  },
                  {
                    title: "2. Enumeración de Servicios y Detección de Tecnologías",
                    description: "Se ejecuta un escaneo exhaustivo con Nmap para identificar servicios activos, versiones de software y posibles vectores de ataque en el host objetivo.",
                    command: "nmap -A -T4 192.168.101.24",
                    imageText: "Detección de Apache HTTP Server con Drupal 7 ejecutándose en el puerto 80",
                    imageSrc: "/assets/dc2.png",
                  },
                  {
                    title: "3. Búsqueda de Exploits Específicos",
                    description: "Utilizando Metasploit Framework, se buscan exploits conocidos para la versión específica de Drupal detectada, priorizando aquellos con mayor efectividad.",
                    command: "search Drupal",
                    imageText: "Selección del exploit 'drupal_drupalgeddon2' con ranking de excelencia",
                    imageSrc: "/assets/dc3.png",
                  },
                  {
                    title: "4. Explotación Remota: Drupalgeddon2",
                    description: "Se ejecuta el exploit Drupalgeddon2 contra el servidor Drupal, aprovechando una vulnerabilidad de ejecución remota de código para obtener acceso al sistema.",
                    command: "use exploit/unix/webapp/drupal_drupalgeddon2",
                    imageText: "Establecimiento exitoso de sesión Meterpreter en el servidor objetivo",
                    imageSrc: "/assets/dc4.png",
                  },
                  {
                    title: "5. Extracción de Credenciales de Base de Datos",
                    description: "Una vez dentro del sistema, se accede al archivo de configuración de Drupal para extraer las credenciales de conexión a la base de datos MySQL.",
                    command: "cat sites/default/settings.php",
                    imageText: "Revelación de credenciales de MySQL: usuario 'dbuser' con contraseña 'R0ck3t'",
                    imageSrc: "/assets/dc5.png",
                  },
                  {
                    title: "6. Acceso a Base de Datos MySQL",
                    description: "Utilizando las credenciales extraídas, se establece conexión directa con la base de datos MySQL para acceder a información sensible almacenada.",
                    command: "mysql -u dbuser -p",
                    imageText: "Acceso exitoso a MySQL y listado de bases de datos disponibles",
                    imageSrc: "/assets/dc6.png",
                  },
                  {
                    title: "7. Enumeración de Estructura de Base de Datos",
                    description: "Se explora la estructura completa de la base de datos 'drupaldb' para identificar tablas críticas que contengan información de usuarios y credenciales.",
                    command: "SHOW TABLES;",
                    imageText: "Listado completo de tablas en la base de datos, incluyendo la tabla 'users'",
                    imageSrc: "/assets/dc7.png",
                  },
                  {
                    title: "8. Análisis de Tabla de Usuarios",
                    description: "Se examina la tabla 'users' para extraer información de cuentas de usuario, incluyendo nombres de usuario y hashes de contraseñas almacenados.",
                    command: "SELECT * FROM users;",
                    imageText: "Extracción de hashes de contraseñas de usuarios, incluyendo la cuenta 'admin'",
                    imageSrc: "/assets/dc8.png",
                  },
                  {
                    title: "9. Ataque de Diccionario con Hashcat",
                    description: "Se utiliza Hashcat para realizar un ataque de diccionario contra los hashes extraídos, empleando la lista de contraseñas RockYou para el proceso de cracking.",
                    command: "hashcat -m 7900 hash.txt /usr/share/wordlists/rockyou.txt",
                    imageText: "Configuración de Hashcat para el cracking de hashes Drupal 7",
                    imageSrc: "/assets/dc9.png",
                  },
                  {
                    title: "10. Compromiso Exitoso de Credenciales",
                    description: "El proceso de cracking resulta exitoso, revelando la contraseña en texto plano del usuario administrador, completando el compromiso del sistema.",
                    command: "hashcat --show hash.txt",
                    imageText: "Revelación exitosa de la contraseña del administrador: '53cr3t'",
                    imageSrc: "/assets/dc10.png",
                  },
                ].map((step, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                    <p className="text-slate-300 text-sm">{step.description}</p>
                    {step.command && (
                      <div className="bg-slate-900 rounded-lg p-3 border border-slate-600 w-fit">
                        <code className="text-blue-400 text-sm font-mono">{step.command}</code>
                      </div>
                    )}
                    <div className="bg-slate-700 rounded-lg p-4 text-center space-y-2">
                      <Image
                        src={step.imageSrc}
                        alt={step.imageText}
                        width={600}
                        height={300}
                        className="mx-auto rounded-md border border-slate-600"
                      />
                      <p className="text-slate-400 text-xs">{step.imageText}</p>
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
                  Conclusiones y Análisis de Resultados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-medium mb-2">Hallazgos Críticos:</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Vulnerabilidad crítica CVE-2018-7600 (Drupalgeddon2) permite ejecución remota de código sin autenticación</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Exposición de credenciales de base de datos en archivo de configuración accesible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Uso de contraseñas débiles susceptibles a ataques de diccionario en menos de 10 minutos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Falta de segmentación de red permitiendo acceso directo a servicios internos</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-2">Impacto de Seguridad:</h4>
                    <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-red-400 font-medium">Compromiso Total</p>
                          <p className="text-slate-300">Acceso root al sistema operativo</p>
                        </div>
                        <div>
                          <p className="text-red-400 font-medium">Exposición de Datos</p>
                          <p className="text-slate-300">Acceso completo a base de datos</p>
                        </div>
                        <div>
                          <p className="text-red-400 font-medium">Escalación de Privilegios</p>
                          <p className="text-slate-300">Credenciales de administrador comprometidas</p>
                        </div>
                        <div>
                          <p className="text-red-400 font-medium">Persistencia</p>
                          <p className="text-slate-300">Capacidad de mantener acceso indefinido</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-2">Recomendaciones de Remediación:</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Actualizar inmediatamente Drupal a la versión más reciente con parches de seguridad</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Implementar políticas de contraseñas robustas con autenticación multifactor</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Configurar permisos restrictivos en archivos de configuración críticos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Implementar Web Application Firewall (WAF) para filtrar ataques web</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Establecer monitoreo de seguridad y sistema de detección de intrusiones</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
                    <div className="flex items-center gap-2 mb-2">
                      <Info className="w-4 h-4 text-blue-400" />
                      <span className="text-white font-medium">Nota de Responsabilidad</span>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Este análisis de seguridad se realizó en un entorno de laboratorio controlado con fines 
                      educativos y de investigación. Las técnicas demostradas deben utilizarse exclusivamente 
                      en sistemas propios o con autorización explícita del propietario. El uso no autorizado 
                      de estas técnicas constituye una violación de la ley y políticas de seguridad.
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
                <CardTitle className="text-white text-lg">Herramientas de Pentesting</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "arp-scan", 
                    "Nmap", 
                    "Metasploit", 
                    "Hashcat", 
                    "MySQL",
                    "Meterpreter"
                  ].map((tool) => (
                    <Badge key={tool} variant="outline" className="text-slate-300 border-slate-600">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Vulnerabilidades */}
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
                    name: "CVE-2018-7600 (Drupalgeddon2)",
                    severity: "Crítica"
                  },
                  {
                    name: "Exposición de Credenciales",
                    severity: "Alta"
                  },
                  {
                    name: "Contraseñas Débiles",
                    severity: "Alta"
                  },
                  {
                    name: "Falta de Segmentación de Red",
                    severity: "Media"
                  }
                ].map((vuln, index) => (
                  <div key={index} className="border border-slate-600 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white text-sm font-medium">{vuln.name}</span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          vuln.severity === 'Crítica' ? 'text-red-400 border-red-400' :
                          vuln.severity === 'Alta' ? 'text-orange-400 border-orange-400' : 
                          vuln.severity === 'Media' ? 'text-yellow-400 border-yellow-400' : 
                          'text-green-400 border-green-400'
                        }`}
                      >
                        {vuln.severity}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Estadísticas del Pentesting */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-lg">Métricas del Análisis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Hosts Comprometidos:</span>
                    <span className="text-white">1/1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Vulnerabilidades Críticas:</span>
                    <span className="text-red-400">1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Credenciales Extraídas:</span>
                    <span className="text-orange-400">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Tiempo Total:</span>
                    <span className="text-white">~2 horas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Nivel de Acceso:</span>
                    <span className="text-red-400">Root</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Clasificación de Riesgo */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-lg flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Evaluación de Riesgo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-1">CRÍTICO</div>
                    <div className="text-slate-400 text-sm">Nivel de Riesgo General</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Confidencialidad:</span>
                      <span className="text-red-400">Comprometida</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Integridad:</span>
                      <span className="text-red-400">Comprometida</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Disponibilidad:</span>
                      <span className="text-red-400">En Riesgo</span>
                    </div>
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