export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  category: string;
  date: string;
  account: string;
};

export interface MetricCardProps {
  title: string;
  value: number;
  change?: number;
  icon: React.ReactNode;
  color: string;
  prefix?: string;
}