import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Avatar from "../../assets/img/Avatar.jpg";

function About() {
  return (
    <div className="bg-white mx-44 selection:bg-green-200">
      <div className="flex flex-row  font-sans mx-44 mt-32">
        <div className="mr-5">
          <img className="object-cover rounded-lg" src={Avatar} alt="" />
        </div>
        <div className="flex flex-col justify-center ml-3 tracking-wide justify-items-center">
          <p className="font-extrabold text-4xl text-gray-900 mb-6 ">
            👋Hi there!
          </p>
          <p className="text-xl text-gray-600 leading-9">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            maxime quod eos atque, culpa sed nisi hic consequuntur adipisci odit
            aspernatur doloribus commodi sapiente. Nesciunt fugiat commodi saepe
            delectus. Sint!
          </p>
        </div>
      </div>
      <div className="font-sans mx-80 mt-10 items-center">
        <div className="">
          <p className="text-2xl font-semibold text-gray-900 mb-2">❓ Info</p>
          <ul className="space-y-1 list-disc marker:text-green-300 list-inside text-lg ml-2 ">
            <li>Name: Dao Huy Hoang</li>
            <li>Based: Ho Chi Minh City</li>
            <li>University of Information Technology (UIT) - VNUHCM</li>
          </ul>
        </div>
        <div className="mt-5">
          <p className="text-2xl font-semibold text-gray-900 mb-2">🛠 Skills</p>
          <ul className="space-y-1 list-disc marker:text-green-300 list-inside text-lg ml-2 ">
            <li>React</li>
            <li>Angular</li>
            <li>Tailwind Css</li>
            <li>Software development</li>
          </ul>
        </div>
        <div className="mt-5">
          <p className="text-2xl font-semibold text-gray-900 mb-2">
            📁 Study & Experiences
          </p>
          <ul className="space-y-1 list-disc marker:text-green-300 list-inside text-lg ml-2 ">
            <li>University of Information Technology (UIT) - VNUHCM</li>
            <li>Youmed Mar 2022 - Jul 2022</li>
          </ul>
        </div>
        <div className="my-5">
          <p className="text-2xl font-semibold text-gray-900 mb-2">
            # Connect with me
          </p>
          <ul className="space-y-1  marker:text-green-300 list-inside text-lg ml-2 ">
            <li className="">
              <a
                href="https://github.com/daohuyhoang9119"
                className="text-gray-600 text-lg hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 mr-5"
              >
                <GithubOutlined style={{ fontSize: "40px" }} />
              </a>
              <a
                href="https://twitter.com/youngmanDao"
                className="text-gray-600 text-lg hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100  mr-5"
              >
                <TwitterOutlined style={{ fontSize: "40px" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/hoang-dao-93ba22193/"
                className="text-gray-600 text-lg hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 mr-5"
              >
                <LinkedinOutlined style={{ fontSize: "40px" }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
