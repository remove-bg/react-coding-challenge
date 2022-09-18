type DiscoverProps = {
  name: string;
  children: React.ReactNode;
};

function Discover({ name, children }: DiscoverProps) {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">{name}</h2>
        <div className="flex space-x-4 snap-x snap-mandatory overflow-x-scroll scrollbar-hidden">
          {children}
        </div>
      </div>
    </>
  );
}

export default Discover;
