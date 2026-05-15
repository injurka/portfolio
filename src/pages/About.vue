<script setup lang="ts">
const SKILLS = ["TypeScript", "Vue", "React", "Nuxt", "Node.js", "WebSockets", "WebRTC", "Three.js", "TailwindCSS"];
</script>

<template>
  <div class="flex flex-col space-y-12">
    <section>
      <div class="text-sm leading-relaxed text-[#1A1A1A] italic space-y-4">
        <p>Я Корнилов Иван фронтенд-разработчик с хорошим опытом в экосистемах React и Vue. Успел поработать как в продукте, так и в аутсорсе/аутстафе. В основном занимался сложными интерфейсами: CRM/ERP-системами, MedTech с реалтаймом (WebSockets, WebRTC), нестандартными задачами вроде 3D-графики (Three.js) и тяжелой бизнес-логикой на клиенте. Люблю порядок в коде, TypeScript и когда всё работает быстро и предсказуемо.</p>
        <p>В свободное время обожаю путешествовать. Чтобы совместить приятное с полезным, я не просто веду путевые заметки, а оформляю их в виде полноценных пет-проектов. Для меня это идеальная песочница: здесь можно свободно тестировать новые технологии, фреймворки и подходы, которые хочется «пощупать» руками. Так я убиваю двух зайцев - сохраняю впечатления от поездок и постоянно прокачиваю свои скиллы на практике.</p>
        <p>А еще в качестве разминки для мозга понемногу интересуюсь китайским языком :)</p>
      </div>
    </section>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-gray-200">
      <section>
        <h2 class="text-xs uppercase tracking-[0.2em] font-bold mb-4 text-gray-400">Навыки</h2>
        <p class="text-xs font-mono leading-relaxed uppercase relative">
          {{ SKILLS.join(' / ') }}
        </p>
      </section>

      <section>
        <h2 class="text-xs uppercase tracking-[0.2em] font-bold mb-4 text-gray-400">Образование</h2>
        <p class="text-[12px] leading-tight flex flex-col">
          <strong class="text-sm text-[#1A1A1A] mb-1">УлГТУ</strong>
          <span class="text-gray-500">Информационные системы</span>
          <span class="text-gray-500 font-mono mt-1">Выпуск 2023</span>
        </p>
      </section>
    </div>
  </div>
</template>
