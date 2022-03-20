import { Container, Typography } from '@mui/material';
import Page from '../../components/Page';

export default function TestSuccess() {
  function copyLink(link) {
    navigator.clipboard.writeText(link);
  }

  return (
    <Page title="Тест создан!">
      <Container>
        <Typography variant="h4" gutterBottom>
          Тест успешно создан!
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          Тест на джуна 02.03
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Frontend, Junior
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          1ч 30м
        </Typography>

        <Typography
          variant="subtitle1"
          gutterBottom
          onClick={() => copyLink('ola gaola')}
          color="primary.dark"
          style={{
            cursor: 'pointer'
          }}
        >
          Нажмите, чтобы скопировать ссылку
        </Typography>
      </Container>
    </Page>
  );
}
