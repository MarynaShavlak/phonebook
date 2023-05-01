import React from 'react';
import { BenefitsList } from './AppBenefits.styled';
import { renderBenefitsList } from './helpers/renderBenefitsList';

export const AppBenefits = () => {
  return <BenefitsList>{renderBenefitsList()}</BenefitsList>;
};
