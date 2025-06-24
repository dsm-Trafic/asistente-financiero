# Asistente Financiero

Una aplicación web moderna para gestión financiera personal con interfaz inteligente en lenguaje natural.

## 🚀 Características

- **Interfaz Inteligente**: Registra gastos escribiendo en lenguaje natural
- **Dashboard Completo**: Visualiza tus finanzas con gráficos interactivos
- **Categorización Automática**: Organiza tus gastos automáticamente
- **Reportes Detallados**: Genera reportes personalizados
- **Exportación de Datos**: Descarga tus datos en CSV o JSON
- **Diseño Responsivo**: Funciona perfectamente en móvil y desktop

## 🛠️ Tecnologías

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite

## 🐳 Deploy con Docker

### Opción 1: Build local
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/asistente-financiero.git
cd asistente-financiero

# Construir la imagen
docker build -t asistente-financiero .

# Ejecutar el contenedor
docker run -p 80:80 asistente-financiero
```

### Opción 2: EasyPanel
1. En EasyPanel, crear nueva aplicación Docker
2. Conectar con este repositorio de GitHub
3. EasyPanel construirá y deployará automáticamente

## 🔧 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de la build
npm run preview
```

## 📱 Integración con WhatsApp

La aplicación está diseñada para integrarse con Evolution API y n8n para procesamiento de mensajes de WhatsApp.

### Webhook configurado:
```
https://n8n-1-n8n.szvxgu.easypanel.host/webhook/asistente_financiero
```

### Instancia Evolution API:
```
n8n_1
```

## 🎯 Uso

1. **Registrar Gastos**: Escribe mensajes como "Gasté 15000 en comida"
2. **Ver Dashboard**: Revisa tus estadísticas y gráficos
3. **Generar Reportes**: Solicita reportes específicos
4. **Exportar Datos**: Descarga tus datos para análisis externos

## 🔒 Privacidad

- Todos los datos se almacenan localmente en el navegador
- No se envían datos personales a terceros
- Integración opcional con Google Sheets a través de webhook seguro

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes preguntas o necesitas ayuda, abre un issue en este repositorio.