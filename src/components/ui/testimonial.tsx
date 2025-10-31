"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "@/lib/animations";

export interface TestimonialProps {
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar?: string;
  };
  className?: string;
}

export function Testimonial({ quote, author, className = "" }: TestimonialProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className={`bg-white rounded-lg p-8 shadow-sm border border-gray-100 ${className}`}
    >
      <div className="mb-6">
        <svg
          className="w-10 h-10 text-primary-500 opacity-50"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      
      <div className="flex items-center">
        {author.avatar && (
          <div className="mr-4 flex-shrink-0">
            <Image
              src={author.avatar}
              alt={author.name}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <div className="font-semibold text-gray-900">{author.name}</div>
          <div className="text-sm text-gray-600">
            {author.title} • {author.company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface TestimonialGridProps {
  testimonials: TestimonialProps[];
  columns?: 1 | 2 | 3;
}

export function TestimonialGrid({ testimonials, columns = 3 }: TestimonialGridProps) {
  const gridClass = {
    1: "grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3"
  }[columns];

  return (
    <div className={`grid ${gridClass} gap-6`}>
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </div>
  );
}
