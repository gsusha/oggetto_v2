import { Box, Container, Typography } from '@mui/material';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';

export default function TestDetail() {
  function copyLink(link) {
    navigator.clipboard.writeText(link);
  }

  const getIcon = (name) => (
    <Iconify icon={name} style={{ color: '#efb900', cursor: 'pointer' }} width={28} height={28} />
  );

  return (
    <Page title="Тест">
      <Container>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h4" gutterBottom style={{ marginRight: 10 }}>
            Тест на джуна 02.03
          </Typography>
          <Box onClick={() => copyLink('тестовая линка, поменять')}>
            {getIcon('akar-icons:link-on')}
          </Box>
        </Box>

        <Typography variant="subtitle2" gutterBottom>
          Frontend, Junior
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          1ч 30м
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
          Тест на знание основных вещей
        </Typography>
      </Container>
    </Page>
  );
}
