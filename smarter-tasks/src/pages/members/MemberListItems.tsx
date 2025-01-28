/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { useMembersDispatch, useMembersState } from "../../context/members/context";
import { deleteMember } from "../../context/members/actions";


export default function MemberListItems() {
  const state: any = useMembersState();
  const dispatchMembers = useMembersDispatch();
  const    { members, isLoading, isError, errorMessage } = state; 
  console.log(members);



    if (members.length === 0 && isLoading) {
      return <span>Loading...</span>;
    }
  
   if (isError) {
     return <span>{errorMessage}</span>;
   }
    
  
  
    const handleDeleteMember = (id: number) => {
      deleteMember(dispatchMembers, id);
    };
  

  return (
    <>
      {members.map((member: any) => (
        <div
          key={member.id}
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {member.name}
          </h5>
          <h6 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {member.email}
          </h6>
          <button
            onClick={() => handleDeleteMember(member.id)}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
}
