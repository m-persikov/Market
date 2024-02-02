import { FC } from "react"
import { Helmet } from 'react-helmet'

import { TestDiv } from './styled'

const HomePage: FC = () => {
    return <>
        <Helmet>
            <title>Main Page</title>
        </Helmet>
        <TestDiv>wOw</TestDiv>
    </>
}

export default HomePage