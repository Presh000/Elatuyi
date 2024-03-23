import Image from "next/image";

const Home = () => {
  return (
    <section className="app-section">
      <section className="w-full flex-center flex-col  px-5  ">
        <div className=" grid lg:grid-cols-2 gap-12 items-center ">
          <Image
            src="/assets/images/omotola1.svg"
            width={609}
            height={679}
            className="max-lg:w-[999px]"
          />
          <div>
            <p className="home_text text-[18px] md:text-[21px] lg:text-[18px] xl:text-[20px] leading-7 md:leading-8  lg:leading-7 xl:leading-8  ">
              Omotola Bamigbaiye is a tenacious, passionate marketer who loves
              turning bold ideas into impactful & memorable experiences.
            </p>
            <p className="home_text text-[18px] md:text-[21px] lg:text-[18px] xl:text-[20px] leading-7 md:leading-8  lg:leading-7 xl:leading-8">
              she has worked in various companies occupying senior marketing
              roles, the companies include Reckitt Benckiser, Guinness and
              Pladis global.
            </p>
            <p className="home_text text-[18px] md:text-[21px] lg:text-[18px] xl:text-[20px] leading-7 md:leading-8  lg:leading-7 xl:leading-8">
              Tola: I am an energetic, visionary and passionate expert in the
              crafting and implementation of consumer-centric and resonant
              marketing strategies. A visionary leader, team player, strong
              influencer with experience in global FMCG & Financial sectors. I
              also have an impressive track record in leading targeted consumer
              activations through purposeful marketing.
            </p>
            <p className="home_text text-[18px] md:text-[21px] lg:text-[18px] xl:text-[20px] leading-7 md:leading-8  lg:leading-7 xl:leading-8">
              she is currently working on an autobiography to be released april
              3rd.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
