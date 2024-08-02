import { ButtonGroup } from '@mui/material';

import { Container, StyledButton } from './CategoryButtonGroup.styles';
import { Category } from '../../types';

interface CategoryButtonGroupProps {
  categories: Category[];
  selectedCategory: Category | null;
  handleSelectCategory: (category: Category) => void;
}

function CategoryButtonGroup({ categories, selectedCategory, handleSelectCategory }: CategoryButtonGroupProps) {
  return (
    <Container item>
      <ButtonGroup aria-label="category button group" color="inherit">
        <StyledButton type="button" selected={false}>
          {/* Activity 1 - Render category name */}
        </StyledButton>
        <StyledButton type="button" selected={false}>
          {/* Activity 1 - Render category name */}
        </StyledButton>
        <StyledButton type="button" selected={false}>
          {/* Activity 1 - Render category name */}
        </StyledButton>
        <StyledButton type="button" selected={false}>
          {/* Activity 1 - Render category name */}
        </StyledButton>
      </ButtonGroup>
    </Container>
  );
}

export default CategoryButtonGroup;
