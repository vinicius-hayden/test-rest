import { GrApple } from "react-icons/gr"
import content from "../static/Index";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.apple.com/br/"><GrApple></GrApple>Apple</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {content.navbar.map((item, key) => {
              return (
                <li className="nav-item" key={key}>
                  <a className="nav-link active" aria-current="page" href={item.link} key={key}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
  );
}