<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next';

const PROJECTS = [
  { 
    name: "Trip Scheduler", 
    url: "https://trip-scheduler.ru",
    repo: "https://github.com/injurka",
    description: "Интерактивный планировщик путешествий. Позволяет составлять сложные маршруты, распределять события по дням и контролировать бюджет поездки. Интегрирован с картами для визуализации.",
    stack: ["Vue 3", "Pinia", "TailwindCSS", "Mapbox API"]
  },
  { 
    name: "Insight Book", 
    url: "https://insight-book.trip-scheduler.ru",
    repo: "https://github.com/injurka",
    description: "Электронный дневник путешественника. Платформа для сохранения впечатлений, фотографий и инсайтов из поездок. Спроектирован с упором на типографику и удобство чтения.",
    stack: ["React", "Next.js", "TypeScript", "Framer Motion"]
  },
  { 
    name: "Wander Mark", 
    url: "https://wander-mark.trip-scheduler.ru",
    repo: "https://github.com/injurka",
    description: "Приложение для коллекционирования посещенных мест. Интерактивная скретч-карта мира с элементами геймификации, статистикой поездок и системой личных достижений.",
    stack: ["Vue 3", "Nuxt 3", "Three.js", "Supabase"]
  }
];
</script>

<template>
  <div class="space-y-10">
    <div 
      v-for="(project, idx) in PROJECTS" 
      :key="idx" 
      class="group flex flex-col"
    >
      <div class="flex justify-between items-baseline mb-2 gap-4">
        <a :href="project.url" target="_blank" rel="noreferrer" class="text-xl font-bold flex items-center gap-1 hover:underline decoration-2 underline-offset-4">
          {{ project.name }}
          <ArrowUpRight :size="18" class="opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
        </a>
        <div class="flex gap-4 shrink-0">
          <a :href="project.repo" target="_blank" rel="noreferrer" class="text-[11px] uppercase tracking-widest text-gray-500 hover:text-[#1A1A1A] transition-colors font-bold">
            GitHub
          </a>
          <a :href="project.url" target="_blank" rel="noreferrer" class="text-[11px] uppercase tracking-widest text-gray-500 hover:text-[#1A1A1A] transition-colors font-bold">
            Demo
          </a>
        </div>
      </div>
      <p class="text-sm leading-relaxed text-[#1A1A1A] mb-4 opacity-90">
        {{ project.description }}
      </p>
      <div class="text-[11px] text-gray-500 font-mono tracking-tight uppercase border-l-2 border-gray-200 pl-3">
        Стек: {{ project.stack.join(" / ") }}
      </div>
    </div>
  </div>
</template>
