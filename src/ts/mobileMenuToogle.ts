export default function mobileMenuToogle() {
  const mobileMenuButton = document.querySelector('.header-menu__button') as HTMLElement;
  const mobileMenuContent = document.querySelector('.mobile-menu') as HTMLElement;
  const closeButton = document.querySelector('.mobile-menu__close-button') as HTMLElement;

  document.documentElement.addEventListener('click', e => {
    const target = e.target as HTMLElement;

    if (target === mobileMenuButton) {
      mobileMenuContent?.classList.add('open');
    } else if (target === closeButton) {
      mobileMenuContent?.classList.remove('open');
    } else {
      const isClickOutsideMenu = target.closest('.mobile-menu') === null;

      if (isClickOutsideMenu) {
        mobileMenuContent?.classList.remove('open');
      }
    }
  });
}
