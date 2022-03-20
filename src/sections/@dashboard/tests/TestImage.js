// material
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
//
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  width: '240px',
  height: '240px',
  boxShadow: 'none',
  textAlign: 'left',
  padding: theme.spacing(2, 2),
  color: '#409AE9',
  backgroundColor: '#D6EBFC',
  cursor: 'pointer'
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: '60px',
  height: '60px',
  justifyContent: 'center',
  color: '#409AE9',
  position: 'absolute',
  bottom: '1px',
  right: '10px',
  opacity: '.5'
}));

// ----------------------------------------------------------------------

export default function TestImage() {
  return (
    <RootStyle>
      <Typography variant="h4">Прикрепить скриншот</Typography>
      <IconWrapperStyle>
        <Iconify icon="bxs:image-alt" width={60} height={60} />
      </IconWrapperStyle>
    </RootStyle>
  );
}
