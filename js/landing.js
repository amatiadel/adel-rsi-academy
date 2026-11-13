const hero = document.querySelector('.hero');
const floatingActions = document.querySelector('.floating-actions');
let previousScroll = Math.max(0, window.scrollY);

function updateFloatingActions() {
  const currentScroll = Math.max(0, window.scrollY);
  const pastHero = hero.getBoundingClientRect().bottom <= 0;

  if (!pastHero || currentScroll < previousScroll) {
    floatingActions.hidden = true;
  } else if (currentScroll > previousScroll) {
    floatingActions.hidden = false;
  }

  previousScroll = currentScroll;
}

window.addEventListener('scroll', updateFloatingActions, { passive: true });
window.addEventListener('resize', updateFloatingActions);
