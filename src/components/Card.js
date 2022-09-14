export default function Card( {title, description, subdescription, image, alt}) {
  return (
    <>
      <div className="card mb-3" style={{maxWidth: '540px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt={alt}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">{subdescription}</small></p>
              <div className="d-flex justify-content-center">
                <button type="button" className="btn-sm  btn-primary">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}