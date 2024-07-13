interface CustomarProps {
  talk: string;
}

export const Customar = ({ talk }: CustomarProps) => {
  return (
    <div className="flex justify-end items-start mt-1 mr-5">
      <div className="bg-green-300 text-black px-4 py-2 rounded-lg shadow-lg max-w-2xl mt-1 relative">
        <div
          className="absolute bottom-6 right-0 transform translate-x-1/2 translate-y-1/2 w-0 h-0 
          border-t-transparent border-l-transparent border-b-[20px] border-b-green-300 border-r-[20px] border-r-transparent"
        ></div>
        <p className="whitespace-nowrap">{talk}</p>
      </div>
    </div>
  );
};
