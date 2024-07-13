import React from "react";
import lawyer from "../atoms/image/lawyer.png";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";

interface InfomationProps {
  talk: string;
  officeName: string;
}

const Infomation: React.FC<InfomationProps> = ({ talk, officeName }) => {
  return (
    <div className="flex items-start mt-4 ml-5">
      <PersonSharpIcon
        sx={{
          mt: 3,
          mr: 2,
        }}
      />
      <div className="bg-white text-black px-4 py-2 rounded-lg shadow-lg max-w-2xl mt-4 relative ml-0">
        <p className="font-bold absolute -top-6 text-sm whitespace-nowrap">
          {officeName}
        </p>
        <div
          className="absolute bottom-6 left-0 transform -translate-x-1/2 translate-y-1/2 w-0 h-0 
          border-t-transparent border-r-transparent border-b-[20px] border-b-white border-l-[20px] border-l-transparent"
        ></div>
        <p className="-">{talk}</p>
      </div>
    </div>
  );
};

export default Infomation;
