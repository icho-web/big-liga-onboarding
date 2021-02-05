const animations = () => {
  const main = document.querySelector('.main');
  const ANIMATION_END_TIME = 1200;
  const container = document.querySelector('.loader');
  const loaderDesc = document.querySelector('.loader__desc');
  const body = document.body;
  const viewportMd = window.matchMedia('(max-width: 1023px)').matches;
  const sidePanel = document.querySelector('.main__text-wrapper');

  if (container) {
    let loaderInit = () => {
      body.style.overflow = 'hidden';

      setTimeout(() => {
        loaderDesc.style.opacity = '1';
      }, ANIMATION_END_TIME);
    };

    let onKeydown = (evt) => {
      if (evt.key === 'Enter') {
        closeLoader();
      }
    };

    let closeLoader = () => {
      container.classList.add('hidden');

      setTimeout(() => {
        container.style.display = 'none';
        main.classList.add('init');
      }, 600);

      body.style.overflow = '';
      window.removeEventListener('keydown', onKeydown);
      container.removeEventListener('click', closeLoader);
    };

    loaderInit();

    container.addEventListener('click', closeLoader);
    window.addEventListener('keydown', onKeydown);
  }

  if (main) {
    if (viewportMd) {
      main.addEventListener('click', (evt) => {
        if (!evt.target.classList.contains('main__text-wrapper')) {
          sidePanel.classList.add('active');
          body.style.cssText = 'height: 100vh; overflow: hidden;';
        } else {
          sidePanel.classList.remove('active');
          body.style.cssText = '';
        }
      });
    }
  }

  window.addEventListener('resize', () => {
    if (!viewportMd) {
      sidePanel.classList.remove('active');
      body.style.cssText = '';
    }
  });
};

export {animations};
