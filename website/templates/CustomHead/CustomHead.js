// CustomHead.js
import Head from 'next/head';

const CustomHead = ({ title, description,canonicalUrl,keywords,otherMetaTags}) => {
    console.log(" title, description, otherMetaTags,canonicalUrl,keywords", title, description, otherMetaTags,canonicalUrl,keywords)
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            
            <link
                rel="canonical"
                href={canonicalUrl}
                key="canonical"
            />
            <meta name="keywords" content={keywords} />
            {
                otherMetaTags
                ?
                    otherMetaTags
                :
                    null
            }
        </Head>
    );
};


export default CustomHead;
