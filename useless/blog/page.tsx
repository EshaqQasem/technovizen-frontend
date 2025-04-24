"use client";
import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";
import BlogCard from "@/components/blog-card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import AnimatedSection from "@/components/animated-section";

export default function BlogPage() {
  // Memoizing blogPosts to avoid unnecessary rerenders
  const blogPosts = useMemo(() => [
    {
      id: "post1",
      title: "كيفية بناء واجهة مستخدم جذابة باستخدام React",
      excerpt:
        "في هذا المقال، سنتعرف على كيفية بناء واجهة مستخدم جذابة وسهلة الاستخدام باستخدام مكتبة React وبعض المكتبات المساعدة مثل Tailwind CSS.",
      image: "/imags/blog/1.webp",
      date: "10 يناير 2023",
      readTime: "5 دقائق",
      category: "React",
    },
    {
      id: "post2",
      title: "مقدمة في Next.js: إطار العمل المثالي لتطبيقات React",
      excerpt:
        "Next.js هو إطار عمل مبني على React يوفر ميزات مثل توجيه الصفحات والتحميل المسبق والتوليد الثابت. في هذا المقال، سنتعرف على أساسيات Next.js وكيفية البدء في استخدامه.",
      image: "/imags/blog/2.jpg",
      date: "15 فبراير 2023",
      readTime: "7 دقائق",
      category: "Next.js",
    },
    {
      id: "post3",
      title: "استخدام TypeScript مع React: دليل شامل",
      excerpt:
        "TypeScript يضيف أنواع ثابتة إلى JavaScript، مما يساعد في اكتشاف الأخطاء أثناء التطوير. في هذا المقال، سنتعلم كيفية استخدام TypeScript مع React لبناء تطبيقات أكثر أمانًا.",
      image: "/imags/blog/3.jpg",
      date: "5 مارس 2023",
      readTime: "10 دقائق",
      category: "TypeScript",
    },
    {
      id: "post4",
      title: "بناء واجهة خلفية باستخدام Node.js و Express",
      excerpt:
        "في هذا المقال، سنتعلم كيفية بناء واجهة خلفية قوية باستخدام Node.js و Express، وكيفية إنشاء API RESTful للتواصل مع تطبيق الواجهة الأمامية.",
      image: "/imags/blog/4.jpg",
      date: "20 أبريل 2023",
      readTime: "8 دقائق",
      category: "Node.js",
    },
    {
      id: "post5",
      title: "استخدام MongoDB مع Node.js: دليل شامل",
      excerpt:
        "MongoDB هي قاعدة بيانات NoSQL شائعة تستخدم مع تطبيقات Node.js. في هذا المقال، سنتعلم كيفية استخدام MongoDB مع Node.js لتخزين واسترجاع البيانات.",
      image: "/imags/blog/5.webp",
      date: "10 مايو 2023",
      readTime: "6 دقائق",
      category: "MongoDB",
    },
    {
      id: "post6",
      title: "تحسين أداء تطبيقات React: نصائح وحيل",
      excerpt:
        "في هذا المقال، سنتعرف على بعض النصائح والحيل لتحسين أداء تطبيقات React، مثل استخدام React.memo و useMemo و useCallback.",
      image: "/imags/blog/6.jpg",
      date: "15 يونيو 2023",
      readTime: "9 دقائق",
      category: "React",
    },
  ], []);

  // Categories
  const categories = ["الكل", "React", "Next.js", "TypeScript", "Node.js", "MongoDB"];

  // State for filtering and search
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  // Filter posts based on category and search query
  useEffect(() => {
    let result = [...blogPosts];

    // Filter by category
    if (selectedCategory !== "الكل") {
      result = result.filter((post) => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) => post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query),
      );
    }

    setFilteredPosts(result);
  }, [selectedCategory, searchQuery, blogPosts]);

  return (
    <div className="py-12">
      <div className="container">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-12" animation="fadeIn">
          <h1 className="text-4xl font-bold mb-4">المدونة</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أحدث المقالات والمدونات حول تطوير الويب والتقنيات الحديثة
          </p>
        </AnimatedSection>

        {/* Search and Filter */}
        <AnimatedSection className="mb-12" animation="fadeInUp" delay={0.1}>
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="w-full md:w-1/3 relative">
              <Input
                type="search"
                placeholder="ابحث عن مقالات..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="hover-lift"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={0.1 + index * 0.05} className="hover-scale">
                <BlogCard
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  date={post.date}
                  readTime={post.readTime}
                  category={post.category}
                />
              </AnimatedSection>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-muted-foreground">لا توجد مقالات تطابق معايير البحث</p>
              <Button
                variant="link"
                onClick={() => {
                  setSelectedCategory("الكل");
                  setSearchQuery("");
                }}
                className="mt-2"
              >
                عرض جميع المقالات
              </Button>
            </div>
          )}
        </div>

        {/* Pagination - Only show if we have filtered posts */}
        {filteredPosts.length > 0 && (
          <AnimatedSection className="flex justify-center gap-2" animation="fadeInUp" delay={0.3}>
            <Button variant="outline" disabled className="hover-lift">
              السابق
            </Button>
            <Button variant="outline" className="bg-primary text-primary-foreground hover-lift">
              1
            </Button>
            <Button variant="outline" className="hover-lift">
              2
            </Button>
            <Button variant="outline" className="hover-lift">
              3
            </Button>
            <Button variant="outline" className="hover-lift">
              التالي
            </Button>
          </AnimatedSection>
        )}

        {/* Newsletter */}
        <AnimatedSection className="mt-20 bg-muted/50 rounded-lg p-8 text-center" animation="scaleIn" delay={0.4}>
          <SectionHeading
            title="اشترك في النشرة الإخبارية"
            subtitle="احصل على أحدث المقالات والتحديثات مباشرة في بريدك الإلكتروني"
          />
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input type="email" placeholder="البريد الإلكتروني" />
              <Button className="hover-lift">اشتراك</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              لن نرسل لك أي رسائل غير مرغوب فيها. يمكنك إلغاء الاشتراك في أي وقت.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
