# Hacker Days - Prototipando el futuro del rural, en comunidad

Una iniciativa para prototipar soluciones a retos reales del mundo rural en comunidad. Este sitio web muestra la información del evento Hacker Days que se celebrará del 1 al 7 de septiembre de 2025 en Anceu, Galicia.

![Hacker Days](/public/favicon.svg)

## 🌱 Sobre Hacker Days

Hacker Days nace con la idea de resolver retos reales en solo una semana, demostrando que, aportando cada persona un poquito, se pueden construir soluciones que ayuden a toda una comunidad rural.

### El reto 2025: Automatizar la gestión colectiva del agua

Cada edición aborda un nuevo reto que nace desde la aldea. El reto de 2025 se centra en ayudar a Rosabel y Olga, dos mujeres que gestionan el sistema comunitario de agua de su aldea. El objetivo es crear una solución open source replicable que facilite continuar con este sistema de gestión colectiva de agua, potencialmente beneficiando a más de 1500 aldeas.

## 🚀 Estructura del Proyecto

```text
/
├── public/             # Archivos estáticos
│   └── favicon.svg
├── src/
│   ├── components/     # Componentes reutilizables
│   │   ├── Hero.astro
│   │   ├── WhySection.astro
│   │   ├── ChallengeSection.astro
│   │   └── ...
│   ├── layouts/        # Plantillas de página
│   │   └── Layout.astro
│   └── pages/          # Rutas y páginas
│       └── index.astro
└── package.json
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Acción                                            |
| :------------------------ | :------------------------------------------------ |
| `npm install`             | Instala dependencias                              |
| `npm run dev`             | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Compila el sitio para producción en `./dist/`     |
| `npm run preview`         | Previsualiza la compilación antes de desplegar    |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |

## 💻 Tecnologías

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [AOS](https://michalsnik.github.io/aos/) para animaciones al scroll

## 📝 Logística del Evento

- **Fecha**: 1-7 Septiembre 2025
- **Lugar**: Anceu, Galicia
- **Participación**: Gratuita
- **Alojamiento**: Incluido en Anceu Coliving
- **Manutención**: Incluida durante toda la semana
- **Espacios de trabajo**: Anceu Coliving y Casa del Pueblo Vecinal

## 👀 Más información

Para más información sobre el evento, visita el [sitio web](https://hackerdays.ruralhackers.com) o contacta directamente con los organizadores.

### Síguenos en redes sociales

- <a href="https://instagram.com/ruralhackers" target="_blank" rel="noopener noreferrer">Instagram: @ruralhackers</a>
- <a href="https://www.youtube.com/@ruralhackers" target="_blank" rel="noopener noreferrer">YouTube: ruralhackers</a>
- <a href="https://linkedin.com/in/ruralhackers" target="_blank" rel="noopener noreferrer">LinkedIn: @ruralhackers</a>
