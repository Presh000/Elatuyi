"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Pubications = () => {
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const handleClick = (index) => {
    switch (index) {
      case 1:
        setIsClicked1((prev) => !prev);
        break;
      case 2:
        setIsClicked2((prev) => !prev);
        break;
      case 3:
        setIsClicked3((prev) => !prev);
        break;
      default:
        break;
    }
  };

  return (
    <section>
      <section className="w-full flex-center flex-col  px-12 xl:px-36 lg:px-20 ">
        <div className="flex w-full">
          <p className="text-[42px] font-semibold text-white">Publications</p>
        </div>
        <div className=" grid lg:grid-cols-2 gap-12 items-start text-white pb-20 pt-10 ">
          <p className="text-3xl font-semibold xl:w-1/2 md:w-3/4">
            Relax it’s okay to ask for help
          </p>

          <div className="text-[18px] leading-8">
            <p>11 December 2023</p>
            <br />
            <p>
              Relax, it’s ok to ask for help. Most organisations today operate
              in a highly complex matrix structure with multiple reporting lines
              and different levels of expertise requiring you sometimes to be
              vast across a number of skills.
            </p>
            <p>
              This can be overwhelming sometimes especially when you have
              multi-functional projects and your delivery is dependent on others
              as you are not able to do most of the tasks on your own. Thing is,
              the priority level of each task is different from function to
              function but each action adds up as an essential for you. More
              importantly, you need{isClicked1 ? " " : "..."}
              <span className={isClicked1 ? "showText" : "hidden"}>
                not be overwhelmed but have the ability to ask for help , that
                way, you spend less time struggling.
                <br />
                It is important to have an enabling environment that allows you
                to function in a way that fosters better collaboration. Asking
                for help should not be seen as a sign of weakness but rather,
                recognizing what you are good at and appreciating what someone
                else’s is good at.  This enables both sides to benefit and gain
                valuable experience.  The person receiving helps adds nuance and
                texture to their thinking, overcome cognitive biases and flaws
                in their logic while at the same time giving someone else an
                opportunity to shine and validate their knowledge – this could
                make someone else’s day! <br />
                In asking for help, first acknowledge that you don’t have a
                solution to a task/problem or that you can’t do it alone – be
                sure to explore possible solutions as your own first step.
                Remember, no one person can know everything, so allow yourself
                to be human. It’s also better to build a reputation to be known
                to give assistance to others. This paves the way for reciprocity
                and encourages others to reach out without incurring social
                debts or negative repercussions, making it an admirable trait. 
                Additionally, ask for help smartly, as a ‘SMART’ request (Why
                you need it, what you need, When you need it, from who do you
                need help) is easy to respond to as you never know what people
                know or how they can help until you ask. Not only will you have
                the benefit of extra advice, you will also have people to share
                your successes with.
                <br />
                An enabling work environment makes it easy to ask for help by
                encouraging the practices and setting the tone and the norms.
                However, we must take time out to say ‘thank you’ and really
                mean it to express our gratitude for the help. It’s important to
                close the loop by letting the other person know how valuable
                your help was – people appreciate recognition and follow
                through. On both sides, emotional intelligence, diplomacy,
                self-awareness and patience are required to avoid damaging
                consequences to individuals and the organization.
                <br />
                To be successful in today’s work environment, you need to ask
                for what you need as it can become a powerful tool, if employed
                strategically – save yourself and others time by asking
                insightful questions that demonstrate your curiosity,
                inquisitiveness and your interest in understanding the process
                and not just performing your step of the cycle. Two heads… Or
                more…are better than one, strong people ask for help. Avoid
                muddling through a bad situation on your own, as challenges
                presents opportunities to cultivate our network and proactively
                build relationships.
                <br />
                <span>Again, remember to frame the ‘ASK’ properly.</span>
                <span className="underline">
                  <br />
                  <br />
                  <span className="font-bold">
                    Relax it’s okay to ask for help
                  </span>
                  " is available to read here.
                </span>
              </span>
            </p>
            <button
              className=" animate-pulse text-[#EC2E57] "
              onClick={() => handleClick(1)}
            >
              {isClicked1 ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
        <span className="block h-0.5 w-1/2 animate-pulse bg-gray-600"></span>
        <div className=" grid lg:grid-cols-2 gap-12 items-start text-white py-20 ">
          <p className="text-3xl font-semibold xl:w-1/2 md:w-3/4">
            The High Maintenance Individual
          </p>

          <div className="text-[18px] leading-8">
            <p>THe High Maintenance Individual | 8 May 2021</p>
            <br />
            <p>
              Succeeding in the work place…. High Maintenance Individual The
              HMI.
            </p>
            <p>
              And it was the start of another week, as usual his normal cool
              confident self would do it again...and assuredly that was his
              plan.
            </p>
            <p>
              The day started with a drizzle....hoping it would eventually rain
              so he could have more time to day dream as a young eloquent
              achiever with his  personality sitting on the board with other
              directors guiding colleagues in the right direction.  The thought
              of the job to be done was not a bother and didn’t even feature in
              his thought process. Strange, right? He challenged himself
              {isClicked2 ? " " : "..."}
              <span className={isClicked2 ? "showText" : "hidden"}>
                in the semi-conscious state though not expecting an answer. It
                continued to drizzle but a few hours earlier he had slept off on
                a call due to exhaustion; his phone had fallen off his ear into
                the hollow created by the pillow between his head and his
                shoulder.
                <br /> It continued to drizzle...but this time he was been
                nudged to consciousness. First from a gentle snooze to a more
                persistent noise that seemed to be ringing only in his right ear
                determined to impair his hearing leaving him no option but to
                reach for the phone, now propping himself on one elbow, he
                looked out the window. It was dawn, the timing was right, the
                day felt perfect, already. His role requires that he equips
                himself with lots of industry knowledge. As usual, this was one
                of the unwritten necessities and skills required which was not
                officially written in any document. It was an expectation that
                came not only with his acclaimed wealth of experience but with
                his networking circle which he flaunts very often.  His
                subconscious reminded him constantly about pending tasks, email
                reminders were declined and catch up meetings were postponed. He
                sure had good intentions with the hope of getting things done,
                the problem was, he just never got round to doing them.
                <br />
                The weekend had taken its toll, not that it would have been used
                judiciously otherwise. Late Friday night with friends,
                definitely not colleagues – they had their own space, lunch time
                and around the office corridors. He was in particular not one
                who kept late nights just to hang out. Networking was the
                watchword as he derived pleasure in assuming he was smart. His
                circle of friends were elite and very much senior managers in
                their different worlds. He sure was purposeful but in a
                different kind of way.  There was a constant struggle within him
                to balance work and life more like wanting to eat your cake and
                have it always. Suddenly, social life preceded his work life. It
                was a source of pride to be at events where people he looked up
                to and inspired him were present which was not a bad idea except
                that he claimed they were all his mentors.  In fact he attended
                events based on his knowledge of who else was going to be there.{" "}
                <br /> The real issue being catching up with the Joneses. His
                personality was not in doubt and he had a way with colleagues
                irrespective of gender. A little chat here and there down the
                corridor and he was brought to speed with happenstances. This
                had sustained him thus far but apparently no longer good enough
                to keep him seated at his position in the office. He needed to
                get his hands dirty with details The game was fast changing
                around him and he wasn’t catching up. Motherhood statements no
                longer held pieces of business challenges that had fallen apart.
                Body languages changed fast in the board room as the day
                gradually drifted from drizzle to sunny. The chairman shifted in
                his chair and he knew he was in for the day. For the first time
                he realized he was sweating and looked around the room for a
                reason. His gaze could only settle on the afternoon sun that
                seemed to smile so reassuring for a bright and perfect day, just
                as he had envisaged in the morning.
                <br />
                He certainly has become an “HMI” said the Chairman.  Eyes not
                only rolled this time but were long fixated. Yes, he was right.
                Not the sun but him was the cynosures of all eyes. The “High
                Maintenance Individual” who was no longer adding value but had
                become a cost centre being managed probably only by his line
                manager. It dawned on him that he lacked content and had always
                known what needs to be done. The inner voice reminded constantly
                but he never got round to optimal performance. He was content at
                maintaining statusquo at 50% supported with charisma. The looks
                around him had become disappointing, with a few head movements
                from left to right in pity of how he had degenerated. He knew
                the drill.....feedback sessions with the boss, blahdey, blahdey,
                blah. He needed to salvage the situation and he stayed positive.
                <br />
                <span>With resolve, the following became his watchword:</span>
                <br />
                <span>
                  ·        Prepare for meetings – be as informed as can be with
                  a personal commitment to add value
                </span>
                <br />
                <span>
                  ·        Give the right information – be granular and analytic
                  if required as business decisions are made on the information.
                </span>
                <br />
                <span>
                  ·        Seek Alignment – sound out colleagues and get
                  feedback on your work before it is published. This gives the
                  business confidence More like near misses, the triggers had
                  always been there, all around....it only required a little bit
                  of attention to swing it in the right direction.
                </span>
                <br />
                <br />
                <span className="underline">
                  <span className="font-bold">
                    The High Maintenance Individual
                  </span>
                  " is available to read here..
                </span>
                "
              </span>
            </p>
            <button
              className=" animate-pulse text-[#EC2E57] "
              onClick={() => handleClick(2)}
            >
              {isClicked2 ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </section>
      {/* <section
        className=" items-center justify-center flex flex-col  "
        style={{
          backgroundImage: "url('./assets/images/newBook.jpg')",
          width: "100%",
          height: "679px",
          backgroundSize: "cover",
        }}
      >
        <Link href="/">
          <div className="text-white text-center font-bold text-2xl lg:text-4xl ">
            Order My New Book
          </div>
        </Link>
      </section>
      <Image
        src="/assets/images/newBook.jpg"
        width={9999}
        height={679}
        // className="h-[80vh] w-full object-cover"
      /> */}

      <div className="relative">
        <Image
          src="/assets/images/newBook.jpg"
          width={9999}
          height={679}
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <Link href="/" className="">
            {/* border-t-4 border-gray-300 rounded-full animate-spin h-7 w-7 */}
            <div className="text-white hover:text-[#EC2E57] text-center font-bold text-2xl md:text-4xl lg:text-4xl ">
              Order My New Book
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pubications;
