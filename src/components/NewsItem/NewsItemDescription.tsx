import styled from 'styled-components';

import Typography from '../../layouts/Typography';

export const NewsItemDescriptionSkeleton = styled.p`
  ${Typography('body', 1.4)};
  margin: 8px 0;

  white-space: pre-line;
  word-break: keep-all;
`;

export const NewsItemDescriptionText = styled(NewsItemDescriptionSkeleton)`
  height: 6.3rem;
  overflow: hidden;
`;
