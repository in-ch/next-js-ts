import Head from "next/head";


type TitleProps = {
    title:HTMLHeadElement | String;
};

const Seo = ({title}:TitleProps) => {
    return <>
        <Head>
            <title>{title}</title>
        </Head>
    </>
};

export default Seo;