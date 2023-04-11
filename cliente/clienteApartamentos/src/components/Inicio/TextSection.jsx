import "./styleTextSection.css"

const TextSection = () => {
    return (
        <div className="textSectionFont" style={{Sdisplay:"flex", flexDirection:"column", width:"80%", border:"1px solid white", padding:"10px", borderRadius:"10px", backgroundColor:"rgba(255, 255, 255, 0.5)"}}>
            <h3>Paraíso natural</h3>
            <p>Descubra la tranquilidad de la Isla de La Palma, Canarias, y disfrute de unas vacaciones en un ambiente rural incomparable. Encontrará una gran variedad de opciones de alojamiento en casas rurales, fincas y casas de campo, con vistas espectaculares al océano Atlántico y a los bosques de laurisilva de la isla.</p>
            <p>La Palma es un destino turístico de ensueño para aquellos que buscan un retiro relajante en un entorno natural impresionante, y nuestros alojamientos rurales son la elección perfecta para disfrutarlo al máximo.</p>
        </div>
    )
}

export default TextSection