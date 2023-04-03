import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Navbar = () => {
    return (
        <div>
            <nav className="bg-sky-500 justify-center flex flex-row">
            <Link to="/"><Button style={{color:"white", fontSize:"24px", margin:"0px"}} title="Home">GEOVAL</Button></Link>
            </nav>
        </div>
    )
}

export default Navbar