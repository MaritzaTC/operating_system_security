import React from 'react'

export default function index() {


const systems = [
  {
    name: "🪟 Windows",
    reason:
      "Se eligió por su amplia presencia en entornos personales y empresariales, siendo objetivo frecuente de ciberataques.",
    strengths: [
      "Amplia documentación y comunidad.",
      "Soporte de herramientas nativas como PowerShell.",
      "Buen entorno gráfico para comprensión del usuario.",
    ],
    weaknesses: [
      "Historial de vulnerabilidades críticas (especialmente en versiones antiguas.",
      "Dependencia de actualizaciones constantes.",
      "Mayor exposición a malware y ransomware.",
    ],
  },
  {
    name: "🤖 Android",
    reason:
      "Elegido por su uso masivo en dispositivos móviles y por ser un entorno abierto ideal para analizar vectores de ataque en apps móviles.",
    strengths: [
      "Basado en Linux, permite análisis de bajo nivel.",
      "Accesible para pruebas de apps móviles.",
      "Uso global en el mercado.",
    ],
    weaknesses: [
      "Alta fragmentación entre versiones.",
      "Permisos mal configurados pueden generar vulnerabilidades.",
      "Falta de actualizaciones en dispositivos antiguos.",
    ],
  },
  {
    name: "🍏 macOS",
    reason:
      "Se incluyó por su uso creciente en entornos corporativos y desarrollo, combinando seguridad de Unix con entorno cerrado.",
    strengths: [
      "Basado en Unix (BSD), seguro por diseño.",
      "Ecosistema cerrado con buena estabilidad.",
      "Buen soporte para desarrolladores.",
    ],
    weaknesses: [
      "Difícil de virtualizar legalmente.",
      "Acceso limitado a configuraciones internas.",
      "Menor compatibilidad con herramientas de pentesting.",
    ],
  },
  {
    name: "🐧 Linux (Ubuntu / Kali)",
    reason:
      "Elegido por ser el sistema de referencia para análisis de seguridad, especialmente Kali Linux por sus herramientas especializadas.",
    strengths: [
      "Código abierto y altamente configurable.",
      "Gran variedad de distribuciones según el enfoque.",
      "Herramientas de seguridad integradas como Nmap, Metasploit, Wireshark.",
    ],
    weaknesses: [
      "Curva de aprendizaje más alta.",
      "Compatibilidad limitada con algunos drivers.",
      "Menor adopción en usuarios finales.",
    ],
  },
];
 return (
    <div>
    {/* Objetivo */}
      <div className="bg-white rounded-2xl shadow p-6 col-span-1 xl:col-span-2">
        <h2 className="text-xl font-bold text-slate-900 mb-2">🎯 Objetivo del Proyecto</h2>
        <p className="text-slate-600">
         Este proyecto tiene como objetivo evaluar y comparar la seguridad de distintos sistemas operativos (Android, macOS, Windows y Linux) frente a ataques cibernéticos comunes. A través de pruebas controladas en entornos virtualizados, se busca identificar vulnerabilidades, mecanismos de defensa, y capacidades de respuesta de cada sistema operativo ante amenazas reales, utilizando herramientas de pentesting y monitoreo. Los resultados obtenidos se presentan de forma visual y técnica en una página web que incluye recomendaciones y buenas prácticas de seguridad.

        </p>
      </div>

      {/* Motivación */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-2">💡 Motivación y Justificación</h2>
        <p className="text-slate-600">
          La creciente dependencia de sistemas operativos en contextos personales, empresariales y críticos los convierte en objetivos frecuentes de atacantes. Evaluar sus capacidades de defensa no sólo es relevante, sino esencial para mejorar su configuración y resistencia. Este proyecto es importante para aplicar los conocimientos adquiridos en el curso de Sistemas Operativos y ponerlos en práctica en un escenario realista de ciberseguridad, permitiendo explorar vulnerabilidades y estrategias de mitigación.


        </p>
      </div>

      {/* Alcance */}
      <div className="bg-white rounded-2xl shadow p-6 col-span-1 xl:col-span-2">
        <h2 className="text-xl font-bold text-slate-900 mb-2">📌 Alcance del Proyecto</h2>
        <ul className="list-disc list-inside text-slate-600 space-y-1 mb-4">
          <li>Simulación de ataques en SOs virtualizados.</li>
          <li>

Evaluación de escalada de privilegios, rootkits, denegación de servicio, inyección de código y análisis de servicios.


</li>
          <li>Comparación de resultados y propuesta de mitigaciones.
</li>
        </ul>
        <p className="font-semibold text-slate-800">Fuera del alcance:</p>
        <ul className="list-disc list-inside text-sm text-slate-500 mt-1">
          <li>Ataques a firmware o hardware.</li>
          <li>Ingeniería social y redes físicas reales.</li>
          <li>Pruebas en entornos productivos o redes reales.</li>
        </ul>
      </div>
  <h1 className="text-4xl font-bold text-center my-8">Sistemas Operativos</h1>

    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {systems.map((system, index) => (
        <div
          key={index}
          className="rounded-2xl border border-slate-200 shadow-sm p-4 bg-white"
        >
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            {system.name}
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            <strong>Justificación:</strong> {system.reason}
          </p>

          <div className="mb-2">
            <h3 className="text-sm font-semibold text-green-700 mb-1">
              ✔ Fortalezas
            </h3>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              {system.strengths.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-red-700 mb-1">
              ✘ Debilidades
            </h3>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              {system.weaknesses.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
<div>
  <section id="diseno-solucion" className="px-6 py-8">
  <h2 className="text-2xl font-bold mb-4"> Diseño de la Solución</h2>

  <h3 className="text-xl font-semibold mt-6"> Diseño de la Solución</h3>
  <p>El diseño se basó en una arquitectura de laboratorio con máquinas virtuales aisladas por red, configuradas en VirtualBox. Se tomaron snapshots base por sistema operativo para poder restaurar el estado inicial tras cada prueba. Las pruebas se automatizaron en algunos casos mediante scripts en Bash o PowerShell.</p>
  <p>Además, se utilizó una máquina Kali Linux como plataforma de análisis y ataque, desde la cual se realizaron escaneos de puertos, simulaciones de ataques de red (como inyecciones de código o intentos de acceso remoto) y monitoreo del comportamiento del sistema objetivo.</p>

  <h3 className="text-xl font-semibold mt-6">Tecnologías y Herramientas</h3>
  <table className="table-auto w-full text-sm text-left border-collapse border border-gray-300">
    <thead className="bg-gray-200">
      <tr>
        <th className="border border-gray-300 px-4 py-2">Tecnología / Herramienta</th>
        <th className="border border-gray-300 px-4 py-2">Uso</th>
      </tr>
    </thead>
    <tbody className="bg-white">
      <tr><td className="border px-4 py-2">VirtualBox</td><td className="border px-4 py-2">Virtualización de los sistemas operativos</td></tr>
      <tr><td className="border px-4 py-2">Kali Linux</td><td className="border px-4 py-2">Sistema atacante, herramientas de pentesting</td></tr>
      <tr><td className="border px-4 py-2">ADB</td><td className="border px-4 py-2">Acceso e interacción con Android</td></tr>
      <tr><td className="border px-4 py-2">Windows Defender / Event Viewer</td><td className="border px-4 py-2">Monitoreo de alertas y registros</td></tr>
      <tr><td className="border px-4 py-2">Process Hacker / System Informer</td><td className="border px-4 py-2">Observación de procesos en Windows</td></tr>
      <tr><td className="border px-4 py-2">Extreme Injector</td><td className="border px-4 py-2">Inyección de DLL</td></tr>
      <tr><td className="border px-4 py-2">WES-NG</td><td className="border px-4 py-2">Detección de parches faltantes</td></tr>
      <tr><td className="border px-4 py-2">log show</td><td className="border px-4 py-2">Revisión de logs en macOS</td></tr>
      <tr><td className="border px-4 py-2">BusyBox</td><td className="border px-4 py-2">Herramientas Unix básicas en Android</td></tr>
      <tr><td className="border px-4 py-2">Shell Scripts</td><td className="border px-4 py-2">Automatización de pruebas DoS/persistencia</td></tr>
      <tr><td className="border px-4 py-2">gcc (MinGW / MSYS2)</td><td className="border px-4 py-2">Compilación de DLL</td></tr>
      <tr><td className="border px-4 py-2">launchctl (macOS)</td><td className="border px-4 py-2">Gestión de servicios de inicio</td></tr>
      <tr><td className="border px-4 py-2">lldb (macOS)</td><td className="border px-4 py-2">Depuración de código</td></tr>
      <tr><td className="border px-4 py-2">top / Activity Monitor</td><td className="border px-4 py-2">Monitoreo de recursos</td></tr>
      <tr><td className="border px-4 py-2">arp-scan</td><td className="border px-4 py-2">Descubrimiento de dispositivos en red</td></tr>
      <tr><td className="border px-4 py-2">Nmap</td><td className="border px-4 py-2">Escaneo de puertos y servicios</td></tr>
      <tr><td className="border px-4 py-2">Metasploit / Meterpreter</td><td className="border px-4 py-2">Explotación de vulnerabilidades</td></tr>
      <tr><td className="border px-4 py-2">Hashcat / John the Ripper</td><td className="border px-4 py-2">Crackeo de contraseñas</td></tr>
      <tr><td className="border px-4 py-2">MySQL</td><td className="border px-4 py-2">Base de datos objetivo</td></tr>
      <tr><td className="border px-4 py-2">Dirb / WPScan</td><td className="border px-4 py-2">Fuerza bruta y escaneo web</td></tr>
      <tr><td className="border px-4 py-2">FTP / Telnet / VNC</td><td className="border px-4 py-2">Acceso remoto</td></tr>
      <tr><td className="border px-4 py-2">hping3</td><td className="border px-4 py-2">Pruebas de red / DDoS</td></tr>
    </tbody>
  </table>

  <h3 className="text-xl font-semibold mt-6">Detalles de Implementación</h3>
  <p>Se configuraron sistemas con servicios mínimos y cuentas estándar sin privilegios. Se tomaron snapshots para revertir los entornos tras cada prueba. Las acciones se realizaron con permisos limitados, elevando privilegios solo para recolectar logs o verificar efectos.</p>

  <h2 className="text-2xl font-bold mt-10 mb-4"> Pruebas y Evaluación</h2>
  <h3 className="text-xl font-semibold mt-6"> Metodología de Pruebas</h3>
  <ul className="list-disc ml-6">
    <li>Escalada de privilegios desde usuario estándar</li>
    <li>Instalación y ejecución de rootkits</li>
    <li>Inyección de código (DLL o scripts)</li>
    <li>Ataques de denegación de servicio (DoS)</li>
    <li>Monitoreo de logs y alertas de seguridad</li>
  </ul>

  <h3 className="text-xl font-semibold mt-6">Casos de Prueba y Resultados</h3>
  <p>Puedes mostrar los casos en una tabla como esta:</p>

  <table className="table-auto w-full text-sm text-left border-collapse border border-gray-300 mt-4">
    <thead className="bg-gray-200">
      <tr>
        <th className="border px-2 py-1">ID</th>
        <th className="border px-2 py-1">Descripción</th>
        <th className="border px-2 py-1">Resultado Esperado</th>
        <th className="border px-2 py-1">Resultado Obtenido</th>
        <th className="border px-2 py-1">Éxito/Fallo</th>
      </tr>
    </thead>
    <tbody className="bg-white">
      <tr><td className="border px-2 py-1">CP-001</td><td className="border px-2 py-1">Escalada de privilegios en Android</td><td className="border px-2 py-1">Acceso root sin restricciones</td><td className="border px-2 py-1">su otorgó acceso root</td><td className="border px-2 py-1">Éxito</td></tr>
  
      <tr><td className="border px-2 py-1">CP-023</td><td className="border px-2 py-1">Simulación de DDoS con hping3</td><td className="border px-2 py-1">Degradación del servicio</td><td className="border px-2 py-1">Saturación en puerto 80</td><td className="border px-2 py-1">Éxito</td></tr>
    </tbody>
  </table>

  <h3 className="text-xl font-semibold mt-6"> Evaluación del Rendimiento</h3>
  <p>Durante las pruebas de DoS, el uso de CPU superó el 90% en todos los sistemas. Windows y Android mostraron inestabilidad, mientras que macOS resistió mejor bajo carga.</p>

  <h3 className="text-xl font-semibold mt-6"> Problemas Encontrados y Soluciones</h3>
  <ul className="list-disc ml-6">
    <li>Antivirus bloqueando pruebas en Windows → se desactivó temporalmente</li>
    <li>Compatibilidad con Extreme Injector → ejecución como administrador</li>
    <li>ADB no reconocía Android x86 → activación de “Depuración USB”</li>
    <li>Lentitud de macOS Catalina en VirtualBox → se aumentó RAM/CPU</li>
  </ul>

  <h2 className="text-2xl font-bold mt-10 mb-4">Conclusiones</h2>
  <p>El proyecto logró analizar y comparar técnicas ofensivas y defensivas en diferentes sistemas operativos. Se identificaron vulnerabilidades en Android y Linux, mientras que Windows y macOS mostraron mecanismos de defensa más sólidos.</p>
  <p>Se fortalecieron habilidades en:</p>
  <ul className="list-disc ml-6">
    <li>Gestión de usuarios y privilegios</li>
    <li>Administración de procesos</li>
    <li>Uso de herramientas de ciberseguridad reales</li>
    <li>Monitoreo de logs y respuestas a incidentes</li>
  </ul>
  <p>Se concluye que mantener los sistemas actualizados, limitar privilegios y monitorear eventos es clave para una defensa efectiva.</p>

  <h2 className="text-2xl font-bold mt-10 mb-4"> Trabajo Futuro</h2>
  <ul className="list-disc ml-6">
    <li>Evaluar antivirus y firewalls frente a exploits en tiempo real</li>
    <li>Automatizar pruebas con Ansible, PowerShell o Bash</li>
    <li>Incluir sistemas embebidos como Raspberry Pi</li>
    <li>Comparar versiones de OS: Android 12 vs 14, Windows 10 vs 11, etc.</li>
    <li>Simular entornos híbridos (cloud + local) para escenarios reales</li>
  </ul>
</section>
</div>
    
    </div>
  );
};