import Header from "./Header";
import MainRoutes from "./MainRoutes";

import '../index.css';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Header />
      <main className="main">
        <MainRoutes />
      </main>
    </div>
  );
};
