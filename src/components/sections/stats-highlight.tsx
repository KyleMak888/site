"use client";

import { motion } from "framer-motion";
import { Card, AnimatedCounter, AnimatedText } from "@/components/ui";
import type { StatItem } from "@/types";
import { staggerContainer, staggerItem } from "@/lib/animations";

type StatsHighlightProps = {
  stats: StatItem[];
};

export function StatsHighlight({ stats }: StatsHighlightProps) {
  const parseMetric = (metric: string) => {
    const match = metric.match(/^(\d+)([+%]?)$/);
    if (match) {
      return {
        value: parseInt(match[1], 10),
        suffix: match[2] || "",
      };
    }
    return null;
  };

  return (
    <motion.div
      className="grid gap-8 md:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {stats.map((stat) => {
        const parsed = parseMetric(stat.metric);
        
        return (
          <motion.div key={stat.id} variants={staggerItem}>
            <Card className="bg-gradient-to-br from-gray-50 to-white p-8 text-center shadow-lg hover:shadow-xl">
              <div className="mb-4 text-5xl font-bold text-primary">
                {parsed ? (
                  <AnimatedCounter value={parsed.value} suffix={parsed.suffix} />
                ) : (
                  stat.metric
                )}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                <AnimatedText text={stat.title} />
              </h3>
              {stat.description && (
                <p className="text-gray-600">
                  <AnimatedText text={stat.description} />
                </p>
              )}
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
