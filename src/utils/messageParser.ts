import { ParsedMessage } from '../types';
import { getCategoryByName } from '../data/categories';

// Simulate OpenAI message parsing based on the workflow logic
export const parseMessage = async (message: string): Promise<ParsedMessage> => {
  const lowerMessage = message.toLowerCase().trim();
  
  // Help patterns
  if (lowerMessage.includes('ayuda') || lowerMessage.includes('help') || 
      lowerMessage.includes('cómo funciona') || lowerMessage.includes('qué puedo hacer')) {
    return { tipo: 'ayuda' };
  }
  
  // Report patterns
  if (lowerMessage.includes('reporte') || lowerMessage.includes('resumen') || 
      lowerMessage.includes('gastos del mes') || lowerMessage.includes('mis gastos')) {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    return {
      tipo: 'reporte',
      fecha_inicio: startOfMonth.toISOString().split('T')[0],
      fecha_fin: now.toISOString().split('T')[0]
    };
  }
  
  // Export patterns
  if (lowerMessage.includes('exportar') || lowerMessage.includes('descargar') || 
      lowerMessage.includes('excel') || lowerMessage.includes('csv')) {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    return {
      tipo: 'exportar',
      fecha_inicio: startOfMonth.toISOString().split('T')[0],
      fecha_fin: now.toISOString().split('T')[0]
    };
  }
  
  // Query patterns
  if (lowerMessage.includes('mayor gasto') || lowerMessage.includes('más caro')) {
    return { tipo: 'consulta', intencion: 'mayor_gasto' };
  }
  
  if (lowerMessage.includes('top') || lowerMessage.includes('mayores gastos')) {
    return { tipo: 'consulta', intencion: 'top_gastos' };
  }
  
  // Preference patterns
  if (lowerMessage.includes('activar') || lowerMessage.includes('desactivar')) {
    const accion = lowerMessage.includes('activar') ? 'activar' : 'desactivar';
    let preferencia = 'diario';
    if (lowerMessage.includes('semanal')) preferencia = 'semanal';
    if (lowerMessage.includes('mensual')) preferencia = 'mensual';
    
    return { tipo: 'preferencias' };
  }
  
  // Expense patterns - look for amounts
  const amountMatches = message.match(/(\d+\.?\d*)\s*(mil|k|thousand)?/gi);
  if (amountMatches) {
    let amount = 0;
    const match = amountMatches[0];
    const numericPart = parseFloat(match.replace(/[^\d.]/g, ''));
    
    if (match.toLowerCase().includes('mil') || match.toLowerCase().includes('k')) {
      amount = numericPart * 1000;
    } else {
      amount = numericPart;
    }
    
    if (amount > 0) {
      // Try to extract category
      let categoria = 'otros';
      for (const cat of Object.values({
        'comida': 'alimentacion', 'almuerzo': 'alimentacion', 'cena': 'alimentacion',
        'gasolina': 'transporte', 'taxi': 'transporte', 'bus': 'transporte',
        'arriendo': 'vivienda', 'luz': 'vivienda', 'agua': 'vivienda',
        'médico': 'salud', 'medicina': 'salud', 'doctor': 'salud'
      })) {
        if (lowerMessage.includes(Object.keys(cat)[0])) {
          categoria = Object.values(cat)[0];
          break;
        }
      }
      
      // Extract description
      let descripcion = message.replace(/\d+\.?\d*\s*(mil|k)?/gi, '').trim();
      descripcion = descripcion.replace(/gasté|pagué|compré|en/gi, '').trim();
      
      return {
        tipo: 'gasto',
        monto: amount,
        categoria,
        descripcion: descripcion || 'Gasto registrado',
        fecha: new Date().toISOString().split('T')[0]
      };
    }
  }
  
  return { 
    tipo: 'na', 
    razon: 'No se pudo interpretar el mensaje. Intenta ser más específico con el monto y descripción.' 
  };
};