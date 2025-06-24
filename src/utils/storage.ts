import { Expense, UserPreferences } from '../types';

const STORAGE_KEYS = {
  EXPENSES: 'financial_assistant_expenses',
  PREFERENCES: 'financial_assistant_preferences'
};

export const saveExpenses = (expenses: Expense[]): void => {
  localStorage.setItem(STORAGE_KEYS.EXPENSES, JSON.stringify(expenses));
};

export const loadExpenses = (): Expense[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.EXPENSES);
  return stored ? JSON.parse(stored) : [];
};

export const savePreferences = (preferences: UserPreferences): void => {
  localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(preferences));
};

export const loadPreferences = (): UserPreferences => {
  const stored = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
  return stored ? JSON.parse(stored) : {
    dailyReport: false,
    weeklyReport: false,
    monthlyReport: true,
    currency: 'USD',
    language: 'es'
  };
};