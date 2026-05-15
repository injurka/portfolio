<script setup lang="ts">
const EXPERIENCE = [
  {
    company: "ООО Просебя",
    period: "Август 2024 — сейчас",
    position: "Инженер-программист",
    description: `Проект: Комплексная MedTech-платформа для заботы о ментальном здоровье (Webview, Standalone, CMS, Landing pages).\n\nОбязанности и достижения:\n• Разработка с нуля клиентской части платформы для проведения психологических тестов и потребления контента.\n• Создание личных кабинетов с разным уровнем доступа (Пациент, Врач, Администратор/Служба поддержки).\n• Интеграция WebRTC: реализовал защищенную систему видеоконсультаций между врачами и пациентами прямо в браузере.\n• Работа с WebSockets: внедрил систему мгновенных уведомлений и реалтайм-чат со службой поддержки.\n• Настройка Server-Side Rendering (SSR) с помощью Nuxt для SEO-оптимизации лендингов и контентных страниц.\n• Участие в проектировании API совместно с backend-командой (Node.js).\n• Сверстал адаптивный и доступный (a11y) UI с использованием Vuetify, настроил темизацию.`,
    stack: ["Vue 3", "Nuxt", "Node.js", "WebSockets", "WebRTC", "TypeScript", "Vuetify"]
  },
  {
    company: "ООО НордКлан",
    period: "Июль 2021 — Август 2023",
    position: "Инженер-программист",
    description: `В рамках компании участвовал в разработке внутренних продуктов и крупных аутсорс/аутстаф проектах.\n\nПроект 1: АРЦ — Ценообразование (Аутсорс)\nСистема агрегации и контроля цен на выкуп автомобилей для логистов и аналитиков.\n• Разработал сложные интерактивные таблицы и дашборды для отображения больших массивов данных.\n• Спроектировал калькулятор динамического ценообразования.\nСтек: React, TypeScript, MobX.\n\nПроект 2: Gaskar Group (Аутстаф)\nРазработка облачной платформы для цифровизации строительства (BIM-технологии).\n• Интегрировал модуль 3D-просмотрщика строительных объектов на базе кастомизированного форка Three.js.\n• Разработал UI-контролы для взаимодействия с 3D-сценой.\nСтек: React, TypeScript, Three.js (fork), WebGL.\n\nПроект 3: MLSense (Внутренний проект)\nСистема контроля дефектов на производстве с использованием Machine Learning.\nСтек: React, TypeScript, Ionic, Effector, WebSockets.\n\nПроект 4: HeadOf (Внутренний проект)\nERP/CRM веб-приложение для управления процессами внутри IT-компании.\nСтек: React, TypeScript, Context API, TailwindCSS.`
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
      
      <div class="text-sm space-y-2 leading-relaxed opacity-90 whitespace-pre-wrap">{{ exp.description }}</div>
      
      <div v-if="exp.stack" class="text-xs mt-4 text-gray-500 font-mono tracking-tight uppercase">
        Стек: {{ exp.stack.join(" / ") }}
      </div>
    </div>
  </div>
</template>
