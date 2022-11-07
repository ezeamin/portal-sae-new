import { useSelector } from 'react-redux';

import { ModuleList, ProfileForm } from '../../components';

import ChangePassword from '../../components/Profile/ChangePassword/ChangePassword';
import Header from '../../components/Commons/Header/Header';
import Waves from '../../components/Home/Waves';

import viewList from '../../constants/views/viewList';

import { profileModulesArray } from '../../constants/Routing/routes';

const Profile = (props) => {
  const { view } = props;

  const user = useSelector((state) => state.globalData.user);

  // Pseudo Router para navegacion por perfil 
  let renderedComp;
  switch (view) {
    case viewList.MAIN: {
      renderedComp = <ModuleList modules={profileModulesArray} />;
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
