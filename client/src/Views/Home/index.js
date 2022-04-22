import React, { useEffect } from 'react';
import carousel1 from '../../Assets/images/carousel-1.jpg';
import carousel2 from '../../Assets/images/carousel-2.jpg';
import carousel3 from '../../Assets/images/carousel-3.jpg';
import bahriaLogo from '../../Assets/images/client-logos/bahria-town.png';
import gulbergGreenLogo from '../../Assets/images/client-logos/gulberg-greens.png';
import parkViewCity from '../../Assets/images/client-logos/park-view-city.png';
import topCity from '../../Assets/images/client-logos/top-city.png';
import './styles.css';
import Cookies from 'universal-cookie';

const Home = () => {

	let cookies = new Cookies();

	useEffect(() => {
		console.log('Home view');
		console.log(cookies.get('authToken'));
	});

	return (
		<div className='home-view'>
			{/* <div id="home-carousel" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							className="d-block w-100"
							src={carousel1}
							alt="Third slide"
						/>

					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src={carousel2}
							alt=" slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src={carousel3}
							alt="Thirdww slide"
						/>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#home-carousel" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#home-carousel" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div> */}

			<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={carousel1} className="d-block w-100" alt="abc"></img>
						<div className="carousel-caption d-none d-md-block">
							<h5>First slide label</h5>
							<p>Some representative placeholder content for the first slide.</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src={carousel2} className="d-block w-100" alt="abc2"></img>
						<div className="carousel-caption d-none d-md-block">
							<h5>Second slide label</h5>
							<p>Some representative placeholder content for the second slide.</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src={carousel3} className="d-block w-100" alt="abc3"></img>
						<div className="carousel-caption d-none d-md-block">
							<h5>Third slide label</h5>
							<p>Some representative placeholder content for the third slide.</p>
						</div>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>

			<div id='client-logos' className='row d-flex align-items-center'>
				<div className='col-12 col-md-3 d-flex justify-content-center'>
					<img
						className="d-block w-100"
						src={bahriaLogo}
						alt="Third slide"
					/>
				</div>
				<div className='col-12 col-md-3 d-flex justify-content-center'>
					<img
						className="d-block w-100"
						src={gulbergGreenLogo}
						alt="Third slide"
					/>
				</div>
				<div className='col-12 col-md-3 d-flex justify-content-center'>
					<img
						className="d-block w-100"
						src={parkViewCity}
						alt="Third slide"
					/>
				</div>
				<div className='col-12 col-md-3 d-flex justify-content-center'>
					<img
						className="d-block w-100"
						src={topCity}
						alt="Third slide"
					/>
				</div>

			</div>
		</div>
	);
};

export default Home;
