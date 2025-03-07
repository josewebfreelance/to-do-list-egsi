import {AppRoutes, AppTheme} from "./config";
import {Toaster} from "react-hot-toast";

export const EntryPointApp = () => {
  return (
      <AppTheme>
        <AppRoutes/>
          <Toaster position={'bottom-center'}/>
      </AppTheme>
  );
};
