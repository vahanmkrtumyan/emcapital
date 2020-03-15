
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'


const Index = () => {
    const router = useRouter();
    React.useEffect(() => {
        router.replace('/hy')
    });
    return (
        <Head>
            <meta name="robots" content="noindex, nofollow" />
        </Head>
    )
};


export default Index
