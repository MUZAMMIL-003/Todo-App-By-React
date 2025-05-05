import { Link } from "react-router";

const Home = ({ theme }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://wallpapers.com/images/featured/developer-png-9wxnnbpbatv5o2dn.jpg"
          />
        </div>
        <div
          className={`lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ${
            theme === "dark" ? "text-white" : "text-[#242526]"
          }`}
        >
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            aliquam laboriosam similique consequatur nisi ullam perferendis,
            aliquid aperiam eos ipsam in nam suscipit, soluta repellendus!
            Voluptatibus dolores necessitatibus architecto harum.
          </p>
          <div className="flex justify-center">
            <Link
              to={"/todo"}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg capitalize"
            >
              To do list
            </Link>
            <Link
              to={"/users"}
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg capitalize"
            >
              users section
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
