import { ButtonGroup } from '@mui/material';

import { Container, StyledButton } from './CategoryButtonGroup.styles';
import { Category } from '../../types';
import { ReactNode } from 'react';

interface CategoryButtonGroupProps {
  categories: Category[];
  selectedCategory: Category | null;
  handleSelectCategory: (category: Category) => void;
}

function CategoryButtonGroup({ categories, selectedCategory, handleSelectCategory }: CategoryButtonGroupProps) {
  const categoryNodes: ReactNode[] = [];
  categories.forEach((category) => {
    categoryNodes.push(
      <StyledButton type="button" selected={false}>
        {category.name}
      </StyledButton>
    );
  });
  return (
    <Container item>
      <ButtonGroup aria-label="category button group" color="inherit">
        {categoryNodes}
      </ButtonGroup>
    </Container>
  );
}

export default CategoryButtonGroup;
