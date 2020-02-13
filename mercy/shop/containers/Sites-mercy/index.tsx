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
} from './Sites.style-mercy';
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

const GET_SITES = gql`
  query getSites($email: String) {
    allSites(where: { OR: [{ user: { email: $email } }] }) {
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
  // clientApp?: boolean;
  // location?: any;
};
export const Sites: React.FC<SitesProps> = (
  {
    // deviceType,
    // type,
    // fetchLimit = 8,
    // loadMore = true,
    // clientApp,
    // location,
  }
) => {
  const { state, dispatch } = useContext(ProfileContext);
  const [loadingMore, toggleLoading] = useState(false);
  const { data, error, loading, fetchMore } = useQuery(GET_SITES, {
    variables: {
      email: state.email,
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
  if (!data || !data.allSites || data.allSites.length === 0) {
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

  return (
    <>
      <SitesRow>
        {data.allSites.map((item: any, index: number) => (
          <SitesCol key={index}>
            <SiteCardWrapper>
              <Fade duration={800} delay={index * 10} style={{ height: '100%' }}>
                <SiteCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  data={item}
                  onClick={() => {}}
                />
              </Fade>
            </SiteCardWrapper>
          </SitesCol>
        ))}
      </SitesRow>
    </>
  );
};

export default props => {
  if (!props.clientApp) {
    return <Sites {...props} />;
  } else {
    const SitesWrapper = withRouter(routerProps => <Sites {...routerProps} {...props} />);
    return <SitesWrapper />;
  }
};
