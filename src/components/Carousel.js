export default function Carousel() {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/03/M1-MacBook-Pro.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://veja.abril.com.br/wp-content/uploads/2020/10/Apple_announce-iphone12pro_10132020.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://s2.glbimg.com/DvlkcjWE8B8CYcGyqq7N8fSlj-k=/0x0:1200x675/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/u/z/VvEjpyQAAyiWsnLqWUdA/airpods-pro2.jpg" className="d-block w-100" alt="..."/>
        </div>
      </div>
    </div>
  );
}