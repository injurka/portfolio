import { defineConfig, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(), 
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: [
          { name: 'Inter', weights: ['400', '500', '600'] },
          { name: 'sans-serif', provider: 'none' }
        ],
        mono: [
          { name: 'JetBrains Mono', weights: ['400', '500'] },
          { name: 'monospace', provider: 'none' }
        ],
      },
    }),
  ],
})
