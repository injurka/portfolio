<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next';

const EXPERIENCE = [
  {
    company: "ООО Просебя",
    period: "Август 2024 — сейчас",
    duration: "1 год и 10 месяцев",
    position: "Инженер-программист",
    description: `Проект: Комплексная MedTech-платформа для заботы о ментальном здоровье (Webview, Standalone, CMS, Landing pages).\n\nОбязанности и достижения:\n• Разработка с нуля клиентской части платформы для проведения психологических тестов и потребления контента.\n• Создание личных кабинетов с разным уровнем доступа (Пациент, Врач, Администратор/Служба поддержки).\n• Интеграция WebRTC: реализовал защищенную систему видеоконсультаций между врачами и пациентами прямо в браузере.\n• Работа с WebSockets: внедрил систему мгновенных уведомлений и реалтайм-чат со службой поддержки.\n• Настройка Server-Side Rendering (SSR) с помощью Nuxt для SEO-оптимизации лендингов и контентных страниц.\n• Участие в проектировании API совместно с backend-командой (Node.js).\n• Сверстал адаптивный и доступный (a11y) UI с использованием Vuetify, настроил темизацию.`,
    stack: ["Vue 3", "Nuxt", "Node.js", "WebSockets", "WebRTC", "TypeScript", "Vuetify"]
  },
  {
    company: "ООО НордКлан",
    period: "Июль 2021 — Август 2023",
    duration: "2 года и 2 месяца",
    position: "Инженер-программист",
    description: `В рамках компании участвовал в разработке внутренних продуктов и крупных аутсорс/аутстаф проектах.\n\nПроект 1: АРЦ — Ценообразование (Аутсорс)\nСистема агрегации и контроля цен на выкуп автомобилей для логистов и аналитиков.\n• Разработал сложные интерактивные таблицы и дашборды для отображения больших массивов данных (с фильтрацией, сортировкой и пагинацией).\n• Спроектировал калькулятор динамического ценообразования, учитывающий состояние авто, дефекты и стоимость транспортировки между площадками.\n• Выстроил архитектуру управления состоянием приложения на базе MobX, что позволило легко масштабировать сложную бизнес-логику.\nСтек: React, TypeScript, MobX.\n\nПроект 2: Gaskar Group (Аутстаф)\nРазработка облачной платформы для цифровизации строительства (BIM-технологии).\n• Интегрировал модуль 3D-просмотрщика строительных объектов на базе кастомизированного форка Three.js.\n• Разработал UI-контролы для взаимодействия с 3D-сценой (вращение, масштабирование, изоляция отдельных слоев и элементов конструкции).\n• Оптимизировал рендеринг тяжелых 3D-моделей в браузере, минимизировав утечки памяти в React-компонентах при переключении между сценами.\nСтек: React, TypeScript, Three.js (fork), WebGL.\n\nПроект 3: MLSense (Внутренний проект)\nСистема контроля дефектов на производстве с использованием Machine Learning.\n• Разработал единый центр мониторинга брака. Приложение получало потоковые данные с пунктов контроля через WebSockets и моментально визуализировало их.\n• Использовал Ionic для обеспечения кроссплатформенности (работа приложения на планшетах контролеров в цехах).\n• Настроил строгий и предсказуемый data-flow с помощью Effector.\nСтек: React, TypeScript, Ionic, Effector, WebSockets.\n\nПроект 4: HeadOf (Внутренний проект)\nERP/CRM веб-приложение для управления процессами внутри IT-компании.\n• Разработал модули расчета коммерческой занятости (утилизации) сотрудников и отделов.\n• Создал интерфейсы для тайм-трекинга (учет переработок/недоработок, отпусков).\n• Реализовал дашборд с графиками динамики изменений (использовал библиотеки чартов).\n• Настроил быструю стилизацию приложения с помощью TailwindCSS, управление состоянием через Context API + хуки.\nСтек: React, TypeScript, Context API, TailwindCSS.`
  }
];
const PROJECTS = [
  { 
    name: "Trip Scheduler", 
    url: "https://trip-scheduler.ru",
    repo: "https://github.com/injurka/trip-scheduler", 
    description: "Интерактивный планировщик путешествий. Позволяет составлять сложные маршруты, распределять события по дням и контролировать бюджет поездки. Интегрирован с картами для визуализации.",
    stack: ["Vue", "Pinia", "Mapbox API"]
  },
  { 
    name: "Insight Book", 
    url: "https://insight-book.trip-scheduler.ru",
    repo: "https://github.com/injurka/insight-book",
    description: "Электронный дневник путешественника. Платформа для сохранения впечатлений, фотографий и инсайтов из поездок. Спроектирован с упором на типографику и удобство чтения.",
    stack: ["Vue", "TypeScript"]
  },
  { 
    name: "Wander Mark", 
    url: "https://wander-mark.trip-scheduler.ru",
    repo: "https://github.com/injurka/wander-mark",
    description: "Приложение для коллекционирования посещенных мест. Интерактивная скретч-карта мира с элементами геймификации, статистикой поездок и системой личных достижений.",
    stack: ["Vue", "TypeScript"]
  }
];
const SKILLS = ["TypeScript", "Vue", "React"];
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 lg:flex-1">
    
    <section class="fade-up lg:col-span-7 flex flex-col" style="animation-delay: 0.2s">
       <router-link to="/experience" class="text-xs uppercase tracking-[0.3em] font-bold mb-6 text-gray-400 hover:text-black transition-colors">Опыт работы</router-link>
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
           
           <div v-if="exp.stack" class="text-xs mt-3 text-gray-500 font-mono tracking-tight uppercase">
             Стек: {{ exp.stack.join(" / ") }}
           </div>
         </div>
       </div>
    </section>

    <aside class="lg:col-span-5 flex flex-col space-y-12 lg:border-l lg:border-gray-100 lg:pl-8">
       
    <section class="fade-up" style="animation-delay: 0.3s">
      <router-link to="/about" class="block text-xs uppercase tracking-[0.3em] font-bold mb-4 text-gray-400 hover:text-black transition-colors">
        О себе
      </router-link>
      <div class="text-sm leading-relaxed text-[#1A1A1A] italic space-y-4">
        <p>Я Корнилов Иван фронтенд-разработчик с хорошим опытом в экосистемах React и Vue. Успел поработать как в продукте, так и в аутсорсе/аутстафе. В основном занимался сложными интерфейсами: CRM/ERP-системами, MedTech с реалтаймом (WebSockets, WebRTC), нестандартными задачами вроде 3D-графики (Three.js) и тяжелой бизнес-логикой на клиенте. Люблю порядок в коде, TypeScript и когда всё работает быстро и предсказуемо.</p>
        <p>В свободное время обожаю путешествовать. Чтобы совместить приятное с полезным, я не просто веду путевые заметки, а оформляю их в виде полноценных пет-проектов. Для меня это идеальная песочница: здесь можно свободно тестировать новые технологии, фреймворки и подходы, которые хочется «пощупать» руками. Так я убиваю двух зайцев - сохраняю впечатления от поездок и постоянно прокачиваю свои скиллы на практике.</p>
        <p>А еще в качестве разминки для мозга понемногу интересуюсь китайским языком :)</p>
      </div>
    </section>

    <section class="fade-up" style="animation-delay: 0.4s">
      <router-link to="/projects" class="block text-xs uppercase tracking-[0.3em] font-bold mb-6 text-gray-400 hover:text-black transition-colors">
        Пет-проекты
      </router-link>
          <div class="space-y-8">
            <div v-for="(project, idx) in PROJECTS" :key="idx" class="group flex flex-col">
              <div class="flex justify-between items-baseline mb-2 gap-4">
                <a :href="project.url" target="_blank" rel="noreferrer" class="text-base font-bold flex items-center gap-1 hover:underline decoration-2 underline-offset-4">
                  {{ project.name }}
                  <ArrowUpRight :size="14" class="opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                </a>
                <div class="flex gap-3 shrink-0">
                  <a :href="project.repo" target="_blank" rel="noreferrer" class="text-[10px] uppercase tracking-widest text-gray-500 hover:text-[#1A1A1A] transition-colors font-bold">GitHub</a>
                  <a :href="project.url" target="_blank" rel="noreferrer" class="text-[10px] uppercase tracking-widest text-gray-500 hover:text-[#1A1A1A] transition-colors font-bold">Demo</a>
                </div>
              </div>
              <p class="text-sm leading-relaxed text-[#1A1A1A] mb-3 opacity-90">{{ project.description }}</p>
              <div class="text-[11px] text-gray-500 font-mono tracking-tight uppercase border-l-2 border-gray-200 pl-3">Стек: {{ project.stack.join(" / ") }}</div>
            </div>
          </div>
       </section>

       <div class="grid grid-cols-2 gap-4">
         <section class="fade-up" style="animation-delay: 0.5s">
           <h2 class="text-xs uppercase tracking-[0.2em] font-bold mb-3 text-gray-400">Навыки</h2>
           <p class="text-[11px] font-mono leading-tight uppercase relative">{{ SKILLS.join(' / ') }}</p>
         </section>
         <section class="fade-up" style="animation-delay: 0.6s">
            <h2 class="text-xs uppercase tracking-[0.2em] font-bold mb-3 text-gray-400">Образование</h2>
            <p class="text-[11px] leading-tight flex flex-col">
              <strong class="text-xs text-[#1A1A1A]">УлГТУ</strong>
              <span class="text-gray-500 mt-0.5">IT Системы</span>
              <span class="text-gray-500">Выпуск 2023</span>
            </p>
         </section>
       </div>
    </aside>
  </div>
</template>
