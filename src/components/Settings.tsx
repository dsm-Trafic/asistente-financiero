import React, { useState } from 'react';
import { Bell, Globe, DollarSign, Save, User, Shield, Download } from 'lucide-react';
import { UserPreferences } from '../types';

interface SettingsProps {
  preferences: UserPreferences;
  onPreferencesChange: (preferences: UserPreferences) => void;
}

const Settings: React.FC<SettingsProps> = ({ preferences, onPreferencesChange }) => {
  const [localPreferences, setLocalPreferences] = useState<UserPreferences>(preferences);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    onPreferencesChange(localPreferences);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const updatePreference = (key: keyof UserPreferences, value: any) => {
    setLocalPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Configuración</h2>
            <p className="text-gray-600">Personaliza tu experiencia financiera</p>
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50">
        <div className="flex items-center space-x-3 mb-6">
          <Bell className="w-5 h-5 text-emerald-500" />
          <h3 className="text-lg font-semibold text-gray-900">Reportes Automáticos</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Reporte Diario</h4>
              <p className="text-sm text-gray-600">Recibe un resumen de tus gastos cada día</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={localPreferences.dailyReport}
                onChange={(e) => updatePreference('dailyReport', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Reporte Semanal</h4>
              <p className="text-sm text-gray-600">Recibe un resumen semanal cada lunes</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={localPreferences.weeklyReport}
                onChange={(e) => updatePreference('weeklyReport', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Reporte Mensual</h4>
              <p className="text-sm text-gray-600">Recibe un resumen completo cada mes</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={localPreferences.monthlyReport}
                onChange={(e) => updatePreference('monthlyReport', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
            </label>
          </div>
        </div>
      </div>

      {/* General Preferences */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50">
        <div className="flex items-center space-x-3 mb-6">
          <User className="w-5 h-5 text-blue-500" />
          <h3 className="text-lg font-semibold text-gray-900">Preferencias Generales</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <DollarSign className="w-4 h-4 inline mr-1" />
              Moneda
            </label>
            <select
              value={localPreferences.currency}
              onChange={(e) => updatePreference('currency', e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="USD">USD - Dólar Americano</option>
              <option value="EUR">EUR - Euro</option>
              <option value="COP">COP - Peso Colombiano</option>
              <option value="MXN">MXN - Peso Mexicano</option>
              <option value="ARS">ARS - Peso Argentino</option>
              <option value="UYU">UYU - Peso Uruguayo</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Globe className="w-4 h-4 inline mr-1" />
              Idioma
            </label>
            <select
              value={localPreferences.language}
              onChange={(e) => updatePreference('language', e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="pt">Português</option>
            </select>
          </div>
        </div>
      </div>

      {/* Integration Settings */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50">
        <div className="flex items-center space-x-3 mb-6">
          <Download className="w-5 h-5 text-orange-500" />
          <h3 className="text-lg font-semibold text-gray-900">Configuración de Webhook</h3>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-orange-800">
            <strong>Webhook URL de Prueba:</strong> https://n8n-1-n8n.szvxgu.easypanel.host/webhook/asistente_financiero
          </p>
          <p className="text-sm text-orange-700 mt-2">
            Esta URL está configurada para pruebas con la instancia n8n_1 de Evolution API.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL del Webhook
            </label>
            <input
              type="url"
              value="https://n8n-1-n8n.szvxgu.easypanel.host/webhook/asistente_financiero"
              disabled
              className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500"
            />
            <p className="text-xs text-gray-500 mt-1">URL configurada para recibir mensajes de WhatsApp</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Instancia Evolution API
            </label>
            <input
              type="text"
              value="n8n_1"
              disabled
              className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500"
            />
            <p className="text-xs text-gray-500 mt-1">Nombre de la instancia configurada</p>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Guardar Configuración</h3>
            <p className="text-sm text-gray-600">Los cambios se aplicarán inmediatamente</p>
          </div>
          <button
            onClick={handleSave}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              saved 
                ? 'bg-green-500 text-white' 
                : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl'
            }`}
          >
            <Save className="w-4 h-4" />
            <span>{saved ? '¡Guardado!' : 'Guardar Cambios'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;