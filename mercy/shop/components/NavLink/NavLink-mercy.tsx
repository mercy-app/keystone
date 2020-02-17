import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Link as RRLink } from 'react-router-dom';

import { withRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';

type NavLinkProps = {
  router: any;
  href: string;
  label: string;
  intlId?: string;
  icon?: React.ReactNode;
  className?: string;
  iconClass?: string;
  onClick?: () => void;
  clientApp?: boolean;
};

const Icon = styled.span`
  min-width: 16px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLink: React.SFC<NavLinkProps> = ({
  href,
  label,
  intlId,
  // router: { pathname },
  icon,
  className,
  onClick,
  iconClass,
  clientApp,
  ...rest
}) => {
  let pathname;
  if (!clientApp) {
    pathname = rest.router.pathname;
  } else {
    pathname = window.location.pathname;
  }

  return (
    <div onClick={onClick} className={className ? className : ''}>
      {!clientApp ? (
        <Link href={href}>
          <a
            className={pathname === href ? ' current-page' : ''}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            {icon ? <Icon className={iconClass}>{icon}</Icon> : ''}

            <span className="label">
              {intlId ? (
                <FormattedMessage
                  id={intlId ? intlId : 'defaultNavLinkId'}
                  defaultMessage={label}
                />
              ) : (
                label
              )}
            </span>
          </a>
        </Link>
      ) : (
        <RRLink
          to={'/admin' + href}
          className={pathname === href ? ' current-page' : ''}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          {icon ? <Icon className={iconClass}>{icon}</Icon> : ''}
          <span className="label">
            {intlId ? (
              <FormattedMessage id={intlId ? intlId : 'defaultNavLinkId'} defaultMessage={label} />
            ) : (
              label
            )}
          </span>
        </RRLink>
      )}
    </div>
  );
};

export default withRouter(NavLink);