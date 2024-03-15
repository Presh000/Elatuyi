import Image from "next/image";

const Card = ({ quote, authorName, authorRole, auathorImageSrc }) => {
  return (
    <div className="flex flex-col justify-between items-start border-[#E19937] border-2 px-8 py-10 text-[20px] md:text-[23px] leading-8">
      <p className="pb-10">“{quote}”</p>
      <div className="flex gap-x-4 items-end">
        <Image
          src={auathorImageSrc}
          width={80}
          height={80}
          className="object-contain rounded-lg"
        />
        <div className="text-sm leading-5 sm:text-lg">
          <p>{authorName}</p>
          <p>{authorRole}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
