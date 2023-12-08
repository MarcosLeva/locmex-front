import { Book, LogOut, Settings, X } from "lucide-react";
import HeaderIcon from "./HeaderIcon";

type Props = {
  handleSidebar: () => void;
};

const SidebarHeader: React.FC<Props> = ({ handleSidebar }) => {
  return (
    <header className="bg-slate-900 h-16 flex justify-between">
      <div className="p-4 flex justify-center items-center">
        <img src="assets/logo.png" alt="logo" className="w-32" />
      </div>
      <div className="flex gap-2 items-center pr-2">
        <HeaderIcon tooltip="Aviso de privacidad">
          <Book className="h-5 w-5" />
        </HeaderIcon>

        <HeaderIcon tooltip="Configuración">
          <Settings className="h-5 w-5" />
        </HeaderIcon>

        <HeaderIcon tooltip="Cerrar sesión">
          <LogOut className="h-5 w-5" />
        </HeaderIcon>

        <HeaderIcon tooltip="Cerrar" onClick={handleSidebar}>
          <X className="h-5 w-5" />
        </HeaderIcon>
      </div>
    </header>
  );
};
export default SidebarHeader;
