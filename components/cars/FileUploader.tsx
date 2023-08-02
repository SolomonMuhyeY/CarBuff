import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const FileUploader = ({ label, name }: { label: string; name: string }) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFile(acceptedFiles[0]); // Update with the latest file
  }, []);

  const handleCancel = () => {
    setUploadedFile(null); // Remove the uploaded file
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
  });

  return (
    <div className='flex flex-col items-center my-3'>
      {uploadedFile && (
        <div className='mb-4'>
          <h3 className='text-lg font-semibold mb-2'>Uploaded File</h3>
          <div className='flex items-center space-x-4 p-2 border rounded-lg bg-white shadow'>
            <img
              src={URL.createObjectURL(uploadedFile)}
              alt={uploadedFile.name}
              className='w-16 h-16 object-cover rounded-lg'
            />
            <div>
              <p className='text-gray-800'>{uploadedFile.name}</p>
              <p className='text-gray-600 text-sm'>
                {Math.round(uploadedFile.size / 1024)} KB
              </p>
            </div>
            <button
              type='button'
              onClick={handleCancel}
              className='ml-auto bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300'
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <div
        {...getRootProps()}
        className='flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer p-4'
      >
        <input name={name} {...getInputProps()} className='cursor-pointer' />
        {isDragActive ? (
          <p className='text-gray-600'>Drop the files here ...</p>
        ) : (
          <div>
            <div className='text-gray-600 border-2 px-8 py-6 rounded-xl my-2'>
              Drag & drop a file here, or click to select a file
            </div>
            <p className='text-gray-600 font-bold mb-2'>SVG, PNG, JPG</p>
            <button
              type='button'
              className='inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold shadow-md hover:from-blue-600 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-300'
            >
              Select from computer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
