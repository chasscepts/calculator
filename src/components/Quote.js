import AppHeader from './AppHeader';

const quote = 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. – William Paul Thurston';

export default function Quote() {
  return (
    <>
      <AppHeader />
      <p className="content">{quote}</p>
    </>
  );
}
