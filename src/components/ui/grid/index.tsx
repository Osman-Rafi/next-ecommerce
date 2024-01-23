import React from 'react';
import clsx from 'clsx';

const Grid = (props: React.ComponentProps<'ul'>) => (
  <ul
    {...props}
    className={clsx('grid gap-4 grid-flow-row', props.className)}
  >
    {props.children}
  </ul>
);

const GridItem = (props: React.ComponentProps<'li'>) => (
  <li
    {...props}
    className={clsx(props.className)}
  >
    {props.children}
  </li>
);

Grid.Item = GridItem;

export default Grid;
