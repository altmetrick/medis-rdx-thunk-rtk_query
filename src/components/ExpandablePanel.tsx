import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import { useState } from 'react';

type PropsT = {
  header: React.ReactNode;
  children: React.ReactNode;
};

const ExpandablePanel: React.FC<PropsT> = ({ header, children }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-2 border rounded ">
      <div
        onClick={handleExpanded}
        className="flex p-2 justify-between items-center"
      >
        <div className="flex justify-between items-center ">{header}</div>
        <div className="cursor-pointer p-2">
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t shadow ">{children}</div>}
    </div>
  );
};

export default ExpandablePanel;
