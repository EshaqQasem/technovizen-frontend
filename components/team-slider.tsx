"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import TeamMemberCard from './team-member-card';
import AnimatedSection from './animated-section';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  social_links?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

interface TeamSliderProps {
  members: TeamMember[];
}

export default function TeamSlider({ members }: TeamSliderProps) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="py-8"
      >
        {members.map((member, index) => (
          <SwiperSlide key={member.id}>
            <AnimatedSection delay={index * 0.1} className="hover-scale">
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                socialLinks={member.social_links}
                href={`/team/${member.id}`}
              />
            </AnimatedSection>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
