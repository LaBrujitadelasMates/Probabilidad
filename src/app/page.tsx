import Image from 'next/image';
import type { Metadata } from 'next';

// Definir metadatos
export const metadata: Metadata = {
  title: 'La Bruja de las Mates® - Probabilidad y Estadística',
  description: 'Página web interactiva sobre probabilidad y estadística para bachillerato y secundaria.',
  icons: {
    icon: '/logo1.svg',
  },
};

// Componente para renderizar fórmulas LaTeX (se necesitará una librería como KaTeX o MathJax)
const Latex = ({ children }: { children: string }) => {
  return <span className="font-mono bg-gray-200 text-gray-800 p-1 rounded text-sm">{children}</span>;
};

const Seccion = ({ titulo, children }: { titulo: string, children: React.ReactNode }) => (
  <section className="mb-12 p-6 bg-brand-gray-dark rounded-lg shadow-xl">
    <h2 className="text-3xl font-bold mb-6 text-brand-violet border-b-2 border-brand-orange pb-2">{titulo}</h2>
    <div className="prose prose-invert max-w-none text-gray-300">
      {children}
    </div>
  </section>
);

const SimulacionPlaceholder = ({ titulo, descripcion }: { titulo: string, descripcion: string }) => (
  <div className="my-8 p-4 border-2 border-dashed border-brand-green rounded-md bg-gray-800">
    <h3 className="text-xl font-semibold text-brand-green mb-2">Simulación Interactiva: {titulo}</h3>
    <p className="text-gray-400"><em>{descripcion}</em></p>
    <p className="mt-4 text-center text-brand-orange">[Aquí irá la simulación interactiva]</p>
  </div>
);

