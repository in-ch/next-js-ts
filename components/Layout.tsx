import NavBar from "./NavBar";

type Props = {
    title?: string,
};

const Layout:React.FC<Props> = ({children}) => {
    return <>
        <NavBar />
        <div>
            {children}
        </div>
    </>
};

export default Layout;