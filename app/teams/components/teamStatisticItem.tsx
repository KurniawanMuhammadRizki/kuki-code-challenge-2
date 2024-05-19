import React from "react";

interface TeamStatisticItemProps {
  title: string;
  desc: string;
}

const TeamStatisticItem: React.FC<TeamStatisticItemProps> = ({
  title,
  desc,
}) => {
  return (
    <div className="flex flex-col font-Helvetica-Neue w-[255px] p-5 shadow-lg rounded-xl">
      <div className="text-6xl font-extrabold mb-2">
        <h2>{title}</h2>
      </div>
      <div>{desc}</div>
    </div>
  );
};

export default TeamStatisticItem;
