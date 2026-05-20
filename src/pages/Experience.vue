<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next';

const EXPERIENCE = [
  {
    company: "ООО Просебя",
    period: "Август 2024 — сейчас",
    position: "Инженер-программист",
    projects: [
      {
        name: "Комплексная MedTech-платформа",
        type: "Продукт",
        description: `Платформа для заботы о ментальном здоровье (Webview, Standalone, CMS, Landing pages).\n\nОбязанности и достижения:\n• Разработка с нуля клиентской части платформы для проведения психологических тестов и потребления контента.\n• Создание личных кабинетов с разным уровнем доступа (Пациент, Врач, Администратор/Служба поддержки).\n• Интеграция WebRTC: реализовал защищенную систему видеоконсультаций между врачами и пациентами прямо в браузере.\n• Работа с WebSockets: внедрил систему мгновенных уведомлений и реалтайм-чат со службой поддержки.\n• Настройка Server-Side Rendering (SSR) с помощью Nuxt для SEO-оптимизации лендингов и контентных страниц.\n• Участие в проектировании API совместно с backend-командой (Node.js).\n• Сверстал адаптивный и доступный (a11y) UI с использованием Vuetify, настроил темизацию.`,
        stack: ["Vue 3", "Nuxt", "Node.js", "WebSockets", "WebRTC", "TypeScript", "Vuetify"]
      }
    ]
  },
  {
    company: "ООО НордКлан",
    period: "Июль 2021 — Август 2023",
    position: "Инженер-программист",
    description: `В рамках компании участвовал в разработке внутренних продуктов и крупных аутсорс/аутстаф проектах.`,
    projects: [
      {
        name: "АРЦ — Ценообразование",
        type: "Аутсорс",
        description: "Система агрегации и контроля цен на выкуп автомобилей для логистов и аналитиков.\n• Разработал сложные интерактивные таблицы и дашборды для отображения больших массивов данных.\n• Спроектировал калькулятор динамического ценообразования.",
        stack: ["React", "TypeScript", "MobX"]
      },
      {
        name: "Gaskar Group",
        type: "Аутстаф",
        description: "Разработка облачной платформы для цифровизации строительства (BIM-технологии).\n• Интегрировал модуль 3D-просмотрщика строительных объектов на базе кастомизированного форка Three.js.\n• Разработал UI-контролы для взаимодействия с 3D-сценой.",
        stack: ["React", "TypeScript", "Three.js (fork)", "WebGL"]
      },
      {
        name: "MLSense",
        type: "Внутренний проект",
        description: "Система контроля дефектов на производстве с использованием Machine Learning.",
        stack: ["React", "TypeScript", "Ionic", "Effector", "WebSockets"]
      },
      {
        name: "HeadOf",
        type: "Внутренний проект",
        description: "ERP/CRM веб-приложение для управления процессами внутри IT-компании.",
        stack: ["React", "TypeScript", "Context API", "TailwindCSS"]
      }
    ]
  }
];
</script>

<template>
  <div class="space-y-10">
    <div 
      v-for="(exp, idx) in EXPERIENCE" 
      :key="idx" 
      :class="['border-l-2 pl-6', idx === 0 ? 'border-[#1A1A1A]' : 'border-gray-200']"
    >
      <div class="flex flex-col xl:flex-row xl:justify-between xl:items-baseline mb-2 gap-2">
        <h3 class="text-xl font-bold">{{ exp.company }}</h3>
        <span :class="['text-xs font-mono px-2 py-0.5 w-fit', idx === 0 ? 'bg-black text-white' : 'bg-gray-200 text-[#1A1A1A]']">
          {{ exp.period }}
        </span>
      </div>
      <p class="text-sm italic mb-4 text-gray-600 underline decoration-gray-300 underline-offset-4">{{ exp.position }}</p>
      
      <div v-if="exp.description" class="text-sm space-y-2 leading-relaxed opacity-90 whitespace-pre-wrap">{{ exp.description }}</div>
      
      <div v-if="exp.projects" class="mt-5 space-y-6">
        <div v-for="(proj, pIdx) in exp.projects" :key="pIdx" class="relative">
          <div class="flex items-center gap-2 mb-1.5">
            <Sparkles class="text-gray-400 shrink-0" :size="16" />
            <h4 class="text-sm font-bold text-[#1A1A1A]">{{ proj.name }}</h4>
            <span v-if="proj.type" class="text-[10px] leading-none uppercase tracking-wider text-gray-500 font-medium border border-gray-200 px-1.5 py-1 rounded">
              {{ proj.type }}
            </span>
          </div>
          <div v-if="proj.description" class="text-sm leading-relaxed opacity-90 whitespace-pre-wrap pl-6">{{ proj.description }}</div>
          <div v-if="proj.stack" class="text-[11px] mt-2 text-gray-500 font-mono tracking-tight uppercase pl-6">
            Стек: {{ proj.stack.join(" / ") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
