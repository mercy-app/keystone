import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import gql from 'graphql-tag';
import { openModal, closeModal } from '@redq/reuse-modal';
import SiteCard from 'components/SiteCard-mercy';
import { LoaderWrapper, LoaderItem } from './Site.style-mercy';
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
import Board, { addCard, moveCard } from 'react-board';
import { CreateItemModal } from '@keystonejs/app-admin-ui/client-mercy';
import { useList } from '@keystonejs/app-admin-ui/components';

const QuickView = dynamic(() => import('../QuickView/QuickView'));
const getBoard = () => {
  return new Promise((resolve, reject) => {
    resolve(originalBoard);
  });
};
const originalBoard = {
  columns: [
    {
      id: 1,
      title: 'Backlog',
      cards: [
        {
          id: 1,
          title: 'Card title 1',
          description: 'Card content',
        },
        {
          id: 2,
          title: 'Card title 2',
          description: 'Card content',
        },
        {
          id: 3,
          title: 'Card title 3',
          description: 'Card content',
        },
      ],
    },
    {
      id: 2,
      title: 'Doing',
      cards: [
        {
          id: 9,
          title: 'Card title 9',
          description: 'Card content',
        },
      ],
    },
    {
      id: 3,
      title: 'Q&A',
      cards: [
        {
          id: 10,
          title: 'Card title 10',
          description: 'Card content',
        },
        {
          id: 11,
          title: 'Card title 11',
          description: 'Card content',
        },
      ],
    },
    {
      id: 4,
      title: 'Production',
      cards: [
        {
          id: 12,
          title: 'Card title 12',
          description: 'Card content',
        },
        {
          id: 13,
          title: 'Card title 13',
          description: 'Card content',
        },
      ],
    },
  ],
};

const GET_SITE = gql`
  query getSite($id: ID!) {
    Site(where: { id: $id }) {
      id
      title
      description
      pages {
        id
        title
        description
        sections {
          id
          title
          description
        }
      }
    }
    # hasMore
  }
`;

type SitesProps = {
  clientApp?: boolean;
};
export const Site: React.FC<SitesProps> = ({ clientApp, ...rest }) => {
  let pathname;
  const [board, setBoard] = useState(null);
  const { list, openCreateItemModal } = useList();

  if (!clientApp) {
    pathname = useRouter();
  } else {
    pathname = window.location.pathname;
    pathname = pathname.split('/')[pathname.split('/').length - 1];
  }

  const { data, error, loading, fetchMore } = useQuery(GET_SITE, {
    variables: {
      id: pathname,
    },
  });

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
  if (!data || !data.Site) {
    return <NoResultFound />;
  } else {
    if (!board) {
      const columns = data.Site.pages;
      for (let index = 0; index < columns.length; index++) {
        columns[index].cards = [...columns[index].sections];
      }
      columns.splice(0, 0, {
        id: 123,
        title: 'tools',
        description: 'description',
        cards: [{ id: 222, title: 'card tool', description: 'description' }],
      });
      setBoard({
        columns,
      });
    } else {
      return (
        <>
          <Board
            allowRemoveLane
            allowRenameColumn
            allowRemoveCard
            onLaneRemove={console.log}
            onCardRemove={console.log}
            onLaneRename={console.log}
            onCardDragEnd={(card, source, destination) => {
              if (destination.toColumnId != 123) {
                let newBoard = moveCard(board, source, destination);
                if (source.fromColumnId === 123) {
                  const tool = JSON.parse(JSON.stringify(card));
                  card.id = card.id + Math.random().toString();
                  newBoard.columns[0].cards.push(tool);
                }
                console.log(newBoard);
                setBoard(newBoard);
                openCreateItemModal();
              }
            }}
          >
            {board}
          </Board>
          <CreateItemModal />
        </>
      );
    }
  }
};

export default props => {
  if (!props.clientApp) {
    return <Site {...props} />;
  } else {
    const SitesWrapper = withRouter(routerProps => <Site {...routerProps} {...props} />);
    return <SitesWrapper />;
  }
};
