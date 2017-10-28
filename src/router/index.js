import HelloWorld from '@/components/HelloWorld';

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: HelloWorld,
  },
  {
    path: '/:codigoEscola',
    name: 'Hello',
    component: HelloWorld,
  },
];

export default routes;
