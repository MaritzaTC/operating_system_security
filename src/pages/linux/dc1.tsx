import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Terminal, Target, AlertTriangle, Monitor, CheckCircle, Info, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DC1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
              <Link href="/linux">
            <Button
              size="sm"
              className="text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Reporte: Análisis de Seguridad DC-1</h1>
                <p className="text-gray-600 text-sm">Evaluación de vulnerabilidades en sistema Drupal CMS</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Overview */}
        <Card className="bg-white shadow-lg border-gray-200 mb-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-gray-900 text-2xl mb-2">DC-1 Challenge</CardTitle>
                <CardDescription className="text-gray-700 text-base">
                  DC-1 es un desafío de captura la bandera (CTF) diseñado para evaluar técnicas de pentesting 
                  web, específicamente contra aplicaciones basadas en Drupal CMS. El objetivo es demostrar 
                  vectores de ataque comunes y vulnerabilidades en sistemas de gestión de contenido.
                </CardDescription>
              </div>
              <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                Intermedio
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Sistema Operativo:</span>
                <p className="text-gray-900 font-medium">Debian</p>
              </div>
              <div>
                <span className="text-gray-500">CMS:</span>
                <p className="text-gray-900 font-medium">Drupal 7.x</p>
              </div>
              <div>
                <span className="text-gray-500">IP Objetivo:</span>
                <p className="text-gray-900 font-medium">192.168.101.24</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introducción del Entorno */}
            <Card className="bg-white shadow-lg border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <Monitor className="w-5 h-5" />
                  Introducción: Configuración del Entorno de Pruebas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    El DC-1 Challenge es un entorno de laboratorio diseñado específicamente para practicar 
                    técnicas de penetration testing contra aplicaciones web. Este sistema ejecuta Drupal 7, 
                    un CMS popular conocido por tener vulnerabilidades críticas que pueden ser explotadas 
                    mediante técnicas de reconocimiento y ataques dirigidos.
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="text-gray-900 font-medium mb-3">Especificaciones del Objetivo:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="space-y-1">
                        <p className="text-gray-500">Distribución:</p>
                        <p className="text-gray-900">Debian GNU/Linux</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-500">Servidor Web:</p>
                        <p className="text-gray-900">Apache HTTP Server</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-500">CMS:</p>
                        <p className="text-gray-900">Drupal 7.x</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-500">Base de Datos:</p>
                        <p className="text-gray-900">MySQL</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    El entorno está configurado en una red local aislada, permitiendo la ejecución de técnicas 
                    de ataque sin riesgo para sistemas de producción. Se utilizan herramientas estándar de 
                    pentesting para demostrar una metodología completa de evaluación de seguridad.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Objetivos */}
            <Card className="bg-white shadow-lg border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center gap-2">
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
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Metodología de Pentesting */}
            <Card className="bg-white shadow-lg border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Metodología y Ejecución del Pentesting</CardTitle>
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
                    <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                    <p className="text-gray-700 text-sm">{step.description}</p>
                    {step.command && (
                      <div className="bg-gray-100 rounded-lg p-3 border border-gray-300 w-fit">
                        <code className="text-blue-400 text-sm font-mono">{step.command}</code>
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
                ))}
              </CardContent>
            </Card>

            {/* Conclusiones */}
            <Card className="bg-white shadow-lg border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Conclusiones y Análisis de Resultados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-gray-900 font-medium mb-2">Hallazgos Críticos:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Vulnerabilidad crítica CVE-2018-7600 (Drupalgeddon2) permite ejecución remota de código sin autenticación</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Exposición de credenciales de base de datos en archivo de configuración accesible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Uso de contraseñas débiles susceptibles a ataques de diccionario en menos de 10 minutos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Falta de segmentación de red permitiendo acceso directo a servicios internos</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-gray-900 font-medium mb-2">Impacto de Seguridad:</h4>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-red-600 font-medium">Compromiso Total</p>
                          <p className="text-gray-700">Acceso root al sistema operativo</p>
                        </div>
                        <div>
                          <p className="text-red-600 font-medium">Exposición de Datos</p>
                          <p className="text-gray-700">Acceso completo a base de datos</p>
                        </div>
                        <div>
                          <p className="text-red-600 font-medium">Escalación de Privilegios</p>
                          <p className="text-gray-700">Credenciales de administrador comprometidas</p>
                        </div>
                        <div>
                          <p className="text-red-600 font-medium">Persistencia</p>
                          <p className="text-gray-700">Capacidad de mantener acceso indefinido</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-gray-900 font-medium mb-2">Recomendaciones de Remediación:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Actualizar inmediatamente Drupal a la versión más reciente con parches de seguridad</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Implementar políticas de contraseñas robustas con autenticación multifactor</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Configurar permisos restrictivos en archivos de configuración críticos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Implementar Web Application Firewall (WAF) para filtrar ataques web</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Establecer monitoreo de seguridad y sistema de detección de intrusiones</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Info className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-900 font-medium">Nota de Responsabilidad</span>
                    </div>
                    <p className="text-gray-700 text-sm">
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
            <Card className="bg-white shadow-lg border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900 text-lg">Herramientas de Pentesting</CardTitle>
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
                    <Badge key={tool} variant="outline" className="text-gray-700 border-gray-300">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Vulnerabilidades */}
            <Card className="bg-white shadow-lg border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900 text-lg flex items-center gap-2">
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
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-900 text-sm font-medium">{vuln.name}</span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          vuln.severity === 'Crítica' ? 'text-red-600 border-red-300 bg-red-50' :
                          vuln.severity === 'Alta' ? 'text-orange-600 border-orange-300 bg-orange-50' : 
                          vuln.severity === 'Media' ? 'text-yellow-600 border-yellow-300 bg-yellow-50' : 
                          'text-green-600 border-green-300 bg-green-50'
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
            <Card className="bg-white shadow-lg border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900 text-lg">Métricas del Análisis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Hosts Comprometidos:</span>
                    <span className="text-gray-900">1/1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Vulnerabilidades Críticas:</span>
                    <span className="text-red-600">1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Credenciales Extraídas:</span>
                    <span className="text-orange-600">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tiempo Total:</span>
                    <span className="text-gray-900">~2 horas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Nivel de Acceso:</span>
                    <span className="text-red-600">Root</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Clasificación de Riesgo */}
            <Card className="bg-white shadow-lg border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900 text-lg flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Evaluación de Riesgo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-1">CRÍTICO</div>
                    <div className="text-gray-500 text-sm">Nivel de Riesgo General</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Confidencialidad:</span>
                      <span className="text-red-600">Comprometida</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Integridad:</span>
                      <span className="text-red-600">Comprometida</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Disponibilidad:</span>
                      <span className="text-red-600">En Riesgo</span>
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