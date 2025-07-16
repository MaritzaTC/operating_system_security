import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">
        
      </h1>
  {/* Header */}
            <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
              <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                   
                    <div>
                      <h1 className="text-2xl font-bold text-slate-900"> 🍎 MacOS Catalina </h1>
                  <p className="text-slate-500">Documentación de Pruebas </p>

                    </div>
                  </div>
      
                  
                </div>
              </div>
            </header>
      {/* Guía de instalación */}
      <Accordion type="single" collapsible>
        <AccordionItem value="instalacion">
          <AccordionTrigger className="text-lg">
            💿 Inicio de la máquina virtual
          </AccordionTrigger>
          <AccordionContent className="pt-4 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                📦Descargar la imagen ISO
              </h2>
              <p>
                Visita la siguiente página para descargar los medios de instalación:
              </p>
              <a
                href="https://archive.org/details/mac-os-catalina-iso-10.15.7?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                🔗 Link de descarga - MacOS Catalina
              </a>
              <Image src="/InstalacionMac.png" alt="Medios de instalación" width={891} height={238} className="w-full rounded-lg shadow-md mt-4" />
              <p>
                Se inicia la máquina virtual.
              </p>
              <Image src="/pagInicio.png" alt="Página de inicio" width={891} height={238} className="w-full rounded-lg shadow-md mt-4" />
              <p>
               Borrar los datos de la maquina para después instalar la versión.
              </p>
              <Image src="/BorradoMac.png" alt="Borrar datos" width={891} height={238} className="w-full rounded-lg shadow-md" />
              <p>Instalar la versión que queremos, en este caso Catalina.</p>
              <Image src="/InstallMacV.png" alt="Elección del archivo ISO" width={891} height={238} className="w-full rounded-lg shadow-md" />
              <p>
                Crear cuenta que en este caso va a ser la de administrador.
              </p>
              <Image src="/AdminMac.png" alt="Cuenta administrador" width={891} height={238} className="w-full rounded-lg shadow-md" />
            </section>
              <p>
                Obtener la ip de Mac.
              </p>
              <Image src="/IpMac.png" alt="Obtener Ip Mac desde la terminal" width={891} height={238} className="w-full rounded-lg shadow-md" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Estado base: puertos */}
      <Accordion type="single" collapsible>
        <AccordionItem value="estado-puertos">
          <AccordionTrigger className="text-lg">
            🌐 Estado base: Puertos y conexiones
          </AccordionTrigger>
          <AccordionContent className="pt-4 space-y-6">
            <p>Ver puertos abiertos y conexiones activas con:</p>
            <code className="bg-gray-100 px-1 rounded">nmap</code>
            <p>Se escaneó macOS Catalina con nmap y se comprobó que no tenía puertos TCP abiertos por defecto, lo que indica una configuración segura y mínima exposición a la red.</p>            
            <Image src="/IpMacKali.png" alt="Ip desde Kali" width={891} height={238} className="w-full rounded-lg shadow-md mt-4" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Usuario de pruebas */}
      <Accordion type="single" collapsible>
        <AccordionItem value="usuario-pruebas">
          <AccordionTrigger className="text-lg">
            👤 Crear usuario estándar de pruebas
          </AccordionTrigger>
          <AccordionContent className="pt-4 space-y-6">
            <p>Se creó un usuario estándar sin privilegios administrativos, destinado exclusivamente a la ejecución de pruebas. Esta cuenta no tiene acceso a configuraciones del sistema ni puede utilizar comandos con sudo, lo que permite simular el comportamiento y las limitaciones de un atacante sin permisos elevados dentro del sistema operativo.</p>
            <Image src="/UserEMac.png" alt="Crear usuario 1" width={891} height={238} className="w-full rounded-lg shadow-md" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Escalada de privilegios */}
      <Accordion type="single" collapsible>
        <AccordionItem value="escalada">
          <AccordionTrigger className="text-lg">
            🚨 Pruebas de escalada de privilegios
          </AccordionTrigger>
          <AccordionContent className="pt-4 space-y-6">
            <p>Se intentó realizar escalada de privilegios desde la cuenta estándar prueba. El sistema respondió con restricciones típicas de macOS, mostrando mensajes como “prueba is not in the sudoers file”, lo que impidió el uso de sudo o cualquier intento de modificación del sistema protegido.
            </p>
            <p>Esto demostró que macOS aplica correctamente los controles de privilegios en su configuración por defecto, aunque no notifica ni registra estos intentos de manera visible para el usuario.</p>
            <Image src="/EscaladaMac.png" alt="Escalada de privilegios" width={891} height={238} className="w-full rounded-lg shadow-md" />
            <Image src="/EscaladaPrivileMac.png" alt="Escalada de privilegios" width={891} height={238} className="w-full rounded-lg shadow-md" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* Rootkits */}
      <Accordion type="single" collapsible>
        <AccordionItem value="dos">
          <AccordionTrigger className="text-lg">
            🚨 Rootkits  
          </AccordionTrigger>
          <AccordionContent className="pt-4 space-y-4 text-base leading-relaxed">
            <p>
              Se simuló la instalación de un rootkit de usuario en macOS mediante la creación de un archivo .plist en la ruta <code>~/Library/LaunchAgents/</code>, que ejecuta automáticamente un comando malicioso al iniciar sesión. Esta técnica aprovechó las funciones de automatización del sistema para establecer persistencia sin necesidad de privilegios de administrador.
            </p>
            <Image src="/RootkitMac.png" alt="Rootkit en macOS" width={891} height={238} className="w-full rounded-lg shadow-md" />
            <p>
              Al reiniciar la máquina, se comprobó que el archivo soy_malware.txt fue recreado en el escritorio, confirmando la ejecución del código. El sistema no mostró alertas ni bloqueos, lo que evidencia la falta de mecanismos de defensa frente a ataques persistentes ejecutados desde cuentas estándar.
            </p>
            <Image src="/RootkitMalMac.png" alt="Rootkit en macOS" width={891} height={238} className="w-full rounded-lg shadow-md" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>


      {/* Denegación de servicio */}
      <Accordion type="single" collapsible>
        <AccordionItem value="dos">
          <AccordionTrigger className="text-lg">
            🚨 Denegación de servicio (DoS)
          </AccordionTrigger>
          <AccordionContent className="pt-4 space-y-4 text-base leading-relaxed">
            <p>
              Se realizó una prueba de denegación de servicio leve simulando la creación masiva de procesos inofensivos en segundo plano. Se ejecutó el siguiente comando:
            </p>
            <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
              <code className="bg-gray-100 px-1 rounded">seq 1 200 | xargs -P 200 -I % yes  /dev/null &</code>
            </pre>
            <p>
              Aunque el sistema no colapsó, se evidenció un aumento en la cantidad de procesos, y demuestra cómo un atacante sin privilegios puede consumir recursos si no hay límites definidos.
            </p>
            <Image src="/DoSMac.png" alt="DoS" width={891} height={238} className="w-full rounded-lg shadow-md" />
            <p>
              Se puede observar un uso intensivo de CPU y memoria: El sistema se verá afectado, con un alto número de procesos en ejecución y un uso elevado de recursos. Muy lento y con dificultad para interactuar.
            </p>
            <Image src="/CPUMac.png" alt="CPU" width={891} height={238} className="w-full rounded-lg shadow-md" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>


