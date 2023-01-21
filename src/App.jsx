import Slider from 'react-slick';
import './App.css'

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

function App() {

  return (
    <div  >
        <h2> Single Cats</h2>
      <Slider {...settings}>
      <div>
        <img style={{width: '100%'}} src="cats/p07ryyyj.jpg" alt="Slide 1" />
      </div>
      <div>
        <img  style={{width: '100%'}} src="cats/p02453s8.jpg" alt="Slide 2" />
      </div>
      <div>
        <img style={{width: '100%'}} src="cats/uwp90287.webp" alt="Slide 3" />
      </div>
    </Slider>
     
    </div>
  )
}

export default App
