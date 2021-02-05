const animations = () => {
  const main = document.querySelector('.main');
  const ANIMATION_END_TIME = 1200;
  const loader = document.querySelector('.loader');
  const loaderDesc = document.querySelector('.loader__desc');
  const body = document.body;
  const sidePanel = document.querySelector('.main__text-wrapper');
  const viewportMd = '(max-width: 1023px)';

  if (loader) {
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
      loader.classList.add('hidden');

      setTimeout(() => {
        loader.style.display = 'none';
        main.classList.add('init');
      }, 600);

      body.style.overflow = '';
      window.removeEventListener('keydown', onKeydown);
      loader.removeEventListener('click', closeLoader);
    };

    loaderInit();

    loader.addEventListener('click', closeLoader);
    window.addEventListener('keydown', onKeydown);
  }

  if (main) {
    let openSidePanel = (evt) => {
      if (!evt.target.classList.contains('main__text-wrapper')) {
        sidePanel.classList.add('active');
        body.style.cssText = 'height: 100vh; overflow: hidden;';
      } else {
        sidePanel.classList.remove('active');
        body.style.cssText = '';
      }
    };

    window.addEventListener('resize', () => {
      if (window.matchMedia(viewportMd).matches) {
        main.addEventListener('click', openSidePanel);
      } else {
        main.removeEventListener('click', openSidePanel);
        sidePanel.classList.remove('active');
        body.style.cssText = '';
      }
    });

    if (window.matchMedia(viewportMd).matches) {
      main.addEventListener('click', openSidePanel);
    }
  }
};

export {animations};
