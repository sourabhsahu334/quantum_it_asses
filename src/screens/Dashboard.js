import React, { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import CancelIcon from '@mui/icons-material/Cancel';
function Dashboard() {

    const [currentpage,setCurrentpage]=useState(1);
   const   styles={
        td:{
            display:"flex",flexDirection:"row",alignItems:"center",height:"60px"
                },
        active:{
            display:"flex",flexDirection:"row",alignItems:"center",height:"60px"
        
        },
        image:{
            height:"40px",width:"40px",borderRadius:"20px",marginRight:"5px"
        },
        actiondiv:{
            display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"50px",height:"60px"
        },
        status:{height:"10px",width:"10px",borderRadius:"5px",backgroundColor:"green",marginRight:"5px",}
    }
    const pages=[1,2,3,4]
    const data = [
        { image:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",id: 1, name: 'John Doe', date: '04/10/2023', role: 'Admin', status: 'Active' },
        {image:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",id: 2, name: 'Jane Smith', date: '05/15/2023', role: 'User', status: 'Inactive' },
        {image:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",id: 3, name: 'Alice Johnson', date: '06/20/2023', role: 'Admin', status: 'Active' },
        {image:"https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",id: 4, name: 'Bob Brown', date: '07/25/2023', role: 'User', status: 'Inactive' },
        {image:"https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",id: 5, name: 'Eve Wilson', date: '08/30/2023', role: 'Admin', status: 'Active' },
        {image:"https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",id: 6, name: 'David White', date: '09/04/2023', role: 'User', status: 'Inactive' },
        {image:"https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600",id: 7, name: 'Olivia Lee', date: '10/09/2023', role: 'Admin', status: 'Active' },
        {image:"https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=600",id: 8, name: 'William Davis', date: '11/14/2023', role: 'User', status: 'Inactive' },
        {image:"https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=600",id: 9, name: 'Sophia Wilson', date: '12/19/2023', role: 'Admin', status: 'Active' },
        {image:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",id: 10, name: 'Liam Johnson', date: '01/24/2024', role: 'User', status: 'Inactive' },
        {image:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",id: 11, name: 'Emily Brown', date: '02/28/2024', role: 'Admin', status: 'Active' },
        {image:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",id: 12, name: 'Michael Johnson', date: '03/05/2024', role: 'User', status: 'Inactive' },
        {image:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",id: 13, name: 'Ava Smith', date: '04/10/2024', role: 'Admin', status: 'Active' },
        {image:"https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600",id: 14, name: 'William Lee', date: '05/15/2024', role: 'User', status: 'Inactive' },
        {image:"https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600",id: 15, name: 'Olivia Davis', date: '06/20/2024', role: 'Admin', status: 'Active' },
        {image:"https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600",id: 16, name: 'James White', date: '07/25/2024', role: 'User', status: 'Inactive' },
        {image:"https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600",id: 17, name: 'Sophia Miller', date: '08/30/2024', role: 'Admin', status: 'Active' },
        {image:"https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600",id: 18, name: 'Logan Wilson', date: '09/04/2024', role: 'User', status: 'Inactive' },
        {image:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",id: 19, name: 'Ella Smith', date: '10/09/2024', role: 'Admin', status: 'Active' },
        {image:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",id: 20, name: 'Michael Martin', date: '11/14/2024', role: 'User', status: 'Inactive' },
      ];
      const generateRandomAvatarURL = (username) => {
        // Construct the URL with a username to get a consistent avatar for the same user
        return `https://api.adorable.io/avatars/64/${username}.png`;
      };
      
      const users = Array.from({ length: 20 }, (_, index) => ({
        id: index + 1,
        name: `User ${index + 1}`,
        avatarURL: generateRandomAvatarURL(`user${index + 1}`),
      }));
      
      
  return (
    <div style={{margin:"30px"}}>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Date Created</th>
      <th scope="col">Role</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>


    </tr>
  </thead>
  <tbody>
{data.slice(currentpage-1,currentpage+5).map((item,index)=>(   
     <tr >
      <th scope="row"><p style={styles.td}>{index+1}</p></th>
      <td ><div style={{display:"flex",flexDirection:"row",alignItems:"center",height:"60px"}}>
        <img src={item.image} style={styles.image}/>
        <p style={{fontWeight:"bold"}}>{item.name}</p>
      </div></td>
      <td><p style={styles.td}>{item.date}</p></td>
      <td><p style={styles.td}>{item.role}</p></td>
      <td><div style={styles.active}><div style={{...styles.status,backgroundColor:item.status=="Active"?"green":"red"}}></div>{item.status}</div></td>
      <td><div style={styles.actiondiv}>
        <SettingsIcon style={{color:"#3ba1f7",cursor:"pointer"}}/>
        <CancelIcon style={{color:"red",cursor:"pointer"}} />
      </div></td>

    </tr>
   
))}
  </tbody>
</table>
<div style={{display:"flex",justifyContent:"center",width:"100%"}}>
<nav style={{}} aria-label="...">
  <ul class="pagination">
    <li onClick={()=>setCurrentpage(currentpage+1)} class={currentpage==1?"page-item disabled":"page-item"}>
      <span class="page-link">Previous</span>
    </li>
    {pages.map((item,index)=>(
        <li onClick={()=>setCurrentpage(item)} class={item==currentpage?"page-item active":"page-item"}>
      <span class="page-link">
        {item}
        <span class="sr-only"></span>
      </span>
    </li>
    ))}
    
    <li onClick={()=>setCurrentpage(currentpage+1)} class={currentpage==4?"page-item disabled":"page-item"}>
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</div>
    </div>
  )
}



export default Dashboard