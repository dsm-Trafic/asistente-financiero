import { Category } from '../types';

export const categories: Category[] = [
  { id: 'alimentacion', name: 'Alimentación', icon: '🍔', color: 'bg-red-500' },
  { id: 'vivienda', name: 'Vivienda', icon: '🏡', color: 'bg-blue-500' },
  { id: 'transporte', name: 'Transporte', icon: '🚗', color: 'bg-green-500' },
  { id: 'salud', name: 'Salud', icon: '💊', color: 'bg-pink-500' },
  { id: 'educacion', name: 'Educación', icon: '📚', color: 'bg-indigo-500' },
  { id: 'telefono_internet', name: 'Teléfono & Internet', icon: '💻', color: 'bg-purple-500' },
  { id: 'financieros', name: 'Financieros', icon: '💳', color: 'bg-yellow-500' },
  { id: 'seguros', name: 'Seguros', icon: '🛡️', color: 'bg-teal-500' },
  { id: 'ocio', name: 'Ocio', icon: '🎉', color: 'bg-orange-500' },
  { id: 'familia', name: 'Familia', icon: '👨‍👩‍👧‍👦', color: 'bg-rose-500' },
  { id: 'personal_empresa', name: 'Personal/Empresa', icon: '💼', color: 'bg-slate-500' },
  { id: 'impuestos', name: 'Impuestos', icon: '📊', color: 'bg-gray-500' },
  { id: 'imp_vehiculos', name: 'Imp. Vehículos', icon: '🚙', color: 'bg-emerald-500' },
  { id: 'insumos_empresa', name: 'Insumos Empresa', icon: '🏭', color: 'bg-cyan-500' },
  { id: 'otros', name: 'Otros', icon: '📦', color: 'bg-amber-500' }
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(cat => cat.id === id);
};

export const getCategoryByName = (name: string): Category | undefined => {
  return categories.find(cat => 
    cat.name.toLowerCase().includes(name.toLowerCase()) ||
    cat.id.toLowerCase().includes(name.toLowerCase())
  );
};