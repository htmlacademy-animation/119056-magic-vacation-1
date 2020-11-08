export default () => {
  const showButtonAfterLastRulesItem = () => {
    const rulesLink = document.querySelector(`.rules__link`);
    rulesLink.classList.add(`rules__link--visible`);
  };
  const lastRulesItem = document.querySelector(`.rules__item:last-child p`);
  lastRulesItem.addEventListener(`animationstart`, showButtonAfterLastRulesItem, false);
};
