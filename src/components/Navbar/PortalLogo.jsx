import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";

const PortalLogo = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={()=>navigate(routes.HOME.path)}
      style={{ marginRight: '0.5rem', height: '65px' }}
    >
      <img
        src='/assets/img/logos/logo-57.png'
        alt='Portal del SAE'
        height={45}
        width={42}
      />
    </button>
  );
};

export default PortalLogo;
