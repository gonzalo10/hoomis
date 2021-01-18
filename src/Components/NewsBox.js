import React from 'react'
import PropTypes from 'prop-types'
import './NewsBox.css'
import { Button, Container, Row, Col, Carousel } from 'react-bootstrap'

import emailImg from '../assets/email.png'
import listImg from '../assets/list.png'
import analyticsImg from '../assets/analytics-4.png'
import rotationImg from '../assets/rotation.png'

class NewsBox extends React.Component {
	static propTypes = {
		data: PropTypes.shape({
			title: PropTypes.string,
			description: PropTypes.string,
			buttonLabel: PropTypes.string,
			image: PropTypes.string
		})
	}

	render() {
		const { data } = this.props

		return (
			<Container fluid>
				<div className={'HomisVision'}>
					<Row className={'HoomisDef'}>
						<Col lg={12} md={12} sm={12} xs={12}>
							<div>
								<h3 className={'InlineText'}>
									Homies es una plataforma de alquiler de viviendas a
									medio-largo plazo, donde te recomendamos, usando Inteligencia
									Artificial ("al modo Netflix"), el hogar ideal para ti.{' '}
								</h3>
								<br />
								<h3 className={'InlineText'}>
									También ofrecemos información sobre los diferentes barrios de
									la ciudad y gestionamos pagos y contratos online, todo ello
									con la tecnología más segura.{' '}
								</h3>

								<p className={'InlineText2'}>Hoomis Team</p>
							</div>
							<Row className={'InfoRow'}>
								<Col lg={3} md={3} sm={3} xs={3} className={'InfoCol'}>
									<Button className={'HoomisInfo'} href='/help'>
										<h3 className={'InfoText'}>Saber más</h3>
									</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
				<hr />

				<div className={'BotonesFeos'}>
					<div className={'ImgBlock'}>
						<Row>
							<Col lg={3} md={3} sm={3} xs={12} className={'ColImg'}>
								<img alt='' src={listImg} className={'img-responsive Icons'} />
							</Col>
							<Col lg={3} md={3} sm={3} xs={12} className={'ColImg'}>
								<img
									alt=''
									src={analyticsImg}
									className={'img-responsive Icons'}
								/>
							</Col>
							<Col lg={3} md={3} sm={3} xs={12} className={'ColImg'}>
								<img
									alt=''
									src={rotationImg}
									className={'img-responsive Icons'}
								/>
							</Col>
							<Col lg={3} md={3} sm={3} xs={12} className={'ColImg'}>
								<img alt='' src={emailImg} className={'img-responsive Icons'} />
							</Col>
						</Row>
					</div>
					<div className={'ImgBlock'}>
						<Row>
							<Col lg={3} md={3} sm={3} xs={12} className={'ColImg'}>
								<h3>Verificación</h3>
							</Col>
							<Col lg={3} md={3} sm={3} xs={12} className={'ColImg'}>
								<h3>Información</h3>
							</Col>
							<Col lg={3} md={3} sm={3} xs={12} className={'ColImg'}>
								<h3>Visita Virtual</h3>
							</Col>
							<Col lg={3} md={3} sm={3} xs={12} className={'ColImg'}>
								<h3>Sin Papeleos </h3>
							</Col>
						</Row>
					</div>
				</div>

				<div className={'RowCities'}>
					<Row>
						<Col lg={4} md={4} sm={4} xs={12}>
							<hr />
						</Col>
						<Col lg={4} md={4} sm={4} xs={12}>
							<h3 className={'InlineText'}>Ciudades Increíbles</h3>
						</Col>
						<Col lg={4} md={4} sm={4} xs={12}>
							<hr />
						</Col>
					</Row>
				</div>

				<div className={'BlockCities'}>
					<Row className={'RowImages'}>
						<Col lg={4} md={4} sm={4} xs={12} className={'ColImg'}>
							<Button
								className={'City1'}
								href='/s?&address=Barcelona, Spain&chosen=1'>
								<h3 className={'CityName'}>Barcelona</h3>
							</Button>
						</Col>
						<Col lg={4} md={4} sm={4} xs={6} className={'ColImg'}>
							<Button className={'City2'} href='/s'>
								<h3 className={'CityName'}>Madrid</h3>
								<p className={'NextCity'}>Próximamente</p>
							</Button>
						</Col>
						<Col lg={4} md={4} sm={4} xs={6} className={'ColImg'}>
							<Button className={'City3'} href='/s'>
								<h3 className={'CityName'}>Valencia</h3>
								<p className={'NextCity'}>Próximamente</p>
							</Button>
						</Col>
					</Row>
				</div>

				<div className={'RowReviews'}>
					<Row>
						<Col lg={4} md={4} sm={4} xs={12}>
							<hr />
						</Col>
						<Col lg={4} md={4} sm={4} xs={12}>
							<h3 className={'InlineTextComunidad'}>Comunidad Hoomis</h3>
						</Col>
						<Col lg={4} md={4} sm={4} xs={12}>
							<hr />
						</Col>
					</Row>
				</div>

				<Row>
					<div className={'Reviews'}>
						<Col xs={12} sm={12} md={12} lg={12} className={'ColReviews'}>
							<Carousel className={'BlockReview'}>
								<Carousel.Item className={'ReviewItem'}>
									<div className={'Review'}>
										<h3 className={'ReviewText'}>
											No se puede comparar Hoomis con el resto de páginas, lo
											que ofrece Hoomis esta a años luz
										</h3>
										<p className={'ReviewAuthor'}>
											Andrew Crawley, estudiante de intercambio
										</p>
									</div>
								</Carousel.Item>
								<Carousel.Item className={'ReviewItem'}>
									<div className={'Review'}>
										<h3 className={'ReviewText'}>
											Gracias a las visitas virtuales y la firma de contratos
											online conseguí la casa perfecta antes de llegar{' '}
										</h3>
										<p className={'ReviewAuthor'}>
											Andrew Crawley, estudiante de intercambio
										</p>
									</div>
								</Carousel.Item>
								<Carousel.Item className={'ReviewItem'}>
									<div className={'Review'}>
										<h3 className={'ReviewText'}>
											Gracias, Hoomis, por hacer mi vida más facil
										</h3>
										<p className={'ReviewAuthor'}>Sol García, empresaria</p>
									</div>
								</Carousel.Item>
								<Carousel.Item className={'ReviewItem'}>
									<div className={'Review'}>
										<h3 className={'ReviewText'}>
											Las estadísticas sobre los barrios ayudan muchísimo a la
											hora de elegir casa
										</h3>
										<p className={'ReviewAuthor'}>
											Silvia Fernández, estudiante
										</p>
									</div>
								</Carousel.Item>
								<Carousel.Item className={'ReviewItem'}>
									<div className={'Review'}>
										<h3 className={'ReviewText'}>
											El sistema de recomendaciones acertó a la perfección y me
											ahorró horas de busqueda
										</h3>
										<p className={'ReviewAuthor'}>Carlos Rubio, emprendedor</p>
									</div>
								</Carousel.Item>
							</Carousel>
						</Col>
					</div>
				</Row>

				<hr />

				<Row>
					<div id='Row3_Text' className={'HoomersBlock'}>
						<h3 className={'title'}>
							Conviertete en Hoomer y empieza a ganar dinero
						</h3>
						<p className={'caption'}>
							¿Tienes tiempo libre? Gana dinero siendo parte de la comunidad de
							Hoomis
						</p>
						<div className={'BotonHoomerRow'}>
							<div className={'HoomerSpace'}>
								<Button className={'BtnHoomer'} href='/s'>
									Únete
								</Button>
							</div>
						</div>
					</div>
				</Row>
			</Container>
		)
	}
}

export default NewsBox
