"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import AnimatedText from "@/components/animated-text"
import SectionHeading from "@/components/section-heading"
import ProjectCard from "@/components/project-card"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import AnimatedBackground from "@/components/animated-background"
// import SkillsSection from "@/components/skills-section"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"
import TeamSlider from "@/components/team-slider"
import PageLoading from "@/components/page-loading"
import { useLoading } from "@/context/loading-context"
// import { fetchProjects, fetchServices, fetchTestimonials, fetchSkills, fetchTeamMembers, fetchMetadata } from "@/lib/api"



import { useEffect, useState } from "react";
import {
  fetchProjects,
  fetchServices,
  fetchSkills,
  fetchTestimonials,
  fetchTeamMembers,
  fetchMetadata,
  fetchHomeData,
  Project,
  Service,
  Skill,
  Testimonial,
  GeneralSettings
} from "@/lib/api";

export default function Home() {
  const { setLoading } = useLoading()
  const [projects, setProjects] = useState<Project[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [meta_data, setMetadata] = useState<GeneralSettings | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetchHomeData();
        // const [
        //   // projectsData,
        //   servicesData,
        //   // testimonialsData,
        //   // teamData,
        //   // metadataData
        // ] = await Promise.all([
        //   // fetchProjects(),
        //   fetchServices(),
        //   // fetchTestimonials(),
        //   // fetchTeamMembers(),
        //   // fetchMetadata()
        // ]);

        setProjects(response.projects);
        setServices(response.services);
        setTestimonials(response.testimonials);
        setTeamMembers(response.members);
        setMetadata(response.settings);
        // setLoading(false);
      } catch (error) {
        console.error("حدث خطأ أثناء جلب البيانات:", error);
        // setLoading(false);
      } finally {
      setLoading(false)
    }
    };

    fetchData();
  }, [setLoading]);

  // if (loading) {
  //   // return <PageLoading />;
  //   return <div>جارٍ تحميل المحتوى...</div>;
  // }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <AnimatedBackground className="opacity-70" />
        <div className="container relative z-10">
          <AnimatedSection animation="fadeIn">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                مرحباً، أنا <AnimatedText text="يعقوب الحيدري" className="text-primary" />
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                مطور ويب متخصص في بناء تطبيقات الويب الحديثة والمواقع الإلكترونية المتميزة
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton size="lg" className="hover-lift" />
                <Button size="lg" variant="outline" asChild className="hover-lift">
                  <Link href="/projects">عرض أعمالي</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection className="py-20" id="services">
        <div className="container">
          <SectionHeading title="الخدمات" subtitle="أقدم مجموعة متنوعة من الخدمات لتلبية احتياجاتك التقنية" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1} className="hover-scale">
                <ServiceCard 
                  title={service.title} 
                  description={service.description} 
                  iconName={service.icon} 
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection className="py-20 bg-muted/50" id="projects">
        <div className="container">
          <SectionHeading title="المشاريع" subtitle="بعض المشاريع التي قمت بتطويرها" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1} className="hover-scale">
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Button asChild className="hover-lift">
              <Link href="/projects">
                عرض جميع المشاريع <ArrowRight className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      {/*<AnimatedSection className="py-20" animation="fadeIn">*/}
      {/*  <SkillsSection*/}
      {/*    categories={[*/}
      {/*      {*/}
      {/*        title: "مهارات الواجهة الأمامية",*/}
      {/*        skills: skills.filter(skill => skill.category === 'frontend'),*/}
      {/*      },*/}
      {/*      {*/}
      {/*        title: "مهارات الواجهة الخلفية",*/}
      {/*        skills: skills.filter(skill => skill.category === 'backend'),*/}
      {/*      },*/}
      {/*    ]}*/}
      {/*  />*/}
      {/*</AnimatedSection>*/}

      {/* Team Section */}
      <AnimatedSection className="py-20 bg-muted/50" id="team" animation="fadeIn">
        <div className="container">
          <SectionHeading 
            title="فريقنا" 
            subtitle="تعرف على فريق العمل المتميز الذي يقف خلف نجاح مشاريعنا" 
          />
          <TeamSlider members={teamMembers} />
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20" id="testimonials" animation="fadeIn">
        <div className="container">
          <SectionHeading title="آراء العملاء" subtitle="ما يقوله العملاء عن خدماتي" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 0.1} className="hover-scale">
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  content={testimonial.content}
                  avatar={testimonial.avatar}
                  rating={testimonial.rating}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-primary text-primary-foreground" animation="scaleIn">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">هل أنت مستعد للعمل معي؟</h2>
            <p className="text-primary-foreground/80 mb-8">دعنا نتعاون لتحويل أفكارك إلى واقع رقمي مميز</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton size="lg" className="hover-lift" />
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary hover-lift"
                asChild
              >
                <Link href="/imags/2.pdf" download>
                  <Download className="ml-2 h-4 w-4" /> تحميل السيرة الذاتية
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
