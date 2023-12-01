import React from 'react';

interface AboutUsProps {
  order: string,
  img: string,
  title: string,
  margin?: string,
  marginTop?: string,
  marginRight?: string,
  marginBottom?: string,
  left?: string,
  top?: string
};

const AboutUs: React.FC<AboutUsProps> = ({ order, img, title, margin, marginTop, marginBottom, marginRight, left, top }) => {
  return (
    <section className="about-us" style={{ marginTop: marginTop, marginBottom: marginBottom }}>
      <div className="container">
        <div className="row">
          <div className="left" >
            <img src={img} alt="" style={{margin: `0 ${margin}` ,marginRight: marginRight}} />
            <div className='content' style={{left: left, top: top}}>
              <p>Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra.
                Pretium id massa adipiscing pellentesque euismod ut pharetra.</p>
              <span className='fw-bold'>- Anton Çexov</span>
            </div>
          </div>

          <div className='right' style={{order: order}}>
            <h2 className='title | fw-bold'>{title}<span>?</span></h2>
            <p>
              Tortor, nibh orci, sed in sed sed dictum tristique.
              Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra.
              Tortor, nibh orci, sed in sed sed dictum tristique.
              Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque euismod ut pharetra.
            </p>
            <p>
              Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra.
              Pretium id massa adipiscing pellentesque euismod ut pharetra.
              Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet euismod nisi viverra.
              Pretium id massa adipiscing pellentesque euismod ut pharetra. Tortor, nibh orci, sed in sed sed
              dictum tristique. Turpis laoreet euismod nisi viverra. Pretium id massa adipiscing pellentesque
              euismod ut pharetra.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs