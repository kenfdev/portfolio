import { FC } from 'react';
import { styled } from '../../../styles/stitches';
import { Box } from '../../general/Box';
import { LevelDescription } from './Skills';

type Props = {
  className?: string;
  data: LevelDescription[];
};

export const LevelDescriptions: FC<Props> = ({ data, className }) => {
  return (
    <Box css={{ fontSize: '0.8rem' }} className={className}>
      <ul>
        {data.map((v) => (
          <ListItem key={v.level}>{`${v.level}: ${v.description}`}</ListItem>
        ))}
      </ul>
    </Box>
  );
};

const ListItem = styled('li', {
  display: 'inline-block',
  marginRight: '0.5rem',
});
