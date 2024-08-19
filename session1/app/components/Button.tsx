import React from "react";
type Props = {
  name: string[]
};
export default function Button(prop: Props) {
  return (
  <div>
    {prop.name.map((item:any,index:any)=>{
      return <button key={index}>{item}</button>
    })}
  </div>
  )
}
