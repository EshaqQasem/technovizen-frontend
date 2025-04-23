import TeamMemberCard from "@/components/team-member-card"
import SectionHeading from "@/components/section-heading"
import AnimatedSection from "@/components/animated-section"

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

async function getTeamMembers(): Promise<TeamMember[]> {
  // TODO: Replace with actual API call
  const response = await fetch('http://localhost:8000/api/team-members');
  if (!response.ok) {
    throw new Error('Failed to fetch team members');
  }
  return response.json();
}

export default async function TeamPage() {
  const members = await getTeamMembers();

  return (
    <div className="py-12">
      <div className="container">
        <AnimatedSection animation="fadeIn">
          <SectionHeading title="فريق العمل" subtitle="تعرف على فريقنا المتميز" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                socialLinks={member.socialLinks}
                href={`/team/${member.id}`}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
