type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="text-fleks-dark">
      <header>
        <h1 className="py-6 text-3xl font-bold text-center text-white bg-fleks-dark">
          Birthdays
        </h1>
      </header>
      {children}
    </div>
  );
}

export default MainLayout;
