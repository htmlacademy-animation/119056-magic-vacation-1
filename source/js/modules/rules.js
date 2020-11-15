export default () => {
  const toggleRulesButton = (force) => {
    const rulesLink = document.querySelector(`.rules__link`);
    rulesLink.classList.toggle(`rules__link--visible`, force);
  };
  const rulesTitle = document.querySelector(`.rules__title`);
  const lastRulesItem = document.querySelector(`.rules__item:last-child p`);
  rulesTitle.addEventListener(`animationstart`, () => toggleRulesButton(false), false);
  lastRulesItem.addEventListener(`animationstart`, () => toggleRulesButton(true), false);
};
