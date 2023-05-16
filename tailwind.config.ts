import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            spacing: {
                'screen-4/5': '80vh',
                'screen-1/5': '20vh',
                'screen-1/10': '10vh',
                'screen-9/10': '90vh',
                'screen-1/20': '5vh',
                'screen-19/20': '95vh',
            },
        }
    },
    content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`
    ],
}