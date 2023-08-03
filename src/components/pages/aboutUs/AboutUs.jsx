
import estilo from "./AboutUs.module.css"
const AboutUs = () => {
  return (
    <div className={estilo.contenedor}>
        <div className={estilo.historia}>
            <div >
                <img src="https://www.plasticaucho.com.pe/blog/wp-content/uploads/2020/11/ventas-al-por-mayor-de-zapatillas-unete-a-este-negocio-con-plasticaucho.jpg" alt="" />
            </div>
            <div>
                <p>En 2015, nos embarcamos en la aventura de ser vendedores de Nike Oficial. Con el tiempo Lemon Sneakers comenzó a crecer en el mundo de vendedores de zapatillas. Con pasión y dedicación, el negocio creció y se expandió a nivel regional, convirtiéndose en un éxito internacional.</p>
            </div>
        </div>
        <div className={estilo.objetivos}>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima quam, perspiciatis modi fugiat consequuntur veritatis a aliquid optio architecto ab amet incidunt obcaecati nam, illo nemo suscipit atque sunt!
            </div>
            <div>
                <img src="https://mf.b37mrtl.ru/actualidad/public_images/2021.04/article/606f1ab459bf5b6d6322c7a6.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutUs