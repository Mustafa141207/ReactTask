import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export default function Home() {
  let[search,Setsearch]=useState([]);
  let[sItem,SetItem]=useState([]);
  async function getUsersData() {
   let{data}= await axios.get(` https://reqres.in/api/users?page=page`);
   Setsearch(data.data)
  }
  useEffect(()=>{
    getUsersData();
  },[])
  let xyz=document.querySelector('#xyz')
  // const filter=()=>{
  //   SetItem(search.filter(x=>x.id==xyz.value ))
  // }

  // onChange={filter}
  return (
    <>
    <div className=" p-5 d-flex justify-content-center align-items-center">
    <input id="xyz" type="text" className="form-control w-50 p-2 " placeholder="Search" onChange={(e)=> SetItem(e.target.value)}  />
    </div>
      
      <div id="rows" className="row g-2 py-5">
      {search.filter((value)=>{
        if(sItem==''){
          return value
        }else if(value.id===sItem.id){
          return value
        }
      })
      .map((user,id) => {
          return (
            <>
              <div key={id} className="col-md-4">
                <Link to={`/Details/${user.id}`}>
                  <div className="content p-3 border border-2 shadow">
                    <div className="avatar m-auto">
                      <img
                        src={user.avatar}
                        className="w-100  rounded-circle"
                        alt=""
                      />
                    </div>
                    <div className="userDetails p-2 my-2">
                      <h6>User id: {user.id}</h6>
                      <p>
                        User Name: {user.first_name} {user.last_name}
                      </p>
                      <p>Email: {user.email}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
        {search.filter(x=>x.id==xyz.value ).map((user,id) => {
          return (
            <>
              <div key={user.id} className="col-md-4">
                <Link to={`/Details/${user.id}`}>
                  <div className="content p-3 border border-2 shadow">
                    <div className="avatar m-auto">
                      <img
                        src={user.avatar}
                        className="w-100  rounded-circle"
                        alt=""
                      />
                    </div>
                    <div className="userDetails p-2 my-2">
                      <h6>User id: {user.id}</h6>
                      <p>
                        User Name: {user.first_name} {user.last_name}
                      </p>
                      <p>Email: {user.email}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
        
      </div>
    </>
  );
}
