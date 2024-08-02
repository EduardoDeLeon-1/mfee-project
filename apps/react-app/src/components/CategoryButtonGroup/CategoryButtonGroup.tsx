import { ButtonGroup } from '@mui/material';

import { Container, StyledButton } from './CategoryButtonGroup.styles';
import { ReactNode } from 'react';

const categoryOptions = [
  {
    key: 'all',
    name: 'All'
  },
  {
    key: 'healt',
    name: 'Health'
  },
  {
    key: 'travel',
    name: 'Travel'
  },
  {
    key: 'sports',
    name: 'Sports'
  }
];

const buttons: ReactNode[] = [];

categoryOptions.forEach((category) => {
  buttons.push(
    <StyledButton type="button" selected={false}>
      {category.name}
    </StyledButton>
  );
});

function CategoryButtonGroup() {
  return (
    <Container item>
      <ButtonGroup aria-label="category button group" color="inherit">
        {buttons}
      </ButtonGroup>
    </Container>
  );
}

export default CategoryButtonGroup;