{/* Inyección de código y manipulación de procesos */}
<Accordion type="single" collapsible>
  <AccordionItem value="inyeccion">
    <AccordionTrigger className="text-lg">
      💉 Inyección de código y manipulación de procesos
    </AccordionTrigger>
    <AccordionContent className="pt-4 space-y-4 text-base leading-relaxed">
      
    <p>
      Se simuló una inyección de código mediante la descarga y ejecución de un script malicioso alojado en un servidor HTTP controlado por Kali Linux. La descarga se realizó desde la cuenta estándar <strong>prueba</strong> utilizando el comando <code>curl</code>.
    </p>

    <p>
      El script contenía una instrucción simple (<code>touch soy_malware.txt</code>) y se ejecutó exitosamente. Esta prueba demuestra que el sistema permite la ejecución de código arbitrario sin restricciones visibles, siempre que el atacante consiga que el usuario lo ejecute. No se generaron alertas ni bloqueos por parte del sistema operativo.
    </p>
    <Image src="/InyeccionKali.png" alt="Inyección de código Kali" width={891} height={238} className="w-full rounded-lg shadow-md" />

    <p>
      Luego de asignar permisos de ejecución con <code>chmod +x</code>, el script fue ejecutado con éxito, mostrando en consola el mensaje <code>soy malware</code>,
      lo que confirma que el sistema permitió la ejecución de código arbitrario sin mostrar advertencias ni bloquear el contenido.
      Esta prueba demuestra cómo un usuario sin privilegios puede ejecutar scripts maliciosos descargados desde la red si no existen controles adicionales.
    </p>
    <Image src="/InyeccionMac.png" alt="Inyección de código Mac" width={891} height={238} className="w-full rounded-lg shadow-md" />

    </AccordionContent>
  </AccordionItem>
  
</Accordion>

