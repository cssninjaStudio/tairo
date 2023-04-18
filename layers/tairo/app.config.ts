export default defineAppConfig({
  tairo: {
    title: 'Tairo',
    error: {
      logo: {
        component: 'TairoLogo',
        resolve: true,
        props: { class: 'text-primary-500 mx-auto h-40 p-6' },
      },
    },
    panels: [],
  },
  toaster: {
    duration: 6000,
    dismissible: false,
    theme: {
      maxToasts: 1,
      containerClass: [
        'fixed',
        'inset-0',
        'pointer-events-none',
        'p-4',
        'flex',
        'flex-col-reverse',
        'overflow-hidden',
        'z-[200]',
        'items-center',
        'gap-2',
        'space-y-3',
      ],
      wrapperClass: [
        'pointer-events-auto',
        'focus:outline-none',
        'rounded',
        'outline-slate-300',
        'outline-offset-2',
        'focus:outline',
        'focus:outline-2',
        'focus-within:outline',
        'focus-within:outline-2',
      ],
      transition: {
        enterActiveClass: 'transition duration-300 ease-out',
        enterFromClass: 'transform translate-y-full opacity-0',
        enterToClass: 'transform translate-y-0 opacity-100',
        leaveActiveClass: 'transition duration-200 ease-in',
        leaveFromClass: 'transform translate-y-0 opacity-100',
        leaveToClass: 'transform translate-y-full opacity-0',
      },
    },
  },
})
