import { Link } from "react-router";

const UserCards = ({ users, theme }) => {
  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {users.map((item) => (
            <div key={item?.id} className="xl:w-1/4 md:w-1/2 p-4">
              <Link
                to={`/users/${item?.id}`}
                className={`p-6 rounded-lg border-2 ${
                  theme === "dark"
                    ? "bg-gray-700 border-white"
                    : "bg-gray-700 border-black"
                }`}
              >
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={item?.image}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  {item.company.title}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {item.company.name}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserCards;
