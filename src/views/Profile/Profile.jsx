import { useSelector } from 'react-redux';

import Header from '../../components/Commons/Header/Header';
import Waves from '../../components/Home/Waves';

import { ModuleList, ProfileForm } from '../../components';

import { modules } from '../../constants/constants';
import viewList from './data/viewList';
import ChangePassword from '../../components/Profile/ChangePassword/ChangePassword';

const Profile = (props) => {
  const { view } = props;

  const user = useSelector((state) => state.globalData.user);

  const modulesList = Object.values(modules.PROFILE);

  let renderedComp;

  switch (view) {
    case viewList.MAIN: {
      renderedComp = <ModuleList modules={modulesList} />;
      break;
    }
    case viewList.FORM: {
      renderedComp = <ProfileForm />;
      break;
    }
    case viewList.PASS: {
      renderedComp = <ChangePassword />;
      break;
    }
    default: {
      renderedComp = <div></div>;
    }
  }

  return (
    <>
      <Header user={user} page='PROFILE' />
      {renderedComp}
      <Waves />
    </>
  );
};

export default Profile;
