import React from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'components/Image/Image';
import { SiteCardWrapper, SiteImageWrapper, SiteInfo } from './SiteCard.style';

type SiteCardProps = {
  title: string;
  image: any;
  description: string;
  data: any;
  onClick?: (e: any) => void;
};

const SiteCard: React.FC<SiteCardProps> = ({ title, image, data, onClick, ...props }) => {
  return (
    <SiteCardWrapper onClick={onClick} className="Site-card">
      <SiteImageWrapper>
        <Image url={image} className="Site-image" style={{ position: 'relative' }} alt={title} />
      </SiteImageWrapper>
      <SiteInfo>
        <h3 className="Site-title">{title}</h3>
      </SiteInfo>
    </SiteCardWrapper>
  );
};

export default SiteCard;
