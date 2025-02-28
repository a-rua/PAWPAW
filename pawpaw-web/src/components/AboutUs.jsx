
import logo from '../assets/Img/pataPerro.png'

export const AboutUs = ({logo}) => {

    return (
        <div className="about-container">
            <div className='text-container'>
                <h1>¿Quienes Somos?</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa expedita, ad aperiam natus tempore, dolore qui cum reprehenderit dolorum sunt impedit sint culpa commodi illo, voluptates officia molestiae suscipit porro? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, sequi distinctio repellat quis reiciendis voluptas eos harum at! Nulla explicabo vitae esse dolorum libero omnis temporibus voluptatem tempora velit modi. </p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus eius laudantium numquam perferendis quibusdam assumenda reprehenderit. Hic, ipsam! Earum reiciendis voluptatum ab aliquam ipsam sit perspiciatis doloribus, voluptate accusantium.
                </p><br/>
                <img src={logo} />
            </div>
        </div>
    )
}