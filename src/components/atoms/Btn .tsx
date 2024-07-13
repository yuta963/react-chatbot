type Props = {
  name: string;
  onClick?: () => void;
};

const Btn = ({ name, onClick }: Props) => {
  return (
    <>
      <button
        className="border border-blue-500 bg-blue-500 text-white hover:bg-white 
      hover:text-blue-500 transition-colors duration-300 py-2 px-4 rounded"
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
};

export default Btn;
