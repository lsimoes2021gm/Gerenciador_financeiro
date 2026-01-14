import React, { useState, useRef, DragEvent } from 'react'
import { formatFileSize } from '../utils/formatters'

interface FileUploadProps {
  files: File[]
  onFilesChange: (files: File[]) => void
  label?: string
  multiple?: boolean
  accept?: string
  maxSize?: number // em bytes
  maxFiles?: number
}

const FileUpload: React.FC<FileUploadProps> = ({
  files,
  onFilesChange,
  label = 'Upload de Arquivos',
  multiple = true,
  accept = '.pdf,.jpg,.jpeg,.png',
  maxSize = 5 * 1024 * 1024, // 5MB
  maxFiles = 5
}) => {
  const [dragOver, setDragOver] = useState(false)
  const [error, setError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const validateFile = (file: File): string => {
    // Tamanho máximo
    if (file.size > maxSize) {
      return `Arquivo muito grande. Máximo: ${formatFileSize(maxSize)}`
    }

    // Tipo de arquivo
    const acceptedTypes = accept.split(',')
    if (accept !== '*' && !acceptedTypes.some(type => {
      if (type.startsWith('.')) {
        return file.name.toLowerCase().endsWith(type.toLowerCase())
      }
      return file.type.includes(type.replace('.', ''))
    })) {
      return `Tipo de arquivo não permitido. Tipos aceitos: ${accept}`
    }

    return ''
  }

  const handleFileSelect = (selectedFiles: FileList) => {
    const newFiles = Array.from(selectedFiles)
    let validFiles: File[] = []
    let errors: string[] = []

    // Verificar limite de arquivos
    if (!multiple && newFiles.length > 1) {
      setError('Apenas um arquivo é permitido')
      return
    }

    if (files.length + newFiles.length > maxFiles) {
      setError(`Máximo de ${maxFiles} arquivos permitidos`)
      return
    }

    // Validar cada arquivo
    newFiles.forEach(file => {
      const validationError = validateFile(file)
      if (validationError) {
        errors.push(`${file.name}: ${validationError}`)
      } else {
        validFiles.push(file)
      }
    })

    if (errors.length > 0) {
      setError(errors.join(' | '))
    }

    if (validFiles.length > 0) {
      onFilesChange([...files, ...validFiles])
      setError('')
    }

    // Resetar input
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelect(e.dataTransfer.files)
    }
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setDragOver(false)
    }
  }

  const handleRemoveFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index)
    onFilesChange(newFiles)
    setError('')
  }

  const handleBrowseClick = () => {
    fileInputRef.current?.click()
  }

  const getFileIcon = (fileName: string): string => {
    const ext = fileName.split('.').pop()?.toLowerCase()
    
    switch (ext) {
      case 'pdf':
        return '📄'
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return '🖼️'
      case 'doc':
      case 'docx':
        return '📝'
      case 'xls':
      case 'xlsx':
        return '📊'
      default:
        return '📎'
    }
  }

  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      
      <div
        className={`file-upload-area ${dragOver ? 'dragover' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleBrowseClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleBrowseClick()}
        aria-label="Área de upload de arquivos"
      >
        <div className="file-upload-icon">
          📤
        </div>
        
        <div style={{ marginBottom: '0.5rem' }}>
          <strong>Arraste arquivos aqui ou clique para selecionar</strong>
        </div>
        
        <div style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
          {multiple ? (
            <span>Máximo {maxFiles} arquivos • {formatFileSize(maxSize)} cada</span>
          ) : (
            <span>1 arquivo • {formatFileSize(maxSize)} máximo</span>
          )}
          <br />
          <span>Tipos: {accept.replace(/,/g, ', ')}</span>
        </div>
        
        <button
          type="button"
          className="primary-button"
          onClick={(e) => {
            e.stopPropagation()
            handleBrowseClick()
          }}
          style={{ margin: '0 auto' }}
        >
          Procurar Arquivos
        </button>
        
        <input
          ref={fileInputRef}
          type="file"
          multiple={multiple}
          accept={accept}
          onChange={(e) => e.target.files && handleFileSelect(e.target.files)}
          style={{ display: 'none' }}
          aria-hidden="true"
        />
      </div>
      
      {error && (
        <div className="validation-message error" style={{ marginTop: '1rem' }}>
          ⚠️ {error}
        </div>
      )}
      
      {files.length > 0 && (
        <div className="file-list">
          <div style={{ margin: '1rem 0 0.5rem 0', fontWeight: 500, color: '#374151' }}>
            Arquivos selecionados ({files.length})
          </div>
          
          {files.map((file, index) => (
            <div key={`${file.name}-${index}`} className="file-item">
              <div className="file-info">
                <div className="file-icon">
                  {getFileIcon(file.name)}
                </div>
                <div className="file-details">
                  <div className="file-name">
                    {file.name}
                  </div>
                  <div className="file-size">
                    {formatFileSize(file.size)}
                  </div>
                </div>
              </div>
              
              <button
                type="button"
                className="file-remove"
                onClick={() => handleRemoveFile(index)}
                aria-label={`Remover arquivo ${file.name}`}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FileUpload