export default function HomePage() {
  return (
    <>
      <header className="bg-brand-black text-white py-8 shadow-2xl">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo1.svg" alt="Logo La Bruja de las Mates" width={60} height={60} className="mr-4" />
            <Image src="/logo2.svg" alt="Logo Adicional" width={150} height={50} className="hidden sm:block mr-4"/>
            <h1 className="text-4xl font-bold text-brand-violet">La Bruja de las Mates®</h1>
          </div>
          <Image src="/gatito_mascota.png" alt="Mascota Gatito" width={80} height={80} className="rounded-full shadow-lg"/>
        </div>
      </header>
      <main className="test-main-class">
        <p className="text-lg text-gray-300 mb-12 text-center">
          Bienvenido/a a esta plataforma interactiva donde exploraremos los fascinantes conceptos de la probabilidad y la estadística,
          diseñada especialmente para estudiantes de bachillerato. ¡Prepárate para aprender de forma visual y atractiva!
        </p>

        <Seccion titulo="1. Probabilidad">
          <p>La probabilidad es una medida de la certidumbre de que ocurra un evento. Se expresa como un número entre 0 y 1, donde 0 indica imposibilidad y 1 indica certeza total.</p>
          <h3 className="text-2xl font-semibold mt-6 mb-3 text-brand-orange">Conceptos Básicos de Probabilidad</h3>
          <h4 className="text-xl font-semibold mt-4 mb-2 text-brand-violet">Experimento Aleatorio</h4>
          <p>Un experimento aleatorio es aquel que, bajo las mismas condiciones iniciales, puede presentar diferentes resultados. No se puede predecir con certeza cuál será el resultado exacto.</p>
          <p><em>Ejemplos:</em></p>
          <ul className="list-disc list-inside ml-4">
            <li>Lanzar una moneda (puede salir cara o cruz).</li>
            <li>Lanzar un dado (puede salir 1, 2, 3, 4, 5 o 6).</li>
            <li>Extraer una carta de una baraja.</li>
          </ul>
          <h4 className="text-xl font-semibold mt-4 mb-2 text-brand-violet">Espacio Muestral (E)</h4>
          <p>Es el conjunto de todos los posibles resultados de un experimento aleatorio.</p>
          <p><em>Ejemplos:</em></p>
          <ul className="list-disc list-inside ml-4">
            <li>Al lanzar una moneda, <Latex>E = \{{"Cara"}, { "Cruz"}\}</Latex>.</li>
            <li>Al lanzar un dado, <Latex>E = \{{1}, {2}, {3}, {4}, {5}, {6}\}</Latex>.</li>
          </ul>
          <h4 className="text-xl font-semibold mt-4 mb-2 text-brand-violet">Suceso</h4>
          <p>Un suceso es cualquier subconjunto del espacio muestral. Es decir, es uno o varios de los posibles resultados.</p>
          <p><em>Tipos de sucesos:</em></p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Suceso elemental:</strong> Formado por un único resultado del espacio muestral.</li>
            <li><strong>Suceso compuesto:</strong> Formado por dos o más sucesos elementales.</li>
            <li><strong>Suceso seguro:</strong> Es el propio espacio muestral (E). Siempre ocurre.</li>
            <li><strong>Suceso imposible (<Latex>\emptyset</Latex>):</strong> Es el conjunto vacío. Nunca ocurre.</li>
            <li><strong>Suceso contrario (o complementario) de A (<Latex>\bar{{"A"}}</Latex> o <Latex>A'</Latex>):</strong> Es el suceso que ocurre cuando no ocurre A.</li>
          </ul>
          <h4 className="text-xl font-semibold mt-4 mb-2 text-brand-violet">Definición de Probabilidad (Regla de Laplace)</h4>
          <p>Si todos los sucesos elementales de un experimento aleatorio son equiprobables, la probabilidad de un suceso A se calcula como:</p>
          <p className="text-center my-2"><Latex>P(A) = \frac{{"Número de casos favorables a A"}}{{"Número de casos posibles"}}</Latex></p>
          <h4 className="text-xl font-semibold mt-4 mb-2 text-brand-violet">Propiedades de la Probabilidad</h4>
          <ol className="list-decimal list-inside ml-4">
            <li><Latex>0 \leq P(A) \leq 1</Latex></li>
            <li><Latex>P(E) = 1</Latex></li>
            <li><Latex>P(\emptyset) = 0</Latex></li>
            <li><Latex>P(\bar{{"A"}}) = 1 - P(A)</Latex></li>
          </ol>
          <h4 className="text-xl font-semibold mt-4 mb-2 text-brand-violet">Unión e Intersección de Sucesos</h4>
          <p>Unión (<Latex>A \cup B</Latex>): "ocurre A o ocurre B o ambos".</p>
          <p>Intersección (<Latex>A \cap B</Latex>): "ocurre A y ocurre B".</p>
          <p><Latex>P(A \cup B) = P(A) + P(B) - P(A \cap B)</Latex></p>
          <p>Si A y B son incompatibles (<Latex>A \cap B = \emptyset</Latex>), entonces <Latex>P(A \cup B) = P(A) + P(B)</Latex>.</p>
          <h4 className="text-xl font-semibold mt-4 mb-2 text-brand-violet">Probabilidad Condicionada</h4>
          <p><Latex>P(A|B) = \frac{{P(A \cap B)}}{{P(B)}}</Latex>, si <Latex>P(B) > 0</Latex>.</p>
          <p>Regla de la multiplicación: <Latex>P(A \cap B) = P(B) \cdot P(A|B)</Latex></p>
          <h4 className="text-xl font-semibold mt-4 mb-2 text-brand-violet">Sucesos Independientes</h4>
          <p>Si A y B son independientes: <Latex>P(A \cap B) = P(A) \cdot P(B)</Latex>.</p>
          <SimulacionPlaceholder titulo="Lanzamiento de Moneda" descripcion="Visualiza cómo la frecuencia relativa de caras (o cruces) se aproxima a la probabilidad teórica (0.5) a medida que aumenta el número de lanzamientos." />
          <SimulacionPlaceholder titulo="Lanzamiento de Dado" descripcion="Similar al lanzamiento de moneda, pero con 6 resultados posibles. Visualiza la distribución de frecuencias." />
        </Seccion>

        <Seccion titulo="2. Teorema de Bayes">
          <p>Contenido de Teorema de Bayes... (Tomado de bayes.md)</p>
          <SimulacionPlaceholder titulo="Escenario de Diagnóstico Médico" descripcion="Explora cómo cambian las probabilidades a posteriori al modificar las probabilidades a priori y las verosimilitudes." />
        </Seccion>

        <Seccion titulo="3. Distribuciones de Medias Muestrales">
          <p>Contenido de Distribuciones de Medias Muestrales... (Tomado de distribuciones_medias_muestrales.md)</p>
          <SimulacionPlaceholder titulo="Explorador del Teorema Central del Límite" descripcion="Visualiza cómo la distribución de las medias muestrales tiende a la normalidad a medida que aumenta el tamaño de la muestra." />
        </Seccion>

        <Seccion titulo="4. Intervalos de Confianza para la Media">
          <p>Contenido de Intervalos de Confianza... (Tomado de intervalos_confianza.md)</p>
          <SimulacionPlaceholder titulo="Explorador de Intervalos de Confianza" descripcion="Visualiza cómo se construyen los intervalos de confianza y cómo diferentes factores afectan su amplitud." />
        </Seccion>

        <Seccion titulo="5. Inferencia Estadística (Pruebas de Hipótesis)">
          <p>Contenido de Inferencia Estadística... (Tomado de inferencia_estadistica.md)</p>
          <SimulacionPlaceholder titulo="Visualizador de p-valor y Región de Rechazo" descripcion="Comprende la relación entre el estadístico de prueba, el p-valor, y la región de rechazo." />
        </Seccion>

      </main>

      <footer className="bg-brand-black text-gray-400 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} La Bruja de las Mates®. Todos los derechos reservados.</p>
        <p>Desarrollado con fines educativos.</p>
      </footer>
    </>
  );
}

