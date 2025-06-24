export interface Expense {
  id: string;
  date: string;
  category: string;
  amount: number;
  description: string;
  type: 'gasto' | 'ingreso';
  phone_number?: string;
  row_number?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface UserPreferences {
  dailyReport: boolean;
  weeklyReport: boolean;
  monthlyReport: boolean;
  currency: string;
  language: string;
}

export interface ReportData {
  totalExpenses: number;
  totalIncome: number;
  categorySummary: { [key: string]: number };
  monthlyTrend: Array<{ month: string; amount: number; income: number }>;
  topExpenses: Expense[];
}

export interface ParsedMessage {
  tipo: 'gasto' | 'reporte' | 'consulta' | 'editar' | 'eliminar' | 'ayuda' | 'exportar' | 'preferencias' | 'na';
  monto?: number;
  categoria?: string;
  descripcion?: string;
  fecha?: string;
  fecha_inicio?: string;
  fecha_fin?: string;
  intencion?: string;
  razon?: string;
}