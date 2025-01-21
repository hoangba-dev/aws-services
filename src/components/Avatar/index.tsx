import { useState, useRef } from 'react'
import { Pen, User } from 'lucide-react'

interface AvatarProps {
  initialImageUrl?: string;
  onImageChange: (file: File) => void;
}

export default function Avatar({ initialImageUrl = "", onImageChange }: AvatarProps) {
  const [imageUrl, setImageUrl] = useState<string>(initialImageUrl)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleEditClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const newImageUrl = URL.createObjectURL(file)
      setImageUrl(newImageUrl)
      onImageChange(file)
    }
  }

  return (
    <div className="relative inline-block">
      <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Avatar"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        ) : (
          <User className="w-16 h-16 text-gray-400" />
        )}
      </div>
      <button
        onClick={handleEditClick}
        className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label="Edit profile picture"
      >
        <Pen className="w-4 h-4 text-gray-600" />
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
        aria-hidden="true"
      />
    </div>
  )
}

