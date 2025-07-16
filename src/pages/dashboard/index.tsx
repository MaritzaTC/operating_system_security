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
    <>
    {/* Objetivo */}
      <div className="bg-white rounded-2xl shadow p-6 col-span-1 xl:col-span-2">
        <h2 className="text-xl font-bold text-slate-900 mb-2">🎯 Objetivo del Proyecto</h2>
        <p className="text-slate-600">
          Evaluar y comparar la seguridad de distintos sistemas operativos (Android, macOS, Windows y Linux) frente a ataques comunes mediante pruebas controladas en entornos virtualizados.
          Se busca identificar vulnerabilidades, mecanismos de defensa y capacidades de respuesta. Los resultados se presentan de forma técnica y visual con recomendaciones de seguridad.
        </p>
      </div>

      {/* Motivación */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-2">💡 Motivación y Justificación</h2>
        <p className="text-slate-600">
          La alta dependencia de los sistemas operativos los convierte en blancos constantes de ataques. El proyecto permite aplicar conocimientos del curso en un entorno realista,
          promoviendo la comprensión profunda de la ciberseguridad y fomentando buenas prácticas defensivas.
        </p>
      </div>

      {/* Alcance */}
      <div className="bg-white rounded-2xl shadow p-6 col-span-1 xl:col-span-2">
        <h2 className="text-xl font-bold text-slate-900 mb-2">📌 Alcance del Proyecto</h2>
        <ul className="list-disc list-inside text-slate-600 space-y-1 mb-4">
          <li>Simulación de ataques en SOs virtualizados.</li>
          <li>Pruebas de escalada de privilegios, DoS, rootkits e inyecciones.</li>
          <li>Comparación técnica y propuesta de mitigaciones.</li>
        </ul>
        <p className="font-semibold text-slate-800">Fuera del alcance:</p>
        <ul className="list-disc list-inside text-sm text-slate-500 mt-1">
          <li>Ataques a firmware o hardware.</li>
          <li>Ingeniería social y redes físicas reales.</li>
          <li>Pruebas en entornos productivos.</li>
        </ul>
      </div>
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
    </>
  );
};