import { useMemo } from 'react'

import { withYMaps, YMaps } from 'react-yandex-maps'

import MainComponent from './components/MainComponent'
import { queryConfig } from './config'


function App() {
    // идея - обернуть все приложение в обертку для получения доступа к геопоиску и suggest не через CDN !TODO:
    const WithYmapsWrapper = useMemo(() => {
        return withYMaps(MainComponent, true, [
            "SuggestView",
            "geocode"
        ])
    }, [])

    return (
        <YMaps query={queryConfig}>
            <WithYmapsWrapper />
        </YMaps>
    )
}

export default App
