import React, { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';

interface FileWithPreview extends File {
  preview?: string;
}

const UploadLogo: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<FileWithPreview | null>(null);
  const [error, setError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): boolean => {
    const validTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!validTypes.includes(file.type)) {
      setError('Please upload a valid image file (JPG, PNG, or SVG)');
      return false;
    }

    if (file.size > maxSize) {
      setError('File size should be less than 5MB');
      return false;
    }

    return true;
  };

  const handleFile = (file: File) => {
    if (validateFile(file)) {
      const fileWithPreview = file as FileWithPreview;
      fileWithPreview.preview = URL.createObjectURL(file);
      setFile(fileWithPreview);
      setError('');
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFile(droppedFile);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFile(selectedFile);
    }
  };

  const handleRemoveFile = () => {
    if (file?.preview) {
      URL.revokeObjectURL(file.preview);
    }
    setFile(null);
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="upload-container">
      <h2 className="text-2xl font-bold mb-4">Upload Your Logo</h2>
      <p className="text-gray-600 mb-6">Drag and drop your logo file or click to browse</p>
      
      {error && (
        <div className="error-message mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {file ? (
        <div className="preview-container">
          <div className="preview-wrapper">
            <img
              src={file.preview}
              alt="Logo preview"
              className="preview-image"
            />
            <button
              onClick={handleRemoveFile}
              className="remove-button"
              aria-label="Remove file"
            >
              <X size={20} />
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-600">{file.name}</p>
        </div>
      ) : (
        <div
          className={`upload-box ${isDragging ? 'dragging' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleBrowseClick}
        >
          <Upload size={40} className="upload-icon" />
          <p className="mt-4 mb-2">Drop your file here or</p>
          <button className="upload-link">browse files</button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInput}
            accept="image/jpeg,image/png,image/svg+xml"
            className="hidden"
          />
        </div>
      )}
    </div>
  );
};

export default UploadLogo;