/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect} from "react";
import { fetchMembers } from "../../context/members/actions";
import { useMembersDispatch } from "../../context/members/context";


import MemberListItems from "./MemberListItems";


const MemberList: React.FC = () => {
  //   const [Members, setMembers] = useState<Member[]>([]);
  //   const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatchMembers = useMembersDispatch();
  
     useEffect(() => {
       // And I'll pass the `dispatchProjects` to `fetchProjects` function.
       fetchMembers(dispatchMembers);
     }, []);
    
    

  
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      {/*To keep this file clean, I'll move all the logic to access the projects 
       from our app-state, to a new component ProjectListItems */}
      <MemberListItems />
    </div>
  );
};
export default MemberList;
