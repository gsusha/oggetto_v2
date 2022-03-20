import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';
import Iconify from './Iconify';

export default function AddBtn() {
  const getIcon = (name) => <Iconify icon={name} width={28} height={28} />;

  return (
    <Button
      to="new"
      component={RouterLink}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: '#FFED00',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        cursor: 'pointer',
        padding: 0,
        minWidth: 'unset',
        color: '#000'
      }}
    >
      {getIcon('akar-icons:plus')}
    </Button>
  );
}
