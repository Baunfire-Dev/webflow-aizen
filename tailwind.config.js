module.exports = {
    corePlugins: {
        container: false,
        preflight: false,
    },
    theme: {
        extend: {
            fontFamily: {
                'satoshi': ['Satoshi Variable', 'sans-serif'],
                'roboto-mono': ['Roboto Mono', 'sans-serif'],
            },
            colors: {
                transparent: 'transparent',
                'white': '#ffffff',
                'dark-gray' : '#151515',
                'gray' : '#242424',
                'light-gray' : '#a1a1a1',
                'blue' : '#d5efff',
                'cream' : '#fffdf8',
                'purple' : '#ddb3ff',
                'navy' : '#010b5b',
                'tan' : '#f3f0e7',
                'yellow' : '#ffd562',
                'pink' : '#DDB3FF'
            }
        },
    },
    plugins: [
        function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'translate-z': (value) => ({
                        '--tw-translate-z': value,
                        transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
                    }),
                },
                { values: theme('translate'), supportsNegativeValues: true }
            )
        },
        function ({ addUtilities }) {
            addUtilities({
                ".center-y": {
                    top: "50%",
                    transform: "translateY(-50%)",
                },
                ".center-x": {
                    left: "50%",
                    transform: "translateX(-50%)",
                },
                ".center-xy": {
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                },
                ".text-inherit-all": {
                    "font-size": "inherit",
                    color: "inherit",
                    "font-weight": "inherit",
                    "line-height": "inherit",
                    "letter-spacing": "inherit",
                    "font-family": "inherit",
                },
            });
        },
    ],
};