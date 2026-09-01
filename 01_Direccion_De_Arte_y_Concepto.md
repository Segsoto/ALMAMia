# Alma Mía | SPA & Medicina Estética
## Dirección de Arte y Concepto UX/UI de Lujo Silencioso

### 1. Dirección de Arte y Paleta de Color Vanguardista
**Metáfora Visual: "El Laboratorio del Alma"**
El concepto visual se aleja por completo de lo esotérico o lo puramente estético. En su lugar, abraza la dualidad entre la *precisión científica* de la medicina y la *pureza orgánica* del cuerpo humano. Es un espacio digital que respira, transmite calma absoluta y un rigor clínico impecable.

**Paleta de Color (Minimalista de 3 tonos):**
*   **Alabastro Texturizado (`#F7F6F2`):** El fondo dominante. No es un blanco puro o clínico, sino un tono crudo, similar al lino o al estuco veneciano, que aporta calidez y profundidad táctil.
*   **Verde Oliva Quemado (`#363A2E`):** El tono de contraste profundo. Reemplaza al negro y a los azules médicos genéricos. Aporta una elegancia sobria, evocando botánica y profesionalismo. Se utiliza para la tipografía principal y los bloques arquitectónicos pesados.
*   **Arcilla Suave (`#D9CEC3`):** Tono de acento y transición. Se emplea para los estados *hover*, superposiciones translúcidas y detalles sutiles, recordando la piel humana y la tierra.

### 2. Sistema Tipográfico Expresivo y Editorial
El contraste tipográfico es drástico, emulando revistas de alta moda y publicaciones editoriales premium de salud.

*   **Títulos (El Alma):** Una tipografía Serif fluida y de alto contraste (como *PP Editorial New*, *Ogg* o *Cormorant Garamond*). Se utiliza en tamaños masivos (ej. `8vw` a `12vw`), con un interlineado ajustado y *tracking* negativo. Ciertas letras en los titulares pueden entrelazarse o presentar ligaduras que denotan la conexión orgánica.
*   **Cuerpo y Detalles Técnicos (La Ciencia):** Una tipografía Monoespaciada o Grotesca ultra-limpia (como *Geist Mono*, *Neue Montreal* o *Space Grotesk*). Se aplica en tamaños muy reducidos (ej. `11px` - `13px`) en mayúsculas para describir especificaciones de aparatología, ingredientes activos o metadatos de los tratamientos.

### 3. Estructura de Retícula (Grid) Asimétrica y Rota
El lienzo web se trata como un recorrido físico dentro del spa. 
*   **Espacio en Blanco (Aire Visual):** Es el elemento más importante del diseño. Los elementos no llenan la pantalla; habitan en ella.
*   **Colocación Asimétrica:** Imágenes de proporciones extremas (muy verticales o muy horizontales) alineadas a los márgenes derecho o izquierdo, rompiendo el centro. 
*   **Superposición Editorial:** Títulos masivos que se superponen a los bordes de fotografías macro (texturas de piel, luz incidiendo sobre aparatología metálica). Ausencia total de tarjetas con bordes redondeados y sombras (box-shadow).

### 4. Interacciones, Micro-movimientos y Transiciones Orgánicas
El dinamismo no debe marear, debe relajar.
*   **Scroll Fluido (Lenis):** Una fricción suave que hace que navegar se sienta como deslizarse sobre seda.
*   **Revelación por Máscaras (Clip-path):** Al hacer scroll, las imágenes no hacen "fade in"; se revelan suavemente mediante máscaras geométricas asimétricas, como si se corriera un velo.
*   **Cursor Personalizado:** Un pequeño punto (Dot) en tono Verde Oliva que, al posarse sobre enlaces o tratamientos, se expande suavemente convirtiéndose en un círculo vacío con la palabra "Descubrir" girando alrededor.
*   **Transiciones de Fondo:** Al pasar de la sección de Estética a la Médica, el fondo del sitio transmuta suavemente mediante CSS del Alabastro a un tono Arcilla Suave, cambiando el estado de ánimo (mood) del usuario.

### 5. Estructura Arquitectónica (Landing Page)
1.  **Hero / Bienvenida:**
    *   *Izquierda Superior:* Título enorme ("La ciencia de tu naturaleza") en Serif, rompiendo en tres líneas asimétricas.
    *   *Derecha Inferior:* Fotografía vertical de alta moda (un rostro sereno con un rayo de luz o textura de suero).
    *   *CTA:* Un botón desnudo, solo texto Monoespaciado con una línea fina debajo que se expande al hacer hover.
2.  **Manifiesto / La Esencia:**
    *   Un bloque de respiro. El fondo se oscurece a Verde Oliva. Texto gigantesco en Alabastro: *"La belleza no es un molde, es un estado de equilibrio."*
3.  **Tratamientos Destacados (El Catálogo Atípico):**
    *   En lugar de un grid de fotos, una **lista vertical interactiva** de pantalla completa. Los nombres de las áreas (Ej. *Armonización Facial*, *Terapia Láser*) ocupan el ancho entero en tipografía Serif masiva.
    *   Al pasar el cursor sobre cada nombre, la imagen de fondo de la sección cambia suavemente, y aparece una pequeña ficha técnica monoespaciada flotando cerca del cursor.
4.  **Confianza y Especialización:**
    *   Diseño estilo "Ficha de Laboratorio". Textos monoespaciados, líneas de división de 1px (Verde Oliva), detallando certificaciones y la tecnología exacta (aparatología) en Pérez Zeledón.
5.  **Ubicación y Conexión (Footer Inmersivo):**
    *   Pie de página expandido. Un mapa integrado (estilo Waze/Google Maps) pero estilizado en escala de grises y tonos arena para no romper la estética. 
    *   Tipografía enorme que dice "Visítanos en Pérez Zeledón" y enlaces directos de contacto (WhatsApp) que reaccionan de manera elástica al hover.
