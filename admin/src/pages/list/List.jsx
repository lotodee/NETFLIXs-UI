import React from 'react'
import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const List = () => {
  return (
<div className="list">
  <div className="sidebar">
  <Sidebar/>
  </div>
<div className="listContainer">
<Navbar/>
</div>
 
</div>
  )
}

export default List
