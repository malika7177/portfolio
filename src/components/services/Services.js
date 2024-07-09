import './services.css';

const Services = ({ servicesData }) => {
  return (
    <section id='services' className='services container'>
      <h2 className='title'>Services</h2>
      <h1 className='subtitle'>Design that solves problems, <br/> one product at a time.</h1>
      <div className="services-container">
        {servicesData.map((service, index) => {
          return (
            <div key={index} className="services-item">
              <img src={service.Img} alt='service-img' />
              <h3 className='service-title'>{service.title}</h3>
              <p className='service-subtitle'>{service.description}</p>
              <ul>
                <li>{service.firstLi}</li>
                <li>{service.secondLi}</li>
                <li>{service.thirdLi}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;