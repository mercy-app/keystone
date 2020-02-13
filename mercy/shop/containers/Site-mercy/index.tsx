import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import gql from 'graphql-tag';
import { openModal, closeModal } from '@redq/reuse-modal';
import SiteCard from 'components/SiteCard-mercy';
import {
  SitesRow,
  SitesCol,
  ButtonWrapper,
  LoaderWrapper,
  LoaderItem,
  SiteCardWrapper,
} from './Site.style-mercy';
import { CURRENCY } from 'helper/constant';
import { useQuery } from '@apollo/react-hooks';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Placeholder from 'components/Placeholder/Placeholder';
import Fade from 'react-reveal/Fade';
import NoResultFound from 'components/NoResult/NoResult';
import { withRouter } from 'react-router-dom';
import getAllUrlParams from 'helper/getAllUrlParams-mercy';
import { ProfileContext } from 'contexts/profile/profile.context';

const QuickView = dynamic(() => import('../QuickView/QuickView'));

const GET_SITE = gql`
  query getSite($id: ID!) {
    Site(where: { id: $id }) {
      id
      title
      description
    }
    # hasMore
  }
`;

type SitesProps = {
  // deviceType?: {
  //   mobile: boolean;
  //   tablet: boolean;
  //   desktop: boolean;
  // };
  // type: string;
  // fetchLimit?: number;
  // loadMore?: boolean;
  clientApp?: boolean;
  // location?: any;
};
export const Site: React.FC<SitesProps> = ({
  // deviceType,
  // type,
  // fetchLimit = 8,
  // loadMore = true,
  clientApp,
  // location,
  ...rest
}) => {
  let pathname;

  if (!clientApp) {
    pathname = useRouter();
  } else {
    pathname = window.location.pathname;
    pathname = pathname.split('/')[pathname.split('/').length - 1];
  }

  // const { state, dispatch } = useContext(ProfileContext);
  const [loadingMore, toggleLoading] = useState(false);
  const { data, error, loading, fetchMore } = useQuery(GET_SITE, {
    variables: {
      id: pathname,
    },
  });

  // Quick View Modal
  // const handleModalClose = () => {
  //   const href = `${router.pathname}`;
  //   const as = '/';
  //   router.push(href, as, { shallow: true });
  //   closeModal();
  // };
  // const handleQuickViewModal = React.useCallback(
  //   (modalProps: any, deviceType: any, onModalClose: any) => {
  //     if (router.pathname === '/Site/[slug]') {
  //       const as = `/Site/${modalProps.slug}`;
  //       router.push(router.pathname, as);
  //       return;
  //     }
  //     openModal({
  //       show: true,
  //       overlayClassName: 'quick-view-overlay',
  //       closeOnClickOutside: false,
  //       component: QuickView,
  //       componentProps: { modalProps, deviceType, onModalClose },
  //       closeComponent: 'div',
  //       config: {
  //         enableResizing: false,
  //         disableDragging: true,
  //         className: 'quick-view-modal',
  //         width: 900,
  //         y: 30,
  //         height: 'auto',
  //         transition: {
  //           mass: 1,
  //           tension: 0,
  //           friction: 0,
  //         },
  //       },
  //     });
  //     const href = `${router.pathname}?${modalProps.slug}`;
  //     const as = `/Site/${modalProps.slug}`;
  //     router.push(href, as, { shallow: true });
  //   },
  //   []
  // );

  if (loading) {
    return (
      <LoaderWrapper>
        <LoaderItem>
          <Placeholder />
        </LoaderItem>
        <LoaderItem>
          <Placeholder />
        </LoaderItem>
        <LoaderItem>
          <Placeholder />
        </LoaderItem>
      </LoaderWrapper>
    );
  }

  if (error) return <div>{error.message}</div>;
  if (!data || !data.site) {
    return <NoResultFound />;
  }
  // const handleLoadMore = () => {
  //   toggleLoading(true);
  //   fetchMore({
  //     variables: {
  //       offset: Number(data.allSites.length),
  //       limit: fetchLimit,
  //     },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       toggleLoading(false);
  //       if (!fetchMoreResult) {
  //         return prev;
  //       }
  //       return {
  //         Sites: {
  //           __typename: prev.Sites.__typename,
  //           items: [...prev.Sites, ...fetchMoreResult.Sites],
  //           hasMore: fetchMoreResult.Sites.hasMore,
  //         },
  //       };
  //     },
  //   });
  // };

  return <>a</>;
};

export default props => {
  if (!props.clientApp) {
    return <Site {...props} />;
  } else {
    const SitesWrapper = withRouter(routerProps => <Site {...routerProps} {...props} />);
    return <SitesWrapper />;
  }
};
