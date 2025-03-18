import { Link } from "react-router-dom";

const NormalBanner = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold py-10 text-center">
          Most popular products
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        <div>
          <Link to="/">
            <img
              className="h-50"
              src="https://i.ibb.co.com/YT26cbmS/Screenshot-2.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img
              className="h-52"
              src="https://i.ibb.co.com/nqQ8rxGb/Screenshot-22.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img
              className="h-50 w-96"
              src="https://i.ibb.co.com/SSwszwF/div-card-two.webp"
              alt=""
            />
          </Link>
        </div>
      </div>
      {/* / */}
    </div>
  );
};

export default NormalBanner;
