"use client";

import { useState, useEffect, useMemo } from "react";
import { Search, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProjectCard from "@/components/project-card";
import SectionHeading from "@/components/section-heading";
import AnimatedSection from "@/components/animated-section";
import WhatsAppButton from "@/components/whatsapp-button";

import { useLoading } from "@/context/loading-context";

/* ------------------------------------------------------------------ */
/* النوع + دالة الجلب ------------------------------------------------ */
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const fetchProjects = async (): Promise<Project[]> => {
  const API_URL =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
  const res = await fetch(`${API_URL}/projects`);
  if (!res.ok) throw new Error("فشل جلب المشاريع");
  return res.json();
};
/* ------------------------------------------------------------------ */

export default function ProjectsPage() {
  const { setLoading } = useLoading();

  /* بيانات المشاريع */
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  /* البحث والوسوم */
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("الكل");

  /* إظهار قائمة الفلاتر في الجوال */
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  /* جلب البيانات عند التحميل */
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch {
        setError("تعذّر تحميل المشاريع");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [setLoading]);

  /* تحديث حالة أحجام الشاشة */
  useEffect(() => {
    const resize = () => setIsDesktop(window.innerWidth >= 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* جميع الوسوم المميّزة */
  const allTags = useMemo(
      () =>
          Array.from(new Set(projects.flatMap((p) => p.tags))).sort(
              (a, b) => a.localeCompare(b, "ar")
          ),
      [projects]
  );

  /* تصفية المشاريع */
  const filteredProjects = useMemo(() => {
    let result = projects;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
          (p) =>
              p.title.toLowerCase().includes(q) ||
              p.description.toLowerCase().includes(q) ||
              p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedTag !== "الكل") {
      result = result.filter((p) => p.tags.includes(selectedTag));
    }
    return result;
  }, [projects, searchQuery, selectedTag]);

  /* تبديل الوسم */
  const toggleTag = (tag: string) =>
      setSelectedTag((prev) => (prev === tag ? "الكل" : tag));

  /* ---------------------------------------------------------------- */

  if (error)
    return (
        <div className="container py-12 text-center text-destructive">{error}</div>
    );

  return (
      <div className="py-12">
        <div className="container">
          {/* Hero */}
          <AnimatedSection className="text-center mb-12" animation="fadeIn">
            <h1 className="text-4xl font-bold mb-4">معرض المشاريع</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              مجموعة من المشاريع التي قمت بتطويرها باستخدام أحدث التقنيات
            </p>
          </AnimatedSection>

          {/* بحث + فلترة */}
          <AnimatedSection className="mb-12" animation="fadeInUp" delay={0.1}>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="w-full md:w-1/3 relative">
                <Input
                    type="search"
                    placeholder="ابحث عن مشاريع..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>

              <Button variant="outline" onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}>
                <Filter className="h-4 w-4 ml-2" />
                تصفية حسب التقنية
              </Button>
            </div>
          </AnimatedSection>

          {/* وسوم الفلترة */}
          <AnimatedSection
              className={`mb-8 ${isFilterMenuOpen || isDesktop ? "block" : "hidden md:block"}`}
              animation="fadeInUp"
              delay={0.2}
          >
            <div className="flex flex-wrap gap-2">
              <Button
                  variant={selectedTag === "الكل" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag("الكل")}
              >
                الكل
              </Button>
              {allTags.map((tag) => (
                  <Button
                      key={tag}
                      variant={selectedTag === tag ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Button>
              ))}
            </div>
          </AnimatedSection>

          {/* شبكة المشاريع */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProjects.length ? (
                filteredProjects.map((p, i) => (
                    <AnimatedSection key={p.id} delay={0.1 + i * 0.05} className="hover-scale">
                      <ProjectCard
                          id={p.id}
                          title={p.title}
                          description={p.description}
                          image={p.image}
                          tags={p.tags}
                      />
                    </AnimatedSection>
                ))
            ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-xl text-muted-foreground">
                    لا توجد مشاريع تطابق معايير البحث
                  </p>
                  <Button variant="link" className="mt-2" onClick={() => { setSelectedTag("الكل"); setSearchQuery(""); }}>
                    عرض جميع المشاريع
                  </Button>
                </div>
            )}
          </div>

          {/* CTA */}
          <AnimatedSection className="mt-16 bg-muted/50 rounded-lg p-8 text-center" animation="scaleIn" delay={0.4}>
            <SectionHeading title="هل لديك مشروع في ذهنك؟" subtitle="دعنا نتحدث عن كيفية تحويل فكرتك إلى واقع" />
            <div className="max-w-md mx-auto mt-8">
              <WhatsAppButton
                  message="مرحباً، أود التحدث معك بخصوص مشروع جديد..."
                  size="lg"
                  className="w-full md:w-auto mx-auto"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
  );
}
