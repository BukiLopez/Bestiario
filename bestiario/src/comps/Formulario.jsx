function Formulario() {
    return (
        <div>
            <label>Nombre</label>
            <input type="text" placeholder="Nombre"/>
            <label>Apellido</label>
            <input type="text" placeholder="Apellido"/>
            <label htmlFor="">Correo</label>
            <input type="text" placeholder="Correo"/>
            <label htmlFor="">Introduzca su mensaje</label>
            <textarea id="comentario" cols="30" rows="10"></textarea>
        </div>
    );
}

export default Formulario;