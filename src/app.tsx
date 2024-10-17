import { useRoutes } from 'react-router-dom';
import routes from './routes';

const App = () => {
    // 함수 내부에서 JavaScript 로직을 작성
    const elem = useRoutes(routes);
    
    // JSX를 반환
    return elem;
}

export default App;
