import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '@/pages/Layout'
import EditorDeCodigo from '@/pages/EditorDeCodigo'
import Comunidade from '@/pages/Comunidade'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<EditorDeCodigo />} />
                    <Route path="comunidade" element={<Comunidade />} />
                    <Route path="editar/:id" element={<EditorDeCodigo />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
