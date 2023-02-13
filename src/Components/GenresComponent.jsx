import { Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import MovieList from "./MovieList";
import SingleMovie from "./SingleMovie";

const GenresComponent = () => {
  return (
    <div
      className="container-fluid px-4 "
      style={{ backgroundColor: "#221f1f" }}
    >
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          
          <i className="fa fa-th-large icons"></i>
          <i className="fa fa-th icons"></i>
        </div>
      </div>
      <h4>The Lord Of The Rings</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
        <MovieList movie={"the lord of the rings"} />
      </div>
      <h4>Harry Potter</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
        <MovieList movie={"harry Potter"} />
      </div>
      <h4>Jurassic Park</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
        <MovieList movie={"Jurassic Park"} />
      </div>
    </div>
  );
};

export default GenresComponent;
