import Image from "next/image";

const FourthSection = () => {
  return (
    <div className="md:py-10">
      <div className="px-10 md:text-center space-y-4">
        <div className="text-3xl md:text-7xl md:justify-center font-medium pt-20">
          Amplify the speed of tech information exchange.
        </div>
        <p className="text-xl md:text-3xl font-light md:w-3/4 md:mx-auto text-[#3b394e] leading-normal">
          Rapidly advance tech information flow.
        </p>
        <div className="py-10 md:pt-20">
          <Image
            src={"/images/undraw-1.svg"}
            alt="image"
            width={1920}
            height={1080}
            className="
                object-cover
                rounded-[30px]
                md:rounded-[60px]
                md:w-3/4
                md:mx-auto
                w-full
                md:p-20
                "
          />
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
