import React from 'react';
import { MessageCircle, DollarSign, BarChart3, Settings, Download, Zap } from 'lucide-react';

const Help: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Entrada en Lenguaje Natural',
      description: 'Escribe mensajes como "Gasté 15 mil en comida" y el sistema lo procesará automáticamente.',
      examples: [
        'Gasté 2000 en combustible',
        'Comí en un restaurante por 5 mil',
        'Ayer pagué el gas por 1000'
      ]
    },
    {
      icon: BarChart3,
      title: 'Reportes y Consultas',
      description: 'Solicita reportes detallados y consultas específicas sobre tus gastos.',
      examples: [
        'Dame el reporte del mes',
        '¿Cuál fue mi mayor gasto?',
        'Los 3 gastos más altos'
      ]
    },
    {
      icon: Download,
      title: 'Exportación de Datos',
      description: 'Descarga tus datos en formato CSV o JSON para análisis externos.',
      examples: [
        'Exportar gastos del mes',
        'Descargar en Excel',
        'Obtener reporte en CSV'
      ]
    },
    {
      icon: Settings,
      title: 'Configuración Avanzada',
      description: 'Personaliza reportes automáticos y preferencias del sistema.',
      examples: [
        'Activar reporte diario',
        'Desactivar reporte semanal',
        'Cambiar moneda a EUR'
      ]
    }
  ];

  const categories = [
    { name: 'Alimentación', icon: '🍔', desc: 'Comida, supermercado, restaurantes' },
    { name: 'Vivienda', icon: '🏡', desc: 'Arriendo, servicios, mantenimiento' },
    { name: 'Transporte', icon: '🚗', desc: 'Gasolina, transporte público, taxis' },
    { name: 'Salud', icon: '💊', desc: 'Médico, medicamentos, seguros' },
    { name: 'Educación', icon: '📚', desc: 'Cursos, libros, materiales' },
    { name: 'Ocio', icon: '🎉', desc: 'Entretenimiento, hobbies, vacaciones' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <Zap className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Centro de Ayuda</h1>
            <p className="text-emerald-100 text-lg">
              Aprende a usar tu asistente financiero inteligente
            </p>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 Inicio Rápido</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-emerald-50 rounded-xl border border-emerald-200">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Registra Gastos</h3>
            <p className="text-gray-600 text-sm">Escribe en lenguaje natural: "Gasté 5000 en almuerzo"</p>
          </div>
          
          <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Ve tus Reportes</h3>
            <p className="text-gray-600 text-sm">Solicita reportes: "Dame el resumen del mes"</p>
          </div>
          
          <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-200">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Analiza y Exporta</h3>
            <p className="text-gray-600 text-sm">Descarga datos y analiza patrones de gasto</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
            </div>
            
            <p className="text-gray-600 mb-4">{feature.description}</p>
            
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">Ejemplos:</p>
              {feature.examples.map((example, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-700">
                    {example}
                  </code>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📂 Categorías Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="text-2xl">{category.icon}</span>
              <div>
                <h3 className="font-medium text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>💡 Tip:</strong> El sistema categoriza automáticamente tus gastos basándose en palabras clave. 
            Si no encuentra una categoría específica, los clasifica como "Otros".
          </p>
        </div>
      </div>

      {/* Integration Info */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🔗 Integración con WhatsApp</h2>
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Webhook Configurado</h3>
            <p className="text-sm text-green-700">
              El sistema está configurado para recibir mensajes desde WhatsApp a través de Evolution API.
            </p>
            <code className="block mt-2 text-xs bg-green-100 p-2 rounded text-green-800">
              https://n8n-1-n8n.szvxgu.easypanel.host/webhook/asistente_financiero
            </code>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h3 className="font-semibold text-amber-800 mb-2">Instancia: n8n_1</h3>
            <p className="text-sm text-amber-700">
              Los mensajes se procesan a través de la instancia n8n_1 de Evolution API configurada en el workflow.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">❓ Preguntas Frecuentes</h2>
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-semibold text-gray-900 mb-2">¿Cómo registro un gasto?</h3>
            <p className="text-gray-600">
              Simplemente escribe un mensaje natural incluyendo el monto y la descripción. 
              Ejemplo: "Gasté 25000 en supermercado" o "Comí pizza por 15 mil".
            </p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-semibold text-gray-900 mb-2">¿Puedo editar o eliminar gastos?</h3>
            <p className="text-gray-600">
              Sí, puedes usar comandos como "Editar el gasto de ayer por 30000" o "Eliminar el gasto de comida del lunes".
              El sistema buscará el gasto más similar y lo modificará.
            </p>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-semibold text-gray-900 mb-2">¿Cómo genero reportes?</h3>
            <p className="text-gray-600">
              Puedes solicitar reportes escribiendo mensajes como "Reporte del mes", "Gastos de la semana pasada" 
              o "¿Cuánto gasté en alimentación este mes?".
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">¿Los datos están seguros?</h3>
            <p className="text-gray-600">
              Todos los datos se almacenan localmente en tu navegador y solo se comparten con los servicios 
              configurados (Google Sheets) a través del webhook seguro de n8n.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;