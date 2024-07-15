// Styles
import { container } from "./index.css";

// ====================================================================================

type IContainer = {
  children: React.ReactNode;
  styleOverrides?: React.CSSProperties;
};

const Container: React.FC<IContainer> = ({ children, styleOverrides = {} }) => {
  return (
    <div className={container} style={styleOverrides}>
      {children}
    </div>
  );
};

export default Container;
