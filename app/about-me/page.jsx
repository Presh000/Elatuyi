import Image from "next/image";
import Card from "../../components/Card";

const card = [
  {
    quote:
      " Tola is hands down the best colleague and friend I've ever worked with. She puts an insane amount of passion and energy into every single thing she does. She's constantly spearheading new projects that blend creativity and business results.",
    authorName: "Sarah McCredie",
    authorRole: "Director of Partnerships at Campaign Monitor",
    auathorImageSrc: "/assets/images/omotola1.svg",
  },
  {
    quote:
      "Tola is one of those unique individuals that can toggle between strategy and execution, seamlessly. She combines a keen eye for detail with a broader strategic mindset that sets her (and her teams) up for success. I would jump at the chance to work with tola again.",
    authorName: "Hana Abaza",
    authorRole: "Head of Marketing at Shopify Plus",
    auathorImageSrc: "/assets/images/omotola1.svg",
  },
  {
    quote:
      "There are few people on the planet that I trust as much as tola. She is one of the most dedicated, loyal and hardest working marketers I've met. She is a force to be reckoned with and one of the best people I've ever worked with.",
    authorName: "Michael Aagaard",
    authorRole: "Senior Conversion Optimizer",
    auathorImageSrc: "/assets/images/omotola1.svg",
  },
  {
    quote:
      "I've seen Tola turn a good marketing idea into an impactful, memorable experience time after time. And I've seen her do so humbly and authentically. I don't have a clue how she does it, but it does seem to come down to this: she cares. You can't teach caring, and you can't coach people to care. You do, or you don't. She does. And we all feel it.",
    authorName: "Joanna Wiebe",
    authorRole: "Co-Founder at CopyHackers",
    auathorImageSrc: "/assets/images/omotola1.svg",
  },
];
// Cards.map((card, index) => {})

const AboutMe = () => {
  return (
    <section className="w-full flex-center flex-col  px-5 ">
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
