import React, { useState } from 'react';
import { Send, Loader2, Mic, Calculator } from 'lucide-react';
import { parseMessage } from '../utils/messageParser';
import { ParsedMessage } from '../types';

interface ExpenseInputProps {
  onExpenseAdded: (expense: any) => void;
  onMessageParsed: (parsed: ParsedMessage) => void;
}

const ExpenseInput: React.FC<ExpenseInputProps> = ({ onExpenseAdded, onMessageParsed }) => {
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [lastResponse, setLastResponse] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isProcessing) return;

    setIsProcessing(true);
    
    try {
      const parsed = await parseMessage(message);
      onMessageParsed(parsed);

      if (parsed.tipo === 'gasto' && parsed.monto && parsed.monto > 0) {
        const expense = {
          id: Date.now().toString(),
          date: parsed.fecha || new Date().toISOString().split('T')[0],
          category: parsed.categoria || 'otros',
          amount: parsed.monto,
          description: parsed.descripcion || 'Gasto registrado',
          type: 'gasto' as const
        };
        
        onExpenseAdded(expense);
        setLastResponse(`✅ Gasto registrado: $${expense.amount.toLocaleString()} en ${expense.category}`);
      } else if (parsed.tipo === 'ayuda') {
        setLastResponse(`👋 ¡Hola! Puedes escribir mensajes como:
        • "Gasté 2000 en combustible"
        • "Comí por 15 mil"
        • "Dame el reporte del mes"
        • "¿Cuál fue mi mayor gasto?"`);
      } else if (parsed.tipo === 'na') {
        setLastResponse(parsed.razon || 'No se pudo interpretar el mensaje. Intenta ser más específico.');
      } else {
        setLastResponse('✅ Mensaje procesado correctamente');
      }
      
      setMessage('');
    } catch (error) {
      setLastResponse('❌ Error al procesar el mensaje. Intenta de nuevo.');
    } finally {
      setIsProcessing(false);
    }
  };

  const quickActions = [
    { text: "Gasté 5000 en almuerzo", icon: "🍽️" },
    { text: "Dame el reporte del mes", icon: "📊" },
    { text: "¿Cuál fue mi mayor gasto?", icon: "💰" },
    { text: "Ayuda", icon: "❓" }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Mic className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Asistente Inteligente</h2>
            <p className="text-emerald-100">Escribe en lenguaje natural</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu mensaje... Ej: 'Gasté 15 mil en comida' o 'Dame el reporte del mes'"
              className="w-full p-4 pr-14 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none h-20 transition-all duration-200"
              disabled={isProcessing}
            />
            <button
              type="submit"
              disabled={!message.trim() || isProcessing}
              className="absolute right-2 bottom-2 p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {isProcessing ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>

          {lastResponse && (
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans">
                {lastResponse}
              </pre>
            </div>
          )}
        </form>

        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Acciones rápidas:</h3>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => setMessage(action.text)}
                className="p-3 text-left bg-gray-50 hover:bg-emerald-50 rounded-lg transition-all duration-200 border border-gray-200 hover:border-emerald-200 hover:shadow-sm"
                disabled={isProcessing}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{action.icon}</span>
                  <span className="text-sm text-gray-700">{action.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInput;