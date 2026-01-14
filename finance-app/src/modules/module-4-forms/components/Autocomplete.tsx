import React, { useState, useEffect, useRef } from 'react'
import type { AutoCompleteOption } from '../types/form'

interface AutoCompleteProps {
  options: AutoCompleteOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  label?: string
  required?: boolean
  error?: string
  categoryFilter?: string
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Digite para buscar...',
  label,
  required = false,
  error,
  categoryFilter
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [filteredOptions, setFilteredOptions] = useState<AutoCompleteOption[]>(options)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Filtrar opções baseado no input e categoria
  useEffect(() => {
    let filtered = options
    
    // Filtrar por categoria se especificado
    if (categoryFilter) {
      filtered = filtered.filter(option => option.category === categoryFilter)
    }
    
    // Filtrar por texto de busca
    if (value) {
      filtered = filtered.filter(option =>
        option.label.toLowerCase().includes(value.toLowerCase()) ||
        option.value.toLowerCase().includes(value.toLowerCase())
      )
    }
    
    setFilteredOptions(filtered.slice(0, 10)) // Limitar a 10 resultados
  }, [value, options, categoryFilter])

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
    setIsOpen(true)
    setSelectedIndex(-1)
  }

  const handleOptionClick = (option: AutoCompleteOption) => {
    onChange(option.label)
    setIsOpen(false)
    inputRef.current?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev =>
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev))
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0 && filteredOptions[selectedIndex]) {
          handleOptionClick(filteredOptions[selectedIndex])
        }
        break
      case 'Escape':
        setIsOpen(false)
        break
    }
  }

  const handleFocus = () => {
    setIsOpen(true)
  }

  // Agrupar opções por categoria
  const groupedOptions = filteredOptions.reduce((groups, option) => {
    const category = option.category || 'Outros'
    if (!groups[category]) {
      groups[category] = []
    }
    groups[category].push(option)
    return groups
  }, {} as Record<string, AutoCompleteOption[]>)

  return (
    <div className="form-group" ref={containerRef}>
      {label && (
        <label className={required ? 'required' : ''}>
          {label}
        </label>
      )}
      
      <div className="autocomplete-container">
        <input
          ref={inputRef}
          type="text"
          className={`autocomplete-input ${error ? 'error' : ''}`}
          value={value}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls="autocomplete-dropdown"
        />
        
        {isOpen && filteredOptions.length > 0 && (
          <div 
            className="autocomplete-dropdown" 
            id="autocomplete-dropdown"
            role="listbox"
          >
            {Object.entries(groupedOptions).map(([category, categoryOptions]) => (
              <div key={category}>
                {category !== 'Outros' && (
                  <div className="autocomplete-category">
                    {category}
                  </div>
                )}
                {categoryOptions.map((option, index) => (
                  <div
                    key={option.id}
                    className={`autocomplete-option ${
                      selectedIndex === index ? 'selected' : ''
                    }`}
                    onClick={() => handleOptionClick(option)}
                    role="option"
                    aria-selected={selectedIndex === index}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        
        {isOpen && filteredOptions.length === 0 && value && (
          <div className="autocomplete-dropdown">
            <div className="autocomplete-option" style={{ color: '#6b7280' }}>
              Nenhum resultado encontrado
            </div>
          </div>
        )}
      </div>
      
      {error && (
        <div className="validation-message error">
          ⚠️ {error}
        </div>
      )}
    </div>
  )
}

export default AutoComplete