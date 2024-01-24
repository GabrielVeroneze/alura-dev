import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '@/pages/Layout'
import EditorDeCodigo from '@/pages/EditorDeCodigo'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<EditorDeCodigo />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
