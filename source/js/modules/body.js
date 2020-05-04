export default () => {
  const markBodyAsLoad = () => {
    document.body.classList.add('body-load');
    window.removeEventListener('load', markBodyAsLoad, false);
  };
  window.addEventListener('load', markBodyAsLoad, false);
};
