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
        Android 
      </h1>

      {/* Guía de instalación */}
      <Accordion type="single" collapsible>
        <AccordionItem value="instalacion">
          <AccordionTrigger className="text-lg">
            💿 Guía de instalación de Android en VirtualBox
          </AccordionTrigger>
          <AccordionContent className="pt-4 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                📦 1. Descargar la imagen ISO
              </h2>
              <p>
                Para comenzar con la instalacion, se realizó la descarga de imágenes ISO
              </p>
              <a
        href="https://www.android-x86.org/download.html"
        className="text-blue-600 underline ml-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        🔗 android-x86.org
      </a>
              <Image src="/Android1.png" alt="Android1" width={891} height={238} className="w-full rounded-lg shadow-md mt-4" />
              <p>
                En este caso, se utilizó una imagen de Android x86, que permite ejecutar Android en una máquina virtual. 
                También se recopilaron herramientas necesarias como ADB, scripts de prueba y configuraciones de red.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                💻 2. Crear una nueva máquina virtual
              </h2>
              <p>
                Se utilizó VirtualBox como plataforma de virtualización para montar el laboratorio. 
                Se crearon máquinas virtuales independientes para Android y Kali Linux
              </p>
              <Image src="/Android2.png" alt="Creación de máquina virtual" width={891} height={238} className="w-full rounded-lg shadow-md" />
              <p>
                 cada una con configuraciones adaptadas a su propósito 
                 (por ejemplo, Android con acceso ADB habilitado y Kali con herramientas de análisis preinstaladas).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                ⚙️ 3. configurar la red
              </h2>
              <p>
                se configuró una red en modo puente o NAT, con posibilidad de aislamiento, 
                lo que permite simular una red real pero controlada.
              </p>
              <Image src="/Android3.png" alt="Android3" width={891} height={238} className="w-full rounded-lg shadow-md" />
              <a
        href="https://www.youtube.com/watch?v=-Cx9zFRTBrs"
        className="text-blue-600 underline ml-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link Guia intalacion maquina virtual
      </a>
            </section>
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
            <p>
              Se evaluó la posibilidad de obtener permisos de root desde un usuario común. Mediante adb shell, se ejecutó whoami y 
              posteriormente su, confirmando el acceso root al obtener el símbolo # y la respuesta root. 
            </p>
            <Image src="/Android4.png" alt="Android4" width={891} height={238} className="w-full rounded-lg shadow-md" />
            <p>
              Este resultado indica que el sistema no tiene restricciones efectivas para impedir la escalada de privilegios, 
              lo que representa un riesgo significativo. 
            </p>
            <p>
              Como prueba adicional, se accedió exitosamente al archivo del sistema /data/system/users/0/settings_secure.xml, 
              el cual debería estar restringido, demostrando poca seguridad interna. 
            </p>
            <Image src="/Android5.png" alt="Android5" width={891} height={238} className="w-full rounded-lg shadow-md" />
            <p>
              Finalmente, se intentó crear un archivo en una ruta protegida, fallando por un sistema de archivos de solo lectura, 
              lo que sugiere una protección parcial limitada a la integridad del sistema, pero no a la confidencialidad.
            </p>
            <Image src="/Android6.png" alt="Android6" width={891} height={238} className="w-full rounded-lg shadow-md" />
            <p>
              En resumen, el sistema Android en esta configuración permite la escalada de privilegios sin restricciones efectivas, 
              lo que representa un riesgo significativo para la seguridad del dispositivo y los datos del usuario.
            </p>
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
              Se simuló un rootkit creando un proceso en segundo plano silencioso (rk_sim.sh) que no 
              genera salida visible y permanece activo indefinidamente, ejecutándose desde la ruta /data/local/tmp/.
            </p>
            <Image
              src="/Android7.png"
              alt="Rootkit en ejecución"
              width={891}
              height={238}
              className="w-full rounded-lg shadow-md"
            />
            <p>
              Al inspeccionar con adb shell ps, no se encontró el proceso activo, indicando un nivel básico de ocultamiento.
            </p>
            <Image
              src="/Android8.png"
              alt="Proceso oculto en ps"
              width={891}
              height={238}
              className="w-full rounded-lg shadow-md"
            />
            <p>
              Tras un reinicio del sistema, se comprobó que el proceso no persistía, lo cual demuestra que, aunque el comportamiento era sigiloso, 
              no poseía mecanismos de persistencia, lo que representa una ventaja desde el punto de vista de la seguridad del sistema.
            </p>
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
              Se ejecutó un script en Android que simulaba un ataque de denegación de servicio mediante la saturación 
              continua de CPU y memoria. Como resultado, el sistema presentó una notable lentitud en la interfaz y fue 
              incapaz de mantener la conexión a la red Wi-Fi, evidenciando la interrupción de servicios esenciales. Esta 
              prueba demuestra cómo una carga sostenida puede afectar gravemente el rendimiento y conectividad del dispositivo.
            </p>
            <video controls width="100%" className="rounded-lg shadow-md">
  <source src="/VideoAndroid.mp4" type="video/mp4" />
  Tu navegador no soporta el video.
