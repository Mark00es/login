import Home from '@/pages/Home';
import Login from '@/pages/Login';
import NotFoundPage from '@/pages/NotFound';
import { BrowserRouter, Outlet, Route, Routes, useParams, useSearchParams, Navigate } from 'react-router';

export const RouterProviderPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Auth validation={false} />}>
          <Route index element={<Pagina title="Componente NUMERO 1" />} />
          <Route path="update/:id?" element={<ComponentUpdate title="Update componente" />} />

          <Route path="create" element={<Header title="Usuarios" />}>
            <Route index element={<Pagina title="post componente" />} />
            <Route path="post" index element={<Pagina title="post componente" />} />
          </Route>

          <Route path="delete" element={<Pagina title="delete componente" />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const Header = ({ title }: { title: string }) => {
  return (
    <div>
      <h1>Header {title}</h1>
      <Outlet />
    </div>
  );
};

const Auth = ({ validation }: { validation: boolean }) => {
  return validation ? <Outlet /> : <Navigate to="/login" />;
};

const Pagina = ({ title }: { title: string }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

const ComponentUpdate = ({ title }: { title: string }) => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <h1>{title}</h1>
      <p>{id}</p>
      <p>{searchParams.get('name')}</p>
    </div>
  );
};
