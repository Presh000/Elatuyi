import Image from "next/image";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <section className="  flex flex-col shrink-0 sm:px-20 md:px-32 lg:px-58 px-5 py-10">
        <div className=" grid lg:grid-cols-2 gap-5 items-center ">
            {/* grid lg:grid-cols-2 lg:gap-36 gap-4 items-center justify-center */}
          <div>
            <Image
              src="/assets/images/omotola1.svg"
              width={609}
              height={679}
              className="object-contain"
            />
          </div>
          <div>
            <p className="home_text text-[13px] md:text-[14] xl:text-[15px] sm:leading-3 md:leading-5  lg:leading-5  ">
              Omotola Elatuyi is a tenacious, passionate marketer who loves
              turning bold ideas into impactful & memorable experiences.
            </p>
            <p className="home_text">
              she has worked in various companies occupying senior marketing
              roles, the companies include Reckitt Benckiser, Guinness and
              Pladis global.
            </p>
            <p className="home_text">
              {" "}
              Tola: I am an energetic, visionary and passionate expert in the
              crafting and implementation of consumer-centric and resonant
              marketing strategies. A visionary leader, team player, strong
              influencer with experience in global FMCG & Financial sectors. I
              also have an impressive track record in leading targeted consumer
              activations through purposeful marketing.
            </p>
            <p className="home_text">
              she is currently working on an autobiography to be released april
              3rd.
            </p>
          </div>
          {/* <Form /> */}
        </div>
      </section>
    </section>
  );
};

export default Home;
