import Image from "next/image"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import { Mail, Phone, MapPin, Briefcase, Link as LinkIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedSection from "@/components/animated-section"

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  contact: {
    email?: string;
    phone?: string;
    location?: string;
  };
  experience: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
  }>;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

async function getTeamMember(id: string): Promise<TeamMember> {
  // TODO: Replace with actual API call
  const response = await fetch(`http://localhost:8000/api/team-members/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch team member');
  }
  return response.json();
}

export default async function AboutPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const member = await getTeamMember(params.id);

  return (
    <div className="py-12">
      <div className="container">
        {/* Hero Section */}
        <AnimatedSection className="flex flex-col md:flex-row gap-12 items-center mb-16" animation="fadeIn">
          <div className="w-full md:w-1/3">
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-8 border-primary/10 hover-scale">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">{member.name}</h1>
            <p className="text-xl text-muted-foreground mb-6">{member.role}</p>
            <p className="mb-6">{member.bio}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {member.contact.email && (
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>{member.contact.email}</span>
                </div>
              )}
              {member.contact.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span dir="ltr">{member.contact.phone}</span>
                </div>
              )}
              {member.contact.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{member.contact.location}</span>
                </div>
              )}
            </div>
            {member.socialLinks && (
              <div className="flex gap-4">
                {member.socialLinks.twitter && (
                  <Button variant="outline" size="icon" asChild>
                    <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </a>
                  </Button>
                )}
                {member.socialLinks.linkedin && (
                  <Button variant="outline" size="icon" asChild>
                    <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    </a>
                  </Button>
                )}
                {member.socialLinks.github && (
                  <Button variant="outline" size="icon" asChild>
                    <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Experience Section */}
        {member.experience && member.experience.length > 0 && (
          <AnimatedSection animation="fadeInUp" className="mb-16">
            <SectionHeading title="الخبرات السابقة" />
            <div className="grid gap-6">
              {member.experience.map((exp, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                        <p className="text-muted-foreground mb-2">
                          {exp.company} • {exp.period}
                        </p>
                        <p>{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  )
}
