import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { BannerContent, BannerTitle, Container } from './Banner.styles';

// ACT 3 - Receive postImage and postTitle props
function Banner() {
  return (
    <Container image={''}>
      {/* ACT 3 - Send postImage as image prop to Container component */}
      <BannerContent>
        <Button sx={{ color: 'white' }} startIcon={<ArrowBackIosIcon />}>
          View Posts
        </Button>
        <BannerTitle variant="h3">{/* ACT 1 - Render postTitle */}</BannerTitle>
      </BannerContent>
    </Container>
  );
}

export default Banner;
