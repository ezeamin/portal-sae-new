import { useSelector } from 'react-redux';

import Header from '../../components/Commons/Header/Header';
import ModuleList from '../../components/Home/Modules/ModuleList';

import profileModules from './profileModules';

const Profile = () => {
  const user = useSelector((state) => state.globalData.user);

  return (
    <>
      <Header user={user} page='PROFILE' />
      <ModuleList modules={profileModules} />
    </>
  );
};

export default Profile;
