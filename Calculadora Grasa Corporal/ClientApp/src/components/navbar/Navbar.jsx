export const Navbar = () => {
    return (
        <div style={{ width: "100%", height: "4rem", background: "#8168E8", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 5rem" }}>
            <div style={{ color: "#E1E1E1" }}>
                <h3>Health Overview</h3>

            </div>
            <div style={{ position: "relative", cursor: "pointer" }}>
                <span style={{ width: "20px", height: "2px", background: "#E1E1E1", position: "absolute", transform: "translateY(-5px)" }}></span>
                <span style={{ width: "20px", height: "2px", background: "#E1E1E1", position: "absolute" }}></span>
                <span style={{ width: "20px", height: "2px", background: "#E1E1E1", position: "absolute", transform: "translateY(5px)" }}></span>
            </div>
        </div>
    );
}