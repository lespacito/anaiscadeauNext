import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import React from 'react'

interface ImageItemProps {
  id: string
  title: string
  description?: string
  url: string
  author: {
    name: string
  }
  width: number
  height: number
}

const ImageItem: React.FC<ImageItemProps> = ({
  title,
  description,
  url,
  author,
}) => {
  return (
    <Card className="mx-auto my-4 max-w-md overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription>Photographe : {author.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-64 w-full">
          <Image
            src={url}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        {description && (
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        )}
      </CardContent>
    </Card>
  )
}

export default ImageItem