import React from 'react'

interface MetricCardProps {
  title: string
  value: number
  change?: number
  icon: string
  type: 'income' | 'expense' | 'balance' | 'savings'
  prefix?: string
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  icon,
  type,
  prefix = 'R$'
}) => {
  const formatValue = (val: number) => {
    return `${prefix} ${val.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
  }

  return (
    <div className={`metric-card ${type}`}>
      <div className="metric-header">
        <div className="metric-title">{title}</div>
        <div className={`metric-icon ${type}`}>
          {icon}
        </div>
      </div>
      <div className="metric-value">{formatValue(value)}</div>
      {change !== undefined && (
        <div className={`metric-change ${change >= 0 ? 'positive' : 'negative'}`}>
          {change >= 0 ? '↗' : '↘'} {Math.abs(change)}% vs mês anterior
        </div>
      )}
    </div>
  )
}

export default MetricCard