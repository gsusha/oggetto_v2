import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Iconify from './Iconify';

AddBtn.propTypes = {
  path: PropTypes.string
};

export default function AddBtn({ path, ...other }) {
  const getIcon = (name) => <Iconify icon={name} width={28} height={28} />;

  return (
    <div
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
        cursor: 'pointer'
      }}
    >
      {getIcon('akar-icons:plus')}
    </div>
  );
}
