<script setup lang="ts">
import { Github, Mail, Send } from 'lucide-vue-next';
</script>

<template>
  <div class="app-shell min-h-screen flex flex-col text-[#1A1A1A] font-sans selection:bg-black selection:text-white pb-12">
    <main class="relative z-10 flex-1 flex flex-col w-full max-w-6xl mx-auto px-6 py-12 sm:px-12 sm:py-16">
      <div class="flex flex-col flex-1">
        <header
          class="fade-up flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-[#1A1A1A] pb-6 mb-8 lg:mb-12 gap-6"
          style="animation-delay: 0.1s"
        >
          <div class="flex flex-col">
            <router-link to="/" class="text-5xl sm:text-7xl font-bold tracking-tighter leading-none uppercase">
              FRONT.<br />.DEV
            </router-link>
            <p class="mt-4 text-xs sm:text-sm tracking-widest uppercase font-medium text-gray-500">
              Специализация: Vue & React
            </p>
          </div>

          <div class="sm:text-right flex flex-col gap-1 w-full sm:w-auto">
            <div class="flex flex-wrap gap-4 sm:justify-end mb-2 border-b border-gray-200 pb-2 sm:border-none sm:pb-0">
              <a
                href="https://github.com/injurka"
                target="_blank"
                rel="noreferrer"
                class="flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold hover:underline"
              >
                <Github :size="14" /> GitHub
              </a>

              <a
                href="https://t.me/injurkx"
                target="_blank"
                rel="noreferrer"
                class="flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold hover:underline"
              >
                <Send :size="14" /> Telegram
              </a>

              <a
                href="mailto:injurka@gmail.com"
                class="flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold hover:underline"
              >
                <Mail :size="14" /> Email
              </a>
            </div>

            <p class="text-lg font-serif italic hidden sm:block">injurka</p>
            <p class="text-xs uppercase tracking-widest text-[#1A1A1A] mt-1">Ульяновск / Remote</p>
          </div>
        </header>

        <div class="flex-1 flex flex-col">
          <router-view v-slot="{ Component }">
            <transition name="page" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>

        <div class="fade-up mt-8 pt-6 border-t border-[#1A1A1A]" style="animation-delay: 0.7s">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-0">
            <div class="flex flex-col sm:flex-row gap-3">
              <a
                href="https://github.com/injurka"
                target="_blank"
                rel="noreferrer"
                class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:underline group"
              >
                <Github :size="16" class="transition-transform group-hover:-translate-y-0.5" />
                Github
              </a>

              <a
                href="https://t.me/injurka"
                target="_blank"
                rel="noreferrer"
                class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:underline group"
              >
                <Send :size="16" class="transition-transform group-hover:-translate-y-0.5" />
                Telegram
              </a>

              <a
                href="mailto:injurka@gmail.com"
                class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:underline group"
              >
                <Mail :size="16" class="transition-transform group-hover:-translate-y-0.5" />
                Contact
              </a>
            </div>

            <div class="w-8 h-8 bg-[#1A1A1A] rounded-full hidden sm:flex items-center justify-center shrink-0">
              <div class="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
html {
  font-size: 150%;
}
</style>

<style scoped>
@keyframes fadeUpAnim {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-up {
  opacity: 0;
  animation: fadeUpAnim 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.app-shell {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 15% 20%, rgba(90, 126, 255, 0.10), transparent 30%),
    radial-gradient(circle at 85% 15%, rgba(255, 182, 193, 0.10), transparent 28%),
    radial-gradient(circle at 70% 75%, rgba(109, 40, 217, 0.06), transparent 30%),
    #FBFBF9;
}

.app-shell::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.32;
  background-image:
    linear-gradient(rgba(26, 26, 26, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26, 26, 26, 0.035) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: radial-gradient(circle at center, black 55%, transparent 100%);
}

.app-shell::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.06;
  background-image: radial-gradient(rgba(0, 0, 0, 0.7) 0.6px, transparent 0.6px);
  background-size: 8px 8px;
  mix-blend-mode: multiply;
}
</style>
