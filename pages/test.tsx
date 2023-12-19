import { AdkContainer } from '@advisible/adk-nextjs'

export default function Test() {
    return (
        <div className="test">
            <p>Current route: /test</p>
            <AdkContainer id="my-container" />
        </div>
    )
}