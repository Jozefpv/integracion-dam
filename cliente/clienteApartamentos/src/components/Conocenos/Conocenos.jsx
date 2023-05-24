import mapa from './images/volcan.jpg'
const Conocenos = () => {
    return (
        <div style={{display:"flex"}}>
            <div style={{ padding: "30px", width:"50%" }}>
                <h2>Conocenos</h2>
                <p>En San Borondon Rural, nos apasiona la belleza y tranquilidad de La Palma. Nuestro negocio comenzó con la visión de brindar a los viajeros la oportunidad de experimentar la auténtica vida rural en esta increíble isla. Desde nuestros humildes comienzos, nos hemos dedicado a seleccionar cuidadosamente las mejores casas rurales y ofrecer a nuestros clientes una experiencia inolvidable</p>
                <h2>Nuestra misión</h2>
                <p>En San Borondon Rural, nos esforzamos por ser la opción número uno para aquellos que buscan alquilar una casa rural en La Palma. Nuestra misión es brindar un servicio excepcional, alojamientos de calidad y una atención personalizada para garantizar que cada huésped tenga unas vacaciones memorables. Nos enorgullece conectar a nuestros clientes con la belleza y autenticidad de la vida rural en La Palma.</p>
                <h2>Nuestra comunidad local</h2>
                <p>Valoramos y respetamos profundamente a la comunidad local de La Palma. Nos esforzamos por fomentar relaciones sólidas con los habitantes de la isla y apoyar a las empresas locales. Al elegir alojarte en una de nuestras casas rurales, no solo te sumerges en la cultura local, sino que también contribuyes directamente al desarrollo sostenible de la comunidad y al bienestar de sus habitantes.</p>
            </div>
            <div style={{width:"50%"}}>
                <img src={mapa} style={{ maxWidth: "550px", borderRadius: "10px", border: "2px solid white" }} />
            </div>
        </div>
    )
}

export default Conocenos