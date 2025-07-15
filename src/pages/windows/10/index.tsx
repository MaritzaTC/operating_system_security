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
        🪟 Windows 10 
      </h1>

      {/* Guía de instalación */}
      <Accordion type="single" collapsible>
        <AccordionItem value="instalacion">
          <AccordionTrigger className="text-lg">
            💿 Guía de instalación de Windows 10 en VirtualBox
          </AccordionTrigger>
          <AccordionContent className="pt-4 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                📦 1. Descargar la imagen ISO
              </h2>
              <p>
                Visita la siguiente página para descargar los medios de instalación:
              </p>
              <a
                href="https://www.microsoft.com/en-us/software-download/windows10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                🔗 Link de descarga - Microsoft
              </a>
              <Image src="/medios.png" alt="Medios de instalación" width={891} height={238} className="w-full rounded-lg shadow-md mt-4" />
              <p>
                Ejecuta el asistente, acepta los términos y selecciona la opción para crear un medio de instalación para otro equipo (ISO).
              </p>
              <Image src="/iso.png" alt="Selección de medio ISO" width={891} height={238} className="w-full rounded-lg shadow-md mt-4" />
              <p>
                Selecciona el idioma, la edición y la arquitectura de Windows 10 que deseas instalar.
              </p>
              <Image src="/10install2.png" alt="Configuración de instalación" width={891} height={238} className="w-full rounded-lg shadow-md" />
              <p>Finalmente, elige el archivo ISO generado.</p>
              <Image src="/elegir.png" alt="Elección del archivo ISO" width={891} height={238} className="w-full rounded-lg shadow-md" />
              <p>
                Después de eso, necesitarás una clave de producto. Puedes encontrar claves gratuitas en:
              </p>
              <a
                href="https://medhacloud.com/blog/free-windows-10-keys-windows-11-keys-2025"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔑 Claves gratuitas - MedhaCloud
              </a>
              <Image src="/key.png" alt="Clave de instalación" width={891} height={238} className="w-full rounded-lg shadow-md" />
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                💻 2. Crear una nueva máquina virtual
              </h2>
              <p>
                Abre VirtualBox y haz clic en <code className="bg-gray-100 px-1 rounded">Nueva</code>.
              </p>
              <Image src="/10install.png" alt="Creación de máquina virtual" width={891} height={238} className="w-full rounded-lg shadow-md" />
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                ⚙️ 3. Instalar el sistema operativo
              </h2>
              <p>
                Configura los parámetros de hardware y monta la ISO descargada para iniciar la instalación.
              </p>
              <p className="mt-4">
                Durante el proceso, elige la edición <strong>Windows 10 Home</strong>.
              </p>
              <Image src="/install10.png" alt="Proceso de instalación" width={891} height={238} className="w-full rounded-lg shadow-md" />
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                🖥️ 4. Vista previa del entorno
              </h2>
              <Image src="/vista10.png" alt="Escritorio Windows 10" width={891} height={238} className="w-full rounded-lg shadow-md" />
            </section>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Estado base: procesos y servicios */}
      <Accordion type="single" collapsible>
        <AccordionItem value="estado-procesos">
          <AccordionTrigger className="text-lg">
            ⚙️ Estado base: Procesos y servicios
          </AccordionTrigger>
          <AccordionContent className="pt-4 space-y-6">
            <p>
              Ejecuta <code>tasklist</code> en CMD para ver procesos activos:
            </p>
            <Image src="/tasklist.png" alt="Tasklist 1" width={891} height={238} className="w-full rounded-lg shadow-md" />
            <Image src="/tasklist1.png" alt="Tasklist 2" width={891} height={238} className="w-full rounded-lg shadow-md" />
            <Image src="/tasklist3.png" alt="Tasklist 3" width={891} height={238} className="w-full rounded-lg shadow-md" />
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
            <code className="bg-gray-100 px-1 rounded">netstat -ano</code>
            <Image src="/port.png" alt="Netstat -ano 1" width={891} height={238} className="w-full rounded-lg shadow-md mt-4" />
            <Image src="/port2.png" alt="Netstat -ano 2" width={891} height={238} className="w-full rounded-lg shadow-md" />
            <Image src="/port3.png" alt="Netstat -ano 3" width={891} height={238} className="w-full rounded-lg shadow-md" />
            <p>Con nombres y servicios:</p>
            <code className="bg-gray-100 px-1 rounded">netstat -abn</code>
            <Image src="/netstat.png" alt="Netstat -abn 1" width={891} height={238} className="w-full rounded-lg shadow-md" />
            <Image src="/netstat1.png" alt="Netstat -abn 2" width={891} height={238} className="w-full rounded-lg shadow-md" />
            <Image src="/netstat2.png" alt="Netstat -abn 3" width={891} height={238} className="w-full rounded-lg shadow-md" />
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
            <p>Desde CMD con privilegios:</p>
            <pre className="bg-gray-100 p-2 rounded">
              net user testuserxp 12345 /add{"\n"}
              net localgroup users testuserxp /add
            </pre>
            <Image src="/user.png" alt="Crear usuario 1" width={891} height={238} className="w-full rounded-lg shadow-md" />
            <Image src="/user1.png" alt="Crear usuario 2" width={891} height={238} className="w-full rounded-lg shadow-md" />
            <p>
              Verifica que no tenga privilegios:
              <code className="bg-gray-100 px-1 ml-2 rounded">net localgroup administrators</code>
            </p>
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
            <p>Inicia sesión como testuser y ejecuta:</p>
            <code className="bg-gray-100 px-1 rounded">runas /user:Administrador cmd</code>
            <Image src="/user3.png" alt="Intento de escalada 1" width={891} height={238} className="w-full rounded-lg shadow-md" />
            <Image src="/user4.png" alt="Intento de escalada 2" width={891} height={238} className="w-full rounded-lg shadow-md" />
            <p>
              Intenté ejecutar `runas /user:Administrador cmd` desde una cuenta estándar.
              <br />
              ✅ El intento fue bloqueado.
              <br />
              ✅ Apareció la ventana del UAC solicitando contraseña.
              <br />
              ✅ Se registró el evento 4625 (inicio de sesión fallido) en Event Viewer.
              <br />
              📝 Esto indica que no se puede escalar sin conocer la contraseña del administrador.

            </p>
            <h3 className="text-lg font-semibold mt-6">
              🛠️ Herramienta de escalada: WES-NG
            </h3>
            <p>
              WES-NG identifica vulnerabilidades explotables en sistemas Windows basándose en parches faltantes.
            </p>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Desde Windows, ejecuta: <code>systeminfo &gt; systeminfo.txt</code></li>
              <li>En Kali: <code>git clone https://github.com/bitsadmin/wesng.git</code></li>
              <li>
                Luego en el directorio clonado:
                <br />
                <code>python3 wes.py systeminfo.txt --color &gt; result_wes.txt</code>
              </li>
            </ol>
            <Image src="/parches.png" alt="WES-NG en acción" width={891} height={238} className="w-full rounded-lg shadow-md" />
            <p>El resultado mostrará los CVEs pendientes y sus detalles.</p>

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
              Se investigaron rootkits conocidos y se decidió probar el siguiente:
            </p>
            <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
              https://github.com/bytecode77/r77-rootkit
            </pre>
            <p>
              Se descarga el archivo <code>.zip</code> desde el repositorio y se descomprime.
            </p>
            <Image
              src="/Rookit10.png"
              alt="Archivo ZIP del rootkit descargado"
              width={891}
              height={238}
              className="w-full rounded-lg shadow-md"
            />
            <p>
              Al ejecutar el archivo <code>.exe</code>, Windows Defender alerta sobre la amenaza.
            </p>
            <Image
              src="/RookitI.png"
              alt="Alerta de Windows Defender"
              width={891}
              height={238}
              className="w-full rounded-lg shadow-md"
            />
            <p>
              Se selecciona <strong>Acciones recomendadas</strong> y luego <strong>Permitir</strong> para ejecutar el rootkit.
            </p>
            <p>
              Al abrir el <em>Test Console</em>, se visualiza la lista de procesos inyectados. La columna <strong>Flags</strong> muestra
              información adicional. Algunos procesos son ocultados por ID usando el sistema de configuración.
              Por ejemplo, el proceso del servicio <code>r77</code> se oculta por defecto.
            </p>
            <p>
              El botón <strong>Hide</strong> permite ocultar manualmente un proceso. Al usar <code>Uninstall.exe</code>, se eliminan los ID ocultos.
            </p>
            <Image
              src="/test1.png"
              alt="Consola de prueba mostrando procesos inyectados"
              width={891}
              height={238}
              className="w-full rounded-lg shadow-md"
            />
            <Image
              src="/test2.png"
              alt="Detalle de flags y opciones de ocultamiento"
              width={891}
              height={238}
              className="w-full rounded-lg shadow-md"
            />
            <p>
              Al abrir el Administrador de tareas, se observa que <strong>r77 Test Console</strong> está en ejecución.
            </p>
            <Image
              src="/test3.png"
              alt="r77 Test Console visible en el Administrador de tareas"
              width={891}
              height={238}
              className="w-full rounded-lg shadow-md"
            />
            <p>
              Posteriormente, se hace clic en <strong>Hide</strong> dentro del Test Console.
            </p>
            <Image
              src="/test4.png"
              alt="Proceso ocultado mediante la consola"
              width={891}
              height={238}
              className="w-full rounded-lg shadow-md"
            />
            <p>
              Al revisar nuevamente el Administrador de tareas, el proceso ha desaparecido: se encuentra oculto.
            </p>
            <Image
              src="/test5.png"
              alt="Proceso oculto en el Administrador de tareas"
              width={891}
              height={238}
              className="w-full rounded-lg shadow-md"
            />
            <p>
              En el <strong>Event Viewer</strong>, no se detectó directamente el rootkit, pero se observaron <strong>patrones inusuales</strong> que podrían levantar sospechas, como:
            </p>
            <ul className="list-disc list-inside">
              <li><code>5379</code>: Lecturas masivas de credenciales en Credential Manager.</li>
              <li><code>4672</code>: Asignación de privilegios elevados como <code>SeDebugPrivilege</code>.</li>
            </ul>
            <p>
              Después de desinstalar el rootkit, <strong>Windows Defender no logró detectarlo</strong>, demostrando cómo estos métodos logran evadir mecanismos tradicionales de protección.
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
              Para simular un ataque de denegación de servicio por saturación de CPU/memoria, ejecuta el siguiente script en PowerShell:
            </p>
            <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
              <code>{`while ($true) { Start-Job { while ($true) {} } }`}</code>
            </pre>
            <p>
              Este script lanza múltiples procesos infinitos, lo cual incrementa el uso de CPU y memoria del sistema.
            </p>
            <Image
              src="/saturation.png"
              alt="Procesos saturando el sistema"
              width={891}
              height={238}
              className="w-full rounded-lg shadow-md"
            />
            <p>
              En el Administrador de tareas (Task Manager), podrás observar un uso intensivo de CPU y memoria: El sistema se verá afectado, con un alto número de procesos en ejecución y un uso elevado de recursos. Muy lento y con dificultad para interactuar.
            </p>
            <Image
              src="/cpu.png"
              alt="Uso elevado de CPU en Task Manager"
              width={891}
              height={238}
              className="w-full rounded-lg shadow-md"
            />
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
        Se realizaron pruebas de inyección de código mediante el uso de una DLL personalizada en C, 
        la cual muestra un cuadro de diálogo al ser cargada. El proceso objetivo seleccionado fue <code>notepad.exe</code>,
        y se utilizó la herramienta <strong>Extreme Injector</strong> para ejecutar la inyección.
      </p>

      <p>El código fuente de la DLL fue:</p>

      <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`#include <windows.h>
#include <stdio.h>

BOOL APIENTRY DllMain(HMODULE hModule, DWORD ul_reason_for_call, LPVOID lpReserved) {
    switch (ul_reason_for_call) {
        case DLL_PROCESS_ATTACH:
            MessageBoxA(NULL, "¡Inyectado exitosamente!", "DLL", MB_OK | MB_ICONINFORMATION);

                       FILE *file = fopen("C:\\Users\\vboxuser\\Documents\\dll_inyectada.txt", "w");
            if (file != NULL) {
                fprintf(file, "¡DLL ejecutada correctamente!\n");
                fclose(file);
            }
            break;
    }
    return TRUE;
}
`}
      </pre>

      <p>La compilación se realizó con GCC (MinGW) desde MSYS2:</p>
      <pre className="bg-gray-100 p-2 rounded-md text-sm overflow-auto">
