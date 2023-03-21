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
