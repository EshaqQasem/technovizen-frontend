import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import type { LucideIcon } from "lucide-react"
// import * as Icons from "lucide-react"
// import { DynamicIcon } from 'lucide-react/dynamic';
interface ServiceCardProps {
  title: string
  description: string
  // icon: LucideIcon
  iconName: string
}

export default function ServiceCard({ title, description, iconName }: ServiceCardProps) {
  // const Icon = Icons[iconName] || Icons.HelpCircle
    const iconname = iconName || 'HelpCircle';
  return (
    <Card className="text-center h-full transition-all hover:shadow-lg">
      <CardHeader>
        <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            {/*<DynamicIcon name={iconname} className="h-8 w-8 text-primary" />*/}
        </div>
        <CardTitle>{title || iconname}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

