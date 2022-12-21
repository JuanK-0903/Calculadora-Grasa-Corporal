import { Navbar } from "../navbar/Navbar";

export const Form = ({ children }) => {


    return (
        <div style={{ background: "black", color:"#E1E1E1" }}>
            <Navbar/>
            {children}
        </div>
    );
}