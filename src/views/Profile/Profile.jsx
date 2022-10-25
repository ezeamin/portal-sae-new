import { useSelector } from 'react-redux';

import Header from '../../components/Commons/Header/Header';
import { ModuleList, ProfileForm } from '../../components';

import modules from '../../constants/modules';
import viewList from './data/viewList';

const Profile = (props) => {
  const user = useSelector((state) => state.globalData.user);

  const { view } = props;

  let renderedComp;

  switch (view) {
    case viewList.MAIN: {
      renderedComp = <ModuleList modules={modules.PROFILE} />;
      break;
    }
    case viewList.FORM: {
      renderedComp = <ProfileForm />;
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
    </>
  );
};

export default Profile;
