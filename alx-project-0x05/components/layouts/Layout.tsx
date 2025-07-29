import { LazyCacheNode } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Header from "./Header";
import CounterApp from "@/pages/counter-app";

interface LayoutProps {
children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
       <>
        <div className="layout">
        <Header />
        </div>

        <main>
        {children}
        <CounterApp/>
        </main>

       </>
        
    );
    }
    export default Layout;