import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
}

export default function ProjectCard({ id, title, description, image, tags }: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative aspect-video">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
