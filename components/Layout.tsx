import NavBar from "./NavBar";

type Props = {
    title?: string,
};

export const Layout:React.FC<Props> = ({children}) => {
    return <>
        <NavBar />
        <div>
            {children}
        </div>
    </>
}