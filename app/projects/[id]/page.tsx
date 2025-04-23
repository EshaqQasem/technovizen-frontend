"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Globe, Github, Calendar } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"
import ProjectCard from "@/components/project-card"
import { useParams } from "next/navigation"

interface Project {
  id: string
  title: string
  description: string
  full_description: string[]
  features: string[]
  technologies: string[]
  image: string
  gallery: string[]
  client: string
  date: string
  duration: string
  website: string
  github: string
  tags: string[]
}

export default function ProjectPage() {
  const params = useParams()
  const projectId = params?.id
  const [project, setProject] = useState<Project | null>(null)
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/projects/${projectId}`)
        if (!response.ok) {
          throw new Error('المشروع غير موجود')
        }
        const data = await response.json()
        setProject(data)

        // جلب المشاريع المرتبطة
        const relatedResponse = await fetch('http://localhost:8000/api/projects')
        if (relatedResponse.ok) {
          const allProjects = await relatedResponse.json()
          const filtered = allProjects
            .filter((p: Project) => p.id !== projectId)
            .filter((p: Project) => p.tags.some((tag: string) => data.tags.includes(tag)))
            .slice(0, 3)
          setRelatedProjects(filtered)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'حدث خطأ أثناء جلب المشروع')
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [projectId])

  if (loading) {
    return (
      <div className="container py-20">
        <div className="animate-pulse space-y-8">
          <div className="h-[300px] bg-gray-200 rounded-lg"></div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !project) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">المشروع غير موجود</h1>
        <p className="text-muted-foreground mb-8">{error || 'لم يتم العثور على المشروع المطلوب'}</p>
        <Button asChild>
          <Link href="/projects">العودة إلى المشاريع</Link>
        </Button>
      </div>
    )
  }

  // Related projects (excluding current project)
  // const relatedProjects = projects
  //   .filter((p) => p.id !== project.id)
  //   .filter((p) => p.tags.some((tag) => project.tags.includes(tag)))
  //   .slice(0, 3)

  return (
    <div className="py-12">
      <div className="container">
        {/* Back Button */}
        <AnimatedSection className="mb-8" animation="fadeIn">
          <Button variant="ghost" asChild className="hover-lift">
            <Link href="/projects">
              <ArrowLeft className="ml-2 h-4 w-4" />
              العودة إلى المشاريع
            </Link>
          </Button>
        </AnimatedSection>

        {/* Project Hero */}
        <AnimatedSection className="mb-12" animation="fadeIn">
          <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
        </AnimatedSection>

        {/* Project Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <AnimatedSection className="lg:col-span-2" animation="fadeInUp" delay={0.1}>
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              {project.full_description.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">المميزات</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              {project.features.map((feature, index) => (
                <li key={index} className="text-muted-foreground">
                  {feature}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-4">التقنيات المستخدمة</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">معرض الصور</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative h-[200px] rounded-lg overflow-hidden hover-scale">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - صورة ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Sidebar */}
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-bold mb-2">العميل</h3>
                  <p className="text-muted-foreground">{project.client}</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">تاريخ الإنجاز</h3>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 ml-2 text-muted-foreground" />
                    <p className="text-muted-foreground">{project.date}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-2">مدة المشروع</h3>
                  <p className="text-muted-foreground">{project.duration}</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">روابط المشروع</h3>
                  <div className="space-y-2">
                    {project.website && (
                      <Button variant="outline" asChild className="w-full justify-start hover-lift">
                        <a href={project.website} target="_blank" rel="noopener noreferrer">
                          <Globe className="h-4 w-4 ml-2" />
                          زيارة الموقع
                        </a>
                      </Button>
                    )}

                    {project.github && (
                      <Button variant="outline" asChild className="w-full justify-start hover-lift">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 ml-2" />
                          مستودع GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-4">هل تريد مشروعًا مشابهًا؟</h3>
                  <WhatsAppButton
                    message={`مرحباً، أعجبني مشروع "${project.title}" وأود التحدث معك حول مشروع مشابه...`}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <AnimatedSection className="mt-16" animation="fadeIn" delay={0.3}>
            <h2 className="text-2xl font-bold mb-8">مشاريع ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <AnimatedSection key={relatedProject.id} className="hover-scale" delay={0.4}>
                  <ProjectCard
                    id={relatedProject.id}
                    title={relatedProject.title}
                    description={relatedProject.description}
                    image={relatedProject.image}
                    tags={relatedProject.tags}
                  />
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        )}

      
      </div>
    </div>
  )
}
