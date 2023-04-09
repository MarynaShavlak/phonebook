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

export function renderIcons(param, size) {
  switch (param) {
    case 'contact':
      return <RiContactsBook2Fill size={size} />;
    case 'add':
      return <MdPersonAddAlt1 size={size} />;
    case 'delete':
      return <RiDeleteBin6Fill size={size} />;
    case 'remove':
      return <RiDeleteBin2Fill size={size} />;
    case 'person':
      return <RiContactsFill size={size} className="user-form__icon" />;
    case 'lock':
      return <RiLock2Fill size={size} className="user-form__icon" />;
    case 'check':
      return <FiCheck size={size} className="user-form__icon" />;
    case 'unCheck':
      return <FaRegCircle size={size} className="unCheck__icon" />;
    case 'email':
      return <MdMail size={size} className="user-form__icon" />;
    case 'number':
      return <BsTelephoneFill size={size} className="contact-form__icon" />;
    case 'man':
      return <BsPersonFill size={size} className="contact-form__icon" />;
    case 'edit':
      return <RiEdit2Fill size={size} className="contact-form__icon" />;
    case 'restore':
      return (
        <MdSettingsBackupRestore size={size} className="contact-form__icon" />
      );
    case 'cancel':
      return <ImCancelCircle size={size} className="contact-form__icon" />;
    case 'confirm':
      return <GiConfirmed size={size} className="contact-form__icon" />;
    case 'error':
      return <FaRegSadCry size={size} className="contact-form__icon" />;
    case 'favorite':
      return <BsFillStarFill size={size} className="contact-form__icon" />;
    case 'group':
      return <RiGroupFill size={size} className="contact-form__icon" />;
    case 'home':
      return <AiFillHome size={size} className="contact-form__icon" />;
    case 'alphaDown':
      return <FaSortAlphaDown size={size} className="contact-form__icon" />;
    case 'alphaUp':
      return <FaSortAlphaDownAlt size={size} className="contact-form__icon" />;
    case 'dateDown':
      return (
        <FaSortNumericDownAlt size={size} className="contact-form__icon" />
      );
    case 'dateUp':
      return <FaSortNumericDown size={size} className="contact-form__icon" />;
    case 'logOut':
      return <FiLogOut size={size} className="contact-form__icon" />;
    case 'settings':
      return <FiSettings size={size} className="contact-form__icon" />;
    case 'profile':
      return <BsPerson size={size} className="contact-form__icon" />;
    case 'dropDown':
      return (
        <MdOutlineArrowDropDown size={size} className="contact-form__icon" />
      );
    case 'quickSearch':
      return <MdPersonSearch size={size} className="contact-form__icon" />;
    case 'sort':
      return <MdSort size={size} className="contact-form__icon" />;
    case 'create':
      return <IoIosCreate size={size} className="contact-form__icon" />;
    case 'close':
      return <RiCloseLine size={size} className="contact-form__icon" />;
    case 'back':
      return <IoIosArrowRoundBack size={size} className="contact-form__icon" />;
    case 'addGroup':
      return <MdGroupAdd size={size} className="contact-form__icon" />;
    case 'dots':
      return <BsThreeDotsVertical size={size} className="contact-form__icon" />;
    case 'info':
      return <ImInfo size={size} className="contact-form__icon" />;
    default:
      return <span>icon</span>;
  }
}
