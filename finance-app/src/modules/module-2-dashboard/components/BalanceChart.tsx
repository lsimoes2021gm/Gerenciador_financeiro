import React from 'react'

const BalanceChart: React.FC = () => {
  // Dados mockados
  const data = [
    { month: 'Out', balance: 8500, income: 4800, expense: 3200 },
    { month: 'Nov', balance: 9200, income: 5000, expense: 3500 },
    { month: 'Dez', balance: 10500, income: 5200, expense: 3800 },
    { month: 'Jan', balance: 12400, income: 5100, expense: 3420 },
    { month: 'Fev', balance: 14200, income: 5300, expense: 3700 },
    { month: 'Mar', balance: 15420, income: 5200, expense: 3420 },
  ]

  const width = 800
  const height = 250
  const padding = { top: 20, right: 20, bottom: 30, left: 60 }
  const chartWidth = width - padding.left - padding.right
  const chartHeight = height - padding.top - padding.bottom

  // Escalas
  const maxBalance = Math.max(...data.map(d => d.balance))
  const minBalance = Math.min(...data.map(d => d.balance))
  const maxIncome = Math.max(...data.map(d => d.income))
  const maxExpense = Math.max(...data.map(d => d.expense))

  const scaleX = (index: number) => 
    padding.left + (index * chartWidth) / (data.length - 1)
  
  const scaleBalanceY = (value: number) => 
    padding.top + chartHeight - ((value - minBalance) / (maxBalance - minBalance)) * chartHeight
  
  const scaleIncomeY = (value: number) => 
    padding.top + chartHeight - (value / maxIncome) * chartHeight
  
  const scaleExpenseY = (value: number) => 
    padding.top + chartHeight - (value / maxExpense) * chartHeight

  // Gerar pontos para as linhas
  const balancePoints = data.map((d, i) => `${scaleX(i)},${scaleBalanceY(d.balance)}`).join(' ')
  const incomePoints = data.map((d, i) => `${scaleX(i)},${scaleIncomeY(d.income)}`).join(' ')
  const expensePoints = data.map((d, i) => `${scaleX(i)},${scaleExpenseY(d.expense)}`).join(' ')

  return (
    <div className="balance-chart-container">
      <div className="chart-header">
        <h2>Evolução do Saldo</h2>
        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-color balance"></div>
            <span>Saldo</span>
          </div>
          <div className="legend-item">
            <div className="legend-color income"></div>
            <span>Receitas</span>
          </div>
          <div className="legend-item">
            <div className="legend-color expense"></div>
            <span>Despesas</span>
          </div>
        </div>
      </div>

      <div className="chart-container">
        <svg className="chart-svg" viewBox={`0 0 ${width} ${height}`}>
          {/* Gradiente para área do saldo */}
          <defs>
            <linearGradient id="balance-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grade de fundo */}
          <g className="chart-grid">
            {[0, 1, 2, 3, 4].map(i => (
              <line
                key={`grid-h-${i}`}
                x1={padding.left}
                y1={padding.top + (i * chartHeight) / 4}
                x2={width - padding.right}
                y2={padding.top + (i * chartHeight) / 4}
                stroke="#e5e7eb"
                strokeWidth="1"
              />
            ))}
            {data.map((_, i) => (
              <line
                key={`grid-v-${i}`}
                x1={scaleX(i)}
                y1={padding.top}
                x2={scaleX(i)}
                y2={height - padding.bottom}
                stroke="#e5e7eb"
                strokeWidth="1"
              />
            ))}
          </g>

          {/* Eixos */}
          <g className="chart-axis">
            {/* Eixo Y */}
            <line
              x1={padding.left}
              y1={padding.top}
              x2={padding.left}
              y2={height - padding.bottom}
              stroke="#d1d5db"
              strokeWidth="2"
            />
            {/* Eixo X */}
            <line
              x1={padding.left}
              y1={height - padding.bottom}
              x2={width - padding.right}
              y2={height - padding.bottom}
              stroke="#d1d5db"
              strokeWidth="2"
            />
          </g>

          {/* Área do saldo */}
          <polygon
            className="chart-area"
            points={`
              ${padding.left},${height - padding.bottom}
              ${balancePoints}
              ${width - padding.right},${height - padding.bottom}
            `}
          />

          {/* Linhas */}
          <polyline
            className="chart-line balance"
            points={balancePoints}
            fill="none"
          />
          <polyline
            className="chart-line income"
            points={incomePoints}
            fill="none"
          />
          <polyline
            className="chart-line expense"
            points={expensePoints}
            fill="none"
          />

          {/* Pontos nos dados */}
          {data.map((d, i) => (
            <g key={`point-${i}`}>
              <circle
                cx={scaleX(i)}
                cy={scaleBalanceY(d.balance)}
                r="4"
                fill="#3b82f6"
                stroke="white"
                strokeWidth="2"
              />
              <circle
                cx={scaleX(i)}
                cy={scaleIncomeY(d.income)}
                r="3"
                fill="#10b981"
                stroke="white"
                strokeWidth="1"
              />
              <circle
                cx={scaleX(i)}
                cy={scaleExpenseY(d.expense)}
                r="3"
                fill="#ef4444"
                stroke="white"
                strokeWidth="1"
              />
            </g>
          ))}

          {/* Rótulos dos meses */}
          {data.map((d, i) => (
            <text
              key={`label-${i}`}
              x={scaleX(i)}
              y={height - 10}
              textAnchor="middle"
              fontSize="12"
              fill="#6b7280"
            >
              {d.month}
            </text>
          ))}
        </svg>
      </div>
    </div>
  )
}

export default BalanceChart