{/* Ataques a servicios de red */}
<Accordion type="single" collapsible>
  <AccordionItem value="defensas">
    <AccordionTrigger className="text-lg">
      🛡️ Ataques a servicios de red
    </AccordionTrigger>
    <AccordionContent className="pt-4 space-y-4 text-base leading-relaxed">
      
      <h4 className="text-lg font-semibold">Logs</h4>
      <p>
        Desde el usuario administrador se obtuvo acceso a los logs del sistema de macOS Catalina.
        Se utilizaron comandos como <code>log show --last 1h | grep curl</code> para rastrear la ejecución de descargas de scripts maliciosos.
      </p>
      <Image src="/Log1Mac.png" alt="Logs de macOS" width={891} height={238} className="w-full rounded-lg shadow-md" />

      <p>
        Se evidenció que el sistema registró la actividad, pero no se generaron alertas, bloqueos ni respuestas automáticas ante el comportamiento sospechoso,
        lo cual indica una falta de mecanismos de defensa en la configuración por defecto del sistema operativo.
      </p>
      <Image src="/Log2Mac.png" alt="Logs de macOS" width={891} height={238} className="w-full rounded-lg shadow-md" />
    </AccordionContent>
  </AccordionItem>
</Accordion>


{/* Monitoreo del comportamiento */}
<Accordion type="single" collapsible>
  <AccordionItem value="defensas">
    <AccordionTrigger className="text-lg">
      🔍 Monitoreo del comportamiento
    </AccordionTrigger>
    <AccordionContent className="pt-4 space-y-4 text-base leading-relaxed">
    <p>
      Durante la fase de monitoreo del comportamiento, se accedió a los logs del sistema utilizando <code>log show</code>,
      identificando eventos relacionados con la descarga (<code>curl</code>) y ejecución (<code>exec</code>) del script malicioso <strong>malware.sh</strong>.
      El sistema registró los eventos sin emitir alertas ni bloquear la ejecución.
    </p>

    <p>
      Usando el <strong>Monitor de Actividad</strong> y el comando <code>top</code>, se observó que el proceso se ejecutó correctamente,
      aunque con un impacto mínimo en recursos del sistema (CPU/memoria).
    </p>

    <p>
      Finalmente, se comprobó que el archivo de persistencia <code>.plist</code> en <code>~/Library/LaunchAgents/</code> se mantenía cargado
      mediante <code>launchctl list</code>, y que tras reiniciar, el archivo <code>soy_malware.txt</code> se volvió a crear automáticamente,
      evidenciando efectos persistentes del ataque.
    </p>

    </AccordionContent>
  </AccordionItem>
</Accordion>

{/* Análisis y comparación */}
<Accordion type="single" collapsible>
  <AccordionItem value="defensas">
    <AccordionTrigger className="text-lg">
      🧠 Análisis y comparación
    </AccordionTrigger>
    <AccordionContent className="pt-4 space-y-4 text-base leading-relaxed">
    <h3><strong>Comparación de resultados</strong></h3>
    <p>
      macOS no detectó ni bloqueó ningún ataque durante las pruebas. El tiempo de respuesta fue inexistente,
      ya que no hubo reacciones automáticas. El nivel de compromiso alcanzado fue medio-alto, ya que se logró establecer
      persistencia con un simple script y sin privilegios <code>root</code>.
    </p>

    <h3><strong>Evaluación de mitigaciones y defensas</strong></h3>
    <p>
      macOS protege adecuadamente sus servicios críticos, impidiendo el uso de <code>sudo</code> o el acceso a configuraciones
      del sistema desde un usuario estándar. Sin embargo, no evita la ejecución de scripts maliciosos, ni la creación de persistencia
      básica. La facilidad para ejecutar código indica una debilidad en la protección por defecto contra amenazas internas.
    </p>

    <h3><strong>Relación con vulnerabilidades conocidas</strong></h3>
    <p>
      Las técnicas usadas reflejan vectores comunes de ataque documentados en CVEs previos (como <strong>CVE-2020-27937</strong>),
      en los que el sistema permite persistencia o ejecución de código sin privilegios. Estos comportamientos pueden ser mitigados,
      pero requieren configuración avanzada.
    </p>


    </AccordionContent>
  </AccordionItem>
</Accordion>

{/* Recomendaciones de seguridad */}
<Accordion type="single" collapsible>
  <AccordionItem value="defensas">
    <AccordionTrigger className="text-lg">
      🔐 Recomendaciones de seguridad
    </AccordionTrigger>
    <AccordionContent className="pt-4 space-y-4 text-base leading-relaxed">
    <ul >
      <li>    🛡️ Configurar reglas de control para ejecución de scripts desconocidos.</li>
      <li>    🔒 Activar Gatekeeper para Terminal o instalar <strong>BlockBlock</strong>.</li>
      <li>    📁 Limitar ejecución de <code>LaunchAgents</code> y supervisar <code>~/Library/LaunchAgents</code>.</li>
      <li>    🧰 Usar herramientas como <strong>Malwarebytes</strong>, <strong>Little Snitch</strong> o <strong>LuLu Firewall</strong>.</li>
    </ul>



    </AccordionContent>
  </AccordionItem>
</Accordion>


    </div>
  );
} 