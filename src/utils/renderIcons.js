import React from 'react';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { RiContactsFill } from 'react-icons/ri';
import { BsTelephoneFill } from 'react-icons/bs';
import { RiEdit2Fill } from 'react-icons/ri';
import { RiLock2Fill } from 'react-icons/ri';
import { MdMail } from 'react-icons/md';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { ImCancelCircle } from 'react-icons/im';
import { GiConfirmed } from 'react-icons/gi';
import { FaRegSadCry } from 'react-icons/fa';
import { BsFillStarFill } from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiGroupFill } from 'react-icons/ri';
import { AiFillHome } from 'react-icons/ai';
import { FaSortAlphaDown } from 'react-icons/fa';
import { FaSortAlphaDownAlt } from 'react-icons/fa';
import { FaSortNumericDown } from 'react-icons/fa';
import { FaSortNumericDownAlt } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import { FaRegCircle } from 'react-icons/fa';
import { MdSettingsBackupRestore } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import { MdPersonSearch } from 'react-icons/md';
import { MdSort } from 'react-icons/md';
import { IoIosCreate } from 'react-icons/io';
import { BsPersonFill } from 'react-icons/bs';
import { RiCloseLine } from 'react-icons/ri';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { MdGroupAdd } from 'react-icons/md';
import { ImInfo } from 'react-icons/im';
import { BsPencilFill } from 'react-icons/bs';
import { BiSelectMultiple } from 'react-icons/bi';
import { MdOutlineMerge } from 'react-icons/md';
import { ICON_NAMES } from 'constants';

const icons = {
  [ICON_NAMES.ADD]: <MdPersonAddAlt1 />,
  [ICON_NAMES.ALPHA_DOWN]: <FaSortAlphaDown />,
  [ICON_NAMES.ALPHA_UP]: <FaSortAlphaDownAlt />,
  [ICON_NAMES.BACK_ARROW]: <IoIosArrowRoundBack />,
  [ICON_NAMES.CANCEL]: <ImCancelCircle />,
  [ICON_NAMES.CHECK]: <FiCheck className="user-form__icon" />,
  [ICON_NAMES.CLOSE]: <RiCloseLine />,
  [ICON_NAMES.CONFIRM]: <GiConfirmed />,
  [ICON_NAMES.CONTACT]: <RiContactsBook2Fill />,
  [ICON_NAMES.CREATE]: <IoIosCreate />,
  [ICON_NAMES.DATE_DOWN]: <FaSortNumericDownAlt />,
  [ICON_NAMES.DATE_UP]: <FaSortNumericDown />,
  [ICON_NAMES.DELETE]: <RiDeleteBin6Fill />,
  [ICON_NAMES.DOTS]: <BsThreeDotsVertical />,
  [ICON_NAMES.DROP_DOWN]: <MdOutlineArrowDropDown />,
  [ICON_NAMES.EDIT]: <RiEdit2Fill />,
  [ICON_NAMES.EMAIL]: <MdMail className="user-form__icon" />,
  [ICON_NAMES.ERROR]: <FaRegSadCry />,
  [ICON_NAMES.FAVORITE]: <BsFillStarFill />,
  [ICON_NAMES.GROUP]: <RiGroupFill />,
  [ICON_NAMES.GROUP_ADD]: <MdGroupAdd />,
  [ICON_NAMES.HOME]: <AiFillHome />,
  [ICON_NAMES.INFO]: <ImInfo />,
  [ICON_NAMES.LOG_OUT]: <FiLogOut />,
  [ICON_NAMES.LOCK]: <RiLock2Fill className="user-form__icon" />,
  [ICON_NAMES.MAN]: <BsPersonFill />,
  [ICON_NAMES.MERGE]: <MdOutlineMerge />,
  [ICON_NAMES.MULTI_SELECT]: <BiSelectMultiple />,
  [ICON_NAMES.NUMBER]: <BsTelephoneFill />,
  [ICON_NAMES.PENCIL]: <BsPencilFill />,
  [ICON_NAMES.PERSON]: <RiContactsFill className="user-form__icon" />,
  [ICON_NAMES.PROFILE]: <BsPerson />,
  [ICON_NAMES.QUICK_SEARCH]: <MdPersonSearch />,
  [ICON_NAMES.REMOVE]: <RiDeleteBin6Fill />,
  [ICON_NAMES.RESTORE]: <MdSettingsBackupRestore />,
  [ICON_NAMES.SETTINGS]: <FiSettings />,
  [ICON_NAMES.SORT]: <MdSort />,
  [ICON_NAMES.UNCHECK]: <FaRegCircle className="unCheck__icon" />,
};

export const renderIcons = (name, size) => {
  const icon = icons[name];
  if (icon) {
    return React.cloneElement(icon, { size });
  }
  return <span>icon</span>;
};
