import css from 'utils/hoverStyles.module.css';

export function addClassForHoverEffect({
  basicClass,
  isDeleteBtnHovered,
  isEditBtnHovered,
}) {
  if (!isDeleteBtnHovered && !isEditBtnHovered) {
    return;
  }

  return isDeleteBtnHovered
    ? `${basicClass} ${css.toDelete} `
    : isEditBtnHovered
    ? `${basicClass} ${css.toEdit} `
    : basicClass;
}

// export function addActiveSortOptionClass(
//   sortType,
//   isSortedByAlphabet,
//   isSortedByDate
// ) {
//   if (sortType === 'alphabet') {
//     return isSortedByAlphabet ? `active` : '';
//   }
//   if (sortType === 'date') {
//     return isSortedByDate ? `active` : '';
//   }
// }