</video>
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
      
      <h4 className="text-lg font-semibold">Pruebas con inyección en procesos activos</h4>

      <p>
        Se creó un script (loop.sh) desde Kali Linux que simula un comportamiento malicioso al ejecutarse de 
        forma indefinida en el sistema Android, imprimiendo continuamente un mensaje y consumiendo CPU. Este 
        script fue transferido al dispositivo mediante adb push y ejecutado con permisos desde la ruta /data/local/tmp/.
      </p>
      <Image src="/Android9.png" alt="Script en ejecución" width={891} height={238} className="w-full rounded-lg shadow-md" />
      
      <p>se observo que el dispositivo Android presentó signos de ralentización y eventual congelamiento, indicando un impacto 
        negativo en la estabilidad del sistema frente a procesos persistentes no controlados.</p>
      <Image src="/Android10.png" alt="Script en ejecución" width={891} height={238} className="w-full rounded-lg shadow-md" />

    </AccordionContent>
  </AccordionItem>
  
</Accordion>

{/* Evaluación de mitigaciones y defensas */}
<Accordion type="single" collapsible>
  <AccordionItem value="defensas">
    <AccordionTrigger className="text-lg">
      🛡️ Evaluación de mitigaciones y defensas
    </AccordionTrigger>
    <AccordionContent className="pt-4 space-y-4 text-base leading-relaxed">
      {/* Fase 3 */}
      <div className="bg-gray-50 border-l-4 border-blue-500 rounded-r-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4">
          Fase 3: Análisis y Comparación
        </h2>
        
        <section className="mb-6">
          <h3 className="text-xl font-medium text-gray-700 mb-2">🔍 3.1 Comparación de Resultados</h3>
          <p className="text-gray-600 mb-2">
            Tras ejecutar múltiples ataques simulados sobre el sistema Android x86, se evaluaron factores clave como el tiempo de detección y respuesta del sistema. En general, Android no mostró alertas automáticas ni bloqueos inmediatos, lo que sugiere una detección pasiva frente a amenazas ejecutadas desde el entorno ADB con privilegios elevados.
          </p>
          <p className="text-gray-600">
            El nivel de compromiso fue alto en la mayoría de pruebas, especialmente al obtener acceso <code className="bg-gray-100 px-1.5 py-0.5 rounded">root</code> y ejecutar scripts persistentes. El sistema no mostró mecanismos claros de defensa integrados que detuvieran estas acciones.
          </p>
        </section>
        
        <section className="mb-6">
          <h3 className="text-xl font-medium text-gray-700 mb-2">🛡️ 3.2 Evaluación de Mitigaciones y Defensas</h3>
          <p className="text-gray-600 mb-2">
            Durante las pruebas, se observó que Android x86 tiene pocas defensas activas por defecto en entornos de laboratorio. Herramientas como <span className="bg-yellow-50 px-1.5 py-0.5 rounded">SELinux</span> no se ejecutaban en modo estricto o simplemente no estaban activas, permitiendo ejecutar código con facilidad.
          </p>
          <p className="text-gray-600">
            Desde el punto de vista del atacante, los ataques fueron sencillos de realizar, lo cual resalta la importancia de endurecer la configuración por defecto del sistema, especialmente cuando se ejecuta fuera de dispositivos móviles reales.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-medium text-gray-700 mb-2">🧩 3.3 Relación con Vulnerabilidades Conocidas</h3>
          <p className="text-gray-600">
            Algunos de los comportamientos observados coinciden con <span className="bg-yellow-50 px-1.5 py-0.5 rounded">CVE históricas</span> en Android relacionadas con escalada de privilegios y ejecución remota de código. Sin embargo, en este entorno de laboratorio, la mayoría de las debilidades identificadas derivan más de configuraciones por defecto permisivas, que de errores de diseño estructural del sistema operativo.
          </p>
        </section>
      </div>

      {/* Fase 4 */}
      <div className="bg-gray-50 border-l-4 border-blue-500 rounded-r-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2 mb-4">
          📄 Fase 4: Documentación y Recomendaciones
        </h2>
        
        <section className="mb-6">
          <h3 className="text-xl font-medium text-gray-700 mb-2">📊 4.1 Resultados</h3>
          <p className="text-gray-600">
            Los hallazgos fueron documentados en cada fase del experimento, incluyendo evidencia de logs, capturas de pantalla y resultados en consola. Las pruebas se organizaron por tipo de ataque y se presentan en esta página mediante tablas comparativas, ejemplos de código, y conclusiones.
          </p>
        </section>
        
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-6 mb-6">
          <h3 className="text-xl font-medium text-gray-700 mb-2">🔐 4.2 Recomendaciones de Seguridad</h3>
          <p className="text-gray-600 mb-3">
            Para mitigar los riesgos observados, se proponen las siguientes buenas prácticas:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Habilitar y configurar correctamente herramientas de control como <code className="bg-gray-100 px-1.5 py-0.5 rounded">SELinux</code> o <code className="bg-gray-100 px-1.5 py-0.5 rounded">AppArmor</code>.</li>
            <li>Restringir el acceso <code className="bg-gray-100 px-1.5 py-0.5 rounded">root</code>, limitando la exposición del sistema a través de <code className="bg-gray-100 px-1.5 py-0.5 rounded">ADB</code>.</li>
            <li>Monitorear procesos críticos y establecer alertas ante comportamientos inusuales.</li>
            <li>Instalar aplicaciones desde fuentes confiables y verificar sus permisos.</li>
            <li>Implementar políticas de auditoría y escaneo de seguridad periódicos.</li>
          </ul>
          <p className="text-gray-600 mt-3">
            Además, se recomienda el uso de herramientas como <code className="bg-gray-100 px-1.5 py-0.5 rounded">BusyBox</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded">SSHelper</code> y soluciones de seguridad personalizadas, siempre asegurando que no representen nuevas puertas de entrada para atacantes.
          </p>
        </div>
        {/* Observaciones Adicionales */}
      <div className="bg-gray-50 border-l-4 border-blue-500 rounded-r-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Observaciones Adicionales
        </h2>
        <p className="text-gray-600 mb-2">
          Durante la ejecución de los ataques simulados, se emplearon herramientas como <code className="bg-gray-100 px-1.5 py-0.5 rounded">adb logcat</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded">top</code> y <code className="bg-gray-100 px-1.5 py-0.5 rounded">ps</code> para observar en tiempo real los logs del sistema, procesos activos, uso de CPU y memoria. En los ataques de inyección de código y denegación de servicio, se evidenciaron aumentos considerables en el consumo de CPU y aparición de procesos sospechosos creados por los scripts.
        </p>
        <p className="text-gray-600">
          Sin embargo, tras reiniciar el dispositivo Android, los procesos maliciosos no persistieron, indicando ausencia de mecanismos de persistencia. Además, los registros del sistema no mostraron intentos de mitigación o alertas, lo que sugiere una limitada capacidad de detección y respuesta automática frente a comportamientos anómalos.
        </p>
      </div>
        </div>

    </AccordionContent>
  </AccordionItem>
</Accordion>


    </div>
  );
} 