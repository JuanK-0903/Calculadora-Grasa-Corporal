export const Resultado = ({ res }) => {
    const categoria = res.genero === 0 ? {
        Escencial: {
            min: 2,
            max: 5
        },
        Deportista: {
            min: 6,
            max: 13
        },
        Fitness:
        {
            min: 14,
            max: 17
        },
        Aceptable: {
            min: 18,
            max: 24
        },
        Obeso: {
            min: 25
        }
    }
        : {
            Escencial: {
                min: 10,
                max: 13
            },
            Deportista: {
                min: 14,
                max: 20
            },
            Fitness:
            {
                min: 21,
                max: 24
            },
            Aceptable: {
                min: 25,
                max: 31
            },
            Obeso: {
                min: 32
            }
        };

    const posicion = res.porcentaje >= categoria.Obeso.min ? "100%" : res.porcentaje <= categoria.Escencial.min ? "0" : (((res.porcentaje - categoria.Escencial.min) * 100) / (categoria.Obeso.min - categoria.Escencial.min)) + "%";

    return (
        <div style={{ width: "750px", padding:"5rem 3rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px" }}>
            <h3>Tu resultado: {res.porcentaje}%</h3>

            <div style={{ width: "calc(100% - 50px)", position: "relative", height: "25px" }}>
                <div style={{ position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", width: "50px", left: posicion }}>
                    <label>
                        {res.porcentaje}%
                    </label>
                    <div style={{ width: "0", height: "0", borderStyle: "solid", borderWidth: "10px 10px 0 10px", borderColor: "white transparent transparent transparent" }}>
                    </div>
                </div>
            </div>

            <div style={{ width: "100%", height: "50px", borderRadius: "5px", background: "linear-gradient(90deg, rgba(52,141,202,1) 0%, rgba(59,136,66,1) 25%, rgba(146,179,44,1) 50%, rgba(220,182,43,1) 75%, rgba(179,92,41,1) 100%)" }}>
            </div>

            <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <div style={{ background: "rgba(52,141,202,1)", width: "10px", height: "10px", borderRadius: "100%" }}>
                    </div>
                    <label>{categoria.Escencial.min}-{categoria.Escencial.max}%</label>
                    <label>Escencial</label>
                </div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <div style={{ background: "rgba(59,136,66,1)", width: "10px", height: "10px", borderRadius: "100%" }}>
                    </div>
                    <label>{categoria.Deportista.min}-{categoria.Deportista.max}%</label>
                    <label>Deportista</label>
                </div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <div style={{ background: "rgba(146,179,44,1)", width: "10px", height: "10px", borderRadius: "100%" }}>
                    </div>
                    <label>{categoria.Fitness.min}-{categoria.Fitness.max}%</label>
                    <label>Fitness</label>
                </div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <div style={{ background: "rgba(220,182,43,1)", width: "10px", height: "10px", borderRadius: "100%" }}>
                    </div>
                    <label>{categoria.Aceptable.min}-{categoria.Aceptable.max}%</label>
                    <label>Aceptable</label>
                </div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <div style={{ background: "rgba(179,92,41,1)", width: "10px", height: "10px", borderRadius: "100%" }}>
                    </div>
                    <label>{categoria.Obeso.min}%+</label>
                    <label>Obeso</label>
                </div>
            </div>
        </div>
    );
}