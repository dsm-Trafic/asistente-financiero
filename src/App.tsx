import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ExpenseInput from './components/ExpenseInput';
import ExpensesList from './components/ExpensesList';
import Settings from './components/Settings';
import Help from './components/Help';
import ExpenseModal from './components/ExpenseModal';
import { Expense, UserPreferences, ParsedMessage } from './types';
import { saveExpenses, loadExpenses, savePreferences, loadPreferences } from './utils/storage';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [preferences, setPreferences] = useState<UserPreferences>({
    dailyReport: false,
    weeklyReport: false,
    monthlyReport: true,
    currency: 'USD',
    language: 'es'
  });
  const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load data on component mount
  useEffect(() => {
    const loadedExpenses = loadExpenses();
    const loadedPreferences = loadPreferences();
    
    setExpenses(loadedExpenses);
    setPreferences(loadedPreferences);
  }, []);

  // Save expenses whenever they change
  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  const handleExpenseAdded = (expense: Expense) => {
    setExpenses(prev => [expense, ...prev]);
  };

  const handleExpenseEdit = (expense: Expense) => {
    setSelectedExpense(expense);
    setIsModalOpen(true);
  };

  const handleExpenseSave = (expense: Expense) => {
    setExpenses(prev => {
      const index = prev.findIndex(e => e.id === expense.id);
      if (index >= 0) {
        const updated = [...prev];
        updated[index] = expense;
        return updated;
      } else {
        return [expense, ...prev];
      }
    });
    setSelectedExpense(null);
  };

  const handleExpenseDelete = (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este gasto?')) {
      setExpenses(prev => prev.filter(e => e.id !== id));
    }
  };

  const handlePreferencesChange = (newPreferences: UserPreferences) => {
    setPreferences(newPreferences);
    savePreferences(newPreferences);
  };

  const handleMessageParsed = (parsed: ParsedMessage) => {
    // Handle different types of parsed messages
    if (parsed.tipo === 'reporte') {
      setActiveTab('dashboard');
    } else if (parsed.tipo === 'consulta') {
      setActiveTab('dashboard');
    } else if (['editar', 'eliminar'].includes(parsed.tipo)) {
      setActiveTab('expenses');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard expenses={expenses} />;
      case 'expenses':
        return (
          <ExpensesList
            expenses={expenses}
            onEditExpense={handleExpenseEdit}
            onDeleteExpense={handleExpenseDelete}
          />
        );
      case 'settings':
        return (
          <Settings
            preferences={preferences}
            onPreferencesChange={handlePreferencesChange}
          />
        );
      case 'help':
        return <Help />;
      default:
        return <Dashboard expenses={expenses} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {renderContent()}
          </div>
          
          {/* Sidebar with Expense Input */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ExpenseInput
                onExpenseAdded={handleExpenseAdded}
                onMessageParsed={handleMessageParsed}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Expense Modal */}
      <ExpenseModal
        expense={selectedExpense}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedExpense(null);
        }}
        onSave={handleExpenseSave}
      />
    </div>
  );
}

export default App;