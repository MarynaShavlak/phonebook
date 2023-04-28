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
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { ImInfo } from 'react-icons/im';
import { BsPencilFill } from 'react-icons/bs';
import { ICON_NAMES } from 'constants';

const icons = {
  [ICON_NAMES.ADD]: <MdPersonAddAlt1 />,
  [ICON_NAMES.ALPHA_DOWN]: <FaSortAlphaDown className="contact-form__icon" />,
  [ICON_NAMES.ALPHA_UP]: <FaSortAlphaDownAlt className="contact-form__icon" />,
  [ICON_NAMES.BACK_ARROW]: (
    <IoIosArrowRoundBack className="contact-form__icon" />
  ),
  [ICON_NAMES.CANCEL]: <ImCancelCircle className="contact-form__icon" />,
  [ICON_NAMES.CHECK]: <FiCheck className="user-form__icon" />,
  [ICON_NAMES.CLOSE]: <RiCloseLine className="contact-form__icon" />,
  [ICON_NAMES.CONFIRM]: <GiConfirmed className="contact-form__icon" />,
  [ICON_NAMES.CONTACT]: <RiContactsBook2Fill />,
  [ICON_NAMES.CREATE]: <IoIosCreate className="contact-form__icon" />,
  [ICON_NAMES.DATE_DOWN]: (
    <FaSortNumericDownAlt className="contact-form__icon" />
  ),
  [ICON_NAMES.DATE_UP]: <FaSortNumericDown className="contact-form__icon" />,
  [ICON_NAMES.DELETE]: <RiDeleteBin6Fill />,
  [ICON_NAMES.DOTS]: <BsThreeDotsVertical className="contact-form__icon" />,
  [ICON_NAMES.DROP_DOWN]: (
    <MdOutlineArrowDropDown className="contact-form__icon" />
  ),
  [ICON_NAMES.EDIT]: <RiEdit2Fill className="contact-form__icon" />,
  [ICON_NAMES.EMAIL]: <MdMail className="user-form__icon" />,
  [ICON_NAMES.ERROR]: <FaRegSadCry className="contact-form__icon" />,
  [ICON_NAMES.FAVORITE]: <BsFillStarFill className="contact-form__icon" />,
  [ICON_NAMES.GROUP]: <RiGroupFill className="contact-form__icon" />,
  [ICON_NAMES.GROUP_ADD]: <MdGroupAdd className="contact-form__icon" />,
  [ICON_NAMES.HOME]: <AiFillHome className="contact-form__icon" />,
  [ICON_NAMES.INFO]: <ImInfo className="contact-form__icon" />,
  [ICON_NAMES.LOG_OUT]: <FiLogOut className="contact-form__icon" />,
  [ICON_NAMES.LOCK]: <RiLock2Fill className="user-form__icon" />,
  [ICON_NAMES.MAN]: <BsPersonFill className="contact-form__icon" />,
  [ICON_NAMES.NUMBER]: <BsTelephoneFill className="contact-form__icon" />,
  [ICON_NAMES.PENCIL]: <BsPencilFill className="contact-form__icon" />,
  [ICON_NAMES.PERSON]: <RiContactsFill className="user-form__icon" />,
  [ICON_NAMES.PROFILE]: <BsPerson className="contact-form__icon" />,
  [ICON_NAMES.QUICK_SEARCH]: <MdPersonSearch className="contact-form__icon" />,
  [ICON_NAMES.REMOVE]: <RiDeleteBin2Fill />,
  [ICON_NAMES.RESTORE]: (
    <MdSettingsBackupRestore className="contact-form__icon" />
  ),
  [ICON_NAMES.SETTINGS]: <FiSettings className="contact-form__icon" />,
  [ICON_NAMES.SORT]: <MdSort className="contact-form__icon" />,
  [ICON_NAMES.UNCHECK]: <FaRegCircle className="unCheck__icon" />,
};

export const renderIcons = (name, size) => {
  const icon = icons[name];
  if (icon) {
    return React.cloneElement(icon, { size });
  }
  return <span>icon</span>;
};
