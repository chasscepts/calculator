import AppHeader from './AppHeader';

const p = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui o!cia deserunt mollit anim id est laborum. Ipsu';

export default function Home() {
  return (
    <>
      <AppHeader />
      <div className="content">
        <h2>Welcome to our page</h2>
        <p>{p}</p>
        <p>{p}</p>
      </div>
    </>
  );
}
