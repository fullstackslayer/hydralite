import { Icon } from "@iconify/react";
import React from "react";
import User from "~/components/ProjectFeed/Sidebar/User";

interface UserType {
  name: string;
  avatar?: string;
  status?: string;
}

const Section = ({ a }: { a: UserType[] }) => (
  <div>
    {a?.map((m, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <User key={i} avatar={m.avatar} name={m.name} status={m.status} />
    ))}
  </div>
);

export const Members: React.FC<{
  members: {
    team: UserType[];
    mods: UserType[];
    community: UserType[];
  };
}> = ({ members }) => (
  <div className="w-full p-6 overflow-y-auto">
    <div className="flex justify-between items-center w-full">
      <h1 className="font-extrabold text-lg">Members</h1>
      <Icon icon="bi-plus-lg" className="text-text text-md" />
    </div>
    <div className="mt-3 flex flex-col">
      {/* TASK: Implement infinity scroll/lazy load */}
      <Section a={members.team} />
      <Section a={members.mods} />
      <Section a={members.community} />
    </div>
  </div>
);
