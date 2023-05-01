import { Item, IconWrap } from '../AppBenefits.styled';
import { renderIcons } from 'utils';
import { ICON_SIZES } from 'constants';
import { benefitsData } from './benefitsData';

export const renderBenefitsList = () => {
  return benefitsData.map(benefit => (
    <Item key={benefit.id} className="card">
      <div>{benefit.id}</div>
      <IconWrap>{renderIcons(benefit.icon, ICON_SIZES.MEDIUM_SMALL)}</IconWrap>
      <div>
        <h2>{benefit.title}</h2>
        <p>{benefit.description}</p>
      </div>
    </Item>
  ));
};
