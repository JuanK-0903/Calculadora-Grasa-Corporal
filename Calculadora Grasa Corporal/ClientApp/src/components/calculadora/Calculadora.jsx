import { useEffect, useState } from "react";
import axios from 'axios';
import { Resultado } from "../resultado/Resultado";

export const Calculadora = () => {
    const [form, setForm] = useState(
        {
            genero: "",
            altura: "",
            peso: "",
            cintura: "",
            cuello: "",
            cadera: ""
        }
    );

    const [showRes, setRes] = useState(false);

    const OnChange = (event) => {
        setForm({
            ...form,
            [event.name]: parseFloat(event.value)
        });
    }

    const Limpiar = () => {
        document.getElementById("rdxMujer").checked = false;
        document.getElementById("rdxHombre").checked = false;

        setForm({
            genero: "",
            altura: "",
            peso: "",
            cintura: "",
            cuello: ""
        });

        setRes(false);
    }

    const Submit = async () => {
        if (Validate()) {
            const res = await axios.post("/calculadora_grasa/getGC", form)
                .then(GC => {
                    setRes(GC.data);
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            alert('Favor de llenar todos los campos con valores positivos.')
        }
    }

    const Validate = () => {
        const keys = Object.keys(form);
        for (let i = 0; i < keys.length; i++) {
            if (form[keys[i]].length === 0 || form[keys[i]] < 0)
                return false;
        }

        return true;
    }

    useEffect(() => {
        if (form.genero == 0) {
            setForm({
                ...form,
                cadera: 0
            });

            document.getElementById("divCadera").style.display = "none";
        } else {
            setForm({
                ...form,
                cadera: ''
            });

            document.getElementById("divCadera").style.display = "flex";
        }

    }, [form.genero]);

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ padding: "5rem 3rem", width: "45%" }}>
                <h1 style={{ color: "white" }}>
                    Calculadora de Grasa Corporal
                </h1>

                <p>
                    El metodo de la Marina de los Estados Unidos (US Navy Method) ofrece una manera sencilla de calcular un aproximado del porcentaje de tejido adiposo en el cuerpo de una persona.
                    <br />
                    <br />
                    Los valores requeridos por la formula son los siguientes:
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div>
                        <label>Genero</label>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <div>
                                <input type="radio" id="rdxHombre" name="genero" value="0" onChange={(e) => { OnChange(e.target) }}></input>
                                <label htmlFor="rdxHombre" style={{ marginLeft: "10px" }}>Hombre</label>
                            </div>
                            <div>
                                <input type="radio" id="rdxMujer" name="genero" value="1" onChange={(e) => { OnChange(e.target) }}></input>
                                <label htmlFor="rdxMujer" style={{ marginLeft: "10px" }}>Mujer</label>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        <label>Altura (cm)</label>
                        <input type="number" name="altura" placeholder="Escribe tu altura" style={{ background: "transparent", border: "1px solid #E1E1E1", borderRadius: "30px", color: "#E1E1E1", paddingLeft: "15px", outline: "none", lineHeight: "30px" }} onChange={(e) => { OnChange(e.target) }} value={form.altura}></input>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        <label>Peso (kg)</label>
                        <input type="number" name="peso" placeholder="Escribe tu peso" style={{ background: "transparent", border: "1px solid #E1E1E1", borderRadius: "30px", color: "#E1E1E1", paddingLeft: "15px", outline: "none", lineHeight: "30px" }} onChange={(e) => { OnChange(e.target) }} value={form.peso}></input>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        <label>Cintura (cm)</label>
                        <input type="number" name="cintura" placeholder="Medida de tu cintura" style={{ background: "transparent", border: "1px solid #E1E1E1", borderRadius: "30px", color: "#E1E1E1", paddingLeft: "15px", outline: "none", lineHeight: "30px" }} onChange={(e) => { OnChange(e.target) }} value={form.cintura}></input>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        <label>Cuello (cm)</label>
                        <input type="number" name="cuello" placeholder="Medida de tu cuello" style={{ background: "transparent", border: "1px solid #E1E1E1", borderRadius: "30px", color: "#E1E1E1", paddingLeft: "15px", outline: "none", lineHeight: "30px" }} onChange={(e) => { OnChange(e.target) }} value={form.cuello}></input>
                    </div>

                    <div style={{ display: "none", flexDirection: "column", gap: "5px" }} id="divCadera">
                        <label>Cadera (cm)</label>
                        <input type="number" name="cadera" placeholder="Medida de tu cadera" style={{ background: "transparent", border: "1px solid #E1E1E1", borderRadius: "30px", color: "#E1E1E1", paddingLeft: "15px", outline: "none", lineHeight: "30px" }} onChange={(e) => { OnChange(e.target) }} value={form.cadera}></input>
                    </div>
                </div>

                <div style={{ display: "flex", marginTop: "2rem", gap: "1rem" }}>
                    <button style={{ padding: "0.4rem", borderRadius: "4rem", width: "100px", background: "#8168E8", color: "#E1E1E1" }} onClick={Submit}><strong>Calcular</strong></button>
                    <button style={{ padding: "0.4rem", borderRadius: "4rem", width: "100px", background: "black", color: "#E1E1E1" }} onClick={Limpiar}><strong>Limpiar</strong></button>
                </div>
            </div>
            {showRes && <Resultado res={showRes} />}
        </div>
    );
}