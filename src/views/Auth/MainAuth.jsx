import { useEffect, useState } from "react";

import FormPanel from "./FormPanel/FormPanel";

import { Background } from "../../components"

const minSize = 900;

export const MainLogin = (props) => {

    const { view } = props;
  
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
    return (
      <>
        <FormPanel view={view} />
        {screenWidth >= minSize && <Background />}
      </>

  )
}