gcc -shared -o prueba.dll prueba.c -Wall
      </pre>

      <p><strong>Paso a paso de la inyección:</strong></p>
      <ol className="list-decimal list-inside space-y-1">
        <li>Se ejecuta <code>notepad.exe</code>.</li>
        <li>Se abre <strong>Extreme Injector</strong> como administrador.</li>
        <li>Se selecciona el proceso objetivo (<code>notepad.exe</code>).</li>
        <li>Se carga el archivo <code>prueba.dll</code>.</li>
        <li>Se presiona el botón <strong>Inject</strong>.</li>
      </ol>


      <p>
        Si la inyección es exitosa, debe aparecer el cuadro de mensaje definido en la DLL:
      </p>

      <video controls width="100%" className="rounded-lg shadow-md">
  <source src="/videoIny.mp4" type="video/mp4" />
  Tu navegador no soporta el video.
</video>

      <h4 className="text-lg font-semibold">📁 Verificación alternativa con archivo</h4>
      <p>
        En caso de que el sistema bloquee la aparición del cuadro de diálogo, se utilizó una variante de la DLL
        que genera un archivo <code>dll_inyectada.txt</code> como prueba de ejecución:
      </p>

      <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`FILE *f = fopen("C:\\\\Users\\\\vboxuser\\\\Documents\\\\dll_inyectada.txt", "w");
if (f) {
    fprintf(f, "¡DLL ejecutada!\\n");
    fclose(f);
}`}
      </pre>

      <p>Este archivo permite verificar si el código de la DLL realmente se ejecutó dentro del proceso inyectado.</p>

      <h4 className="text-lg font-semibold">Verificar integridad de servicios críticos</h4>
      <p>
        Se utilizaron herramientas como <strong>Process Hacker</strong> y <strong>System Informer</strong> para observar el comportamiento del sistema tras la inyección.
        Se monitorearon procesos como <code>services.exe</code>, <code>svchost.exe</code> y posibles DLLs sospechosas cargadas.
      </p>

      <p>Además, se revisaron los logs del Event Viewer, identificando posibles eventos relacionados con la inyección:</p>
      <ul className="list-disc list-inside ml-4">
        <li><strong>4672:</strong> Asignación de privilegios especiales como SeDebugPrivilege.</li>
        <li><strong>5379:</strong> Lectura repetida de credenciales desde el Credential Manager.</li>
      </ul>

      <p className="text-sm text-gray-600">
        🎥 Esta práctica es ideal para demostrar cómo funciona la inyección básica de código en Windows, 
        cómo puede ser detectada o no por el sistema, y qué herramientas permiten observar sus efectos.
      </p>

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
      
      <h4 className="text-lg font-semibold">Defensas activadas por defecto</h4>
      <p>
        Durante las pruebas, se observó que Windows 10 cuenta con defensas activas por defecto, entre ellas:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Windows Defender:</strong> detectó y bloqueó automáticamente:
          <ul className="list-disc list-inside ml-4">
            <li>La ejecución del rootkit <code>r77</code>.</li>
            <li>La carga de la DLL con <code>Extreme Injector</code>, siempre que el antivirus estuviera activo.</li>
          </ul>
        </li>
        <li>
          <strong>SmartScreen:</strong> mostró advertencias al intentar ejecutar ejecutables descargados de Internet.
        </li>
        <li>
          <strong>UAC (Control de cuentas de usuario):</strong> solicitó permisos elevados al usar herramientas como el inyector.
        </li>
      </ul>

      <p>
        <strong>Nota:</strong> Para poder realizar las pruebas de inyección, fue necesario desactivar temporalmente Windows Defender. 
        Esto permitió que la DLL se inyectara correctamente, demostrando que el antivirus sí bloquea amenazas de este tipo por defecto.
      </p>

      <h4 className="text-lg font-semibold">3.2.2 Facilidad o dificultad para ejecutar ataques</h4>
      <p>El nivel de dificultad para ejecutar los ataques varía según el estado de las defensas del sistema:</p>

      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Con antivirus activado:</strong> muchos de los ataques fueron bloqueados inmediatamente, sin permitir su ejecución.
        </li>
        <li>
          <strong>Con antivirus desactivado:</strong> fue posible:
          <ul className="list-disc list-inside ml-4">
            <li>Inyectar una DLL con <code>MessageBoxA</code> en <code>notepad.exe</code>.</li>
            <li>Ejecutar el rootkit <code>r77</code> y ocultar procesos del Task Manager.</li>
          </ul>
        </li>
        <li>
          Herramientas como <strong>Process Hacker</strong> protegieron procesos críticos, mostrando accesos denegados sin privilegios adecuados.
        </li>
      </ul>

    </AccordionContent>
  </AccordionItem>
</Accordion>


    </div>
  );
} 