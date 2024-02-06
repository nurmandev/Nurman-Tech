import Image from "next/image";

const Quote = () => {
  return (
    <div className="py-10 bg-[#111019]">
      <>
        <div
          className="
         bg-[#1b224b]
          md:w-3/5
          mx-8
          md:mx-auto
           rounded-[60px]
            md:rounded-[80px]
             p-10
              md:p-20 
               flex 
               flex-col
                md:items-center
                 space-y-10
                   mb-10 "
        >
          <div>
            <Image
              src="/logos/logoipsum-297.svg"
              alt="logo"
              width={500}
              height={500}
              className="
                 w-40
                    "
            />
          </div>
          <div className="text-lg font-medium md:text-3xl text-[#e3f3ff] md:text-center md:w-3/5">
            &quot;Success is not just about creating great products; it&apos;s about
            transforming how people experience and interact with them.&quot;
          </div>

          <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
            <div className="h-10 w-12 md:w-20 md:h-10">
              <Image
                src="/images/undraw-3.svg"
                alt="image"
                width={500}
                height={500}
                className="rounded-full
                        object-cover
                        h-full
                        md:h-12
                        md:w-12
                        "
              />
            </div>
            <div className="text-[#e3f3ff]">
              <div className="font-medium">Mustapha</div>
              <div className="text-sm">CEO Ibn Jamal School</div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Quote;
