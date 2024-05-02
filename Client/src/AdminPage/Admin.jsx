import React from "react";
import { Link } from "react-router-dom";
import Form from "../Image_Form/image_form";

function Admin() {
  return (
    <nav
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '90px',
      backgroundColor: 'rgba(0, 114, 206, 0.9)',
      color: '#fff',
      padding: '10px 0',
      zIndex: 1,
      boxShadow: '0 1px 3px rgba(0,0,0,0.55), 0 1px 2px rgba(0,0,0,0.24)',
    }}
  >
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
   
      }}
    >
      <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff', textDecoration: 'none' }}>
        <img src="./asset/image/quimica-removebg-preview.png" alt="logo" style={{ width: '120px' }} />
      </Link>
    </div>
      <Form/>
  </nav>
  // );
  //   <div>
  //     <h1>Admin</h1>
  //   </div>
  );
}


export default Admin