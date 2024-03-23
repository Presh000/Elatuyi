import Card from "../../components/Card";

const card = [
  {
    quote:
      '"Leads with warnth". Tola makes work fun while focusing on key metrics with an eagle\'s eye. Everything must be incremental to the bottom-line. She is an expert in consumer and key stakeholder engagement, with the ability to drive execution from the BoP to top levels in government and society.',
    authorName: "Kingsley Ehimika",
    authorRole: "Yale School of Management | Strategy | Marketing | Technology",
    authorImageSrc: "/assets/images/kingEhim.jpg",
    url: "https://www.linkedin.com/in/kingsley-ehimika/overlay/about-this-profile/",
  },
  {
    quote:
      "Tola worked with me for more than 2 years and her energy and enthusiasm for excellence was highly commendable. She could always be trusted with the most difficult of tasks. She was always willing to take on additional responsibilities and put in her best to deliver on the objectives.  She is a natural leader and enjoys working with colleagues and agencies.",
    authorName: "Sanjay Pradhan",
    authorRole: "CEO at Moneymantra Wealth Managers",
    authorImageSrc: "/assets/images/sanjay.jpg",
    url: "https://www.linkedin.com/in/sanjay-pradhan-1ba29213/overlay/about-this-profile/",
  },
  {
    quote:
      "Tola is really spot on on the job and get things done as fast as possible. She is highly dedicated, very objective and does not take NO for an answer. Good team player and highly result oriented and very persionate about her Job.",
    authorName: "Femi Adesina",
    authorRole:
      "National Key Accounts and Modern Trade Manager -Nigeria at USL-Diageo",
    authorImageSrc: "/assets/images/femi.jpg",
    url: "https://www.linkedin.com/in/femi-adesina-a9806a34/overlay/about-this-profile/ ",
  },
  {
    quote:
      "Tola lead projects under Trade Category Management and Shopper Marketing in particular, both for Modern trade & General Trade, where she spent time  Managing key projects in Unilever Gulf General Trade Shopper & Customer Management department  where she demonstrated her capabilities to manage projects very well.",
    authorName: "Bobby Mathew",
    authorRole:
      "Chief Marketing Officer and Partner, Prime Partners Global India, ex Head of Trade & Shopper Marketing",
    authorImageSrc: "/assets/images/bobby.jpg",
    url: "https://www.linkedin.com/in/bobby-mathew-8723a73/overlay/about-this-profile/",
  },
];

const AboutMe = () => {
  return (
    <section className="w-full flex-center flex-col  px-5 app-section ">
      <div className="flex w-full flex-col">
        <p className="md:text-[42px] text-[36px] font-semibold text-[#EC2E57]">
          About
        </p>
        <span className="block my-5 h-0.5 w-16 animate-pulse bg-gray-600"></span>
      </div>

      <div className="text-[20px] md:text-[23px]  space-y-4 text-white pb-32">
        <p>
          Omotola is a growth marketer, digital strategist and brand builder who
          thrives off a challenge. she is a social butterfly who loves people
          and forming meaningful connections. she’s a leader, doer and a
          life-long learner.
        </p>
        <p>
          Tola is a strategic and tactical, visionary who loves the details,
          creative, yet practical who also cares about tangible results and
          exceptional work.
        </p>
        <p>
          Tola is described as authentic, driven and passionate, Which pretty
          much means that she cares.
        </p>
        <p>
          She is a sought after speaker on consumer behavior,who serves as the
          marketing director for pladis global.
        </p>
      </div>
      <div className="flex w-full flex-col text-white">
        <p className="md:text-[42px] text-[36px] font-semibold text-[#EC2E57]">
          Kind Words
        </p>
        <p>
          Some nice things smart people I’ve worked with have to say about me
          #makingmeblush
        </p>
        <span className="block my-5 h-0.5 w-16 animate-pulse bg-gray-600"></span>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 text-white">
        {card.map((card, index) => (
          <Card {...card} key={index} />
        ))}
      </div>

      <span className="block h-0.5 w-2/3 my-10 animate-pulse bg-gray-600"></span>
    </section>
  );
};

export default AboutMe;
