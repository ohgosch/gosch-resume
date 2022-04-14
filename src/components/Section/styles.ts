import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { mobile, tabletDesktop } from 'visual/medias';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mobile(css`
    gap: ${rem(36)};
  `)}

  ${tabletDesktop(css`
    gap: ${rem(50)};
  `)}
`;

export const Content = styled.div`
  width: 100%;
`;
