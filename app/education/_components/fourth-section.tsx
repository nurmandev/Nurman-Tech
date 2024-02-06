import Image from "next/image";

const FourthSection = () => {
  return (
    <div className="bg-[#111019]">
      <div className="md:text-center items-center flex flex-col py-20 md:py-0 px-10">
        <div className="text-3xl md:text-6xl flex md:justify-center font-medium pb-10 text-[#f1f0f3]">
          We crafting exceptional applications that reimagine user interaction.
        </div>
        <div className="md:flex items-center justify-center md:space-x-16 pt-10 md:pt-20">
          <Image
            src={"/images/undraw-1.svg"}
            alt="image"
            width={600}
            height={600}
            className="
         
                p-20
                "
          />

          <Image
            src={"/images/undraw-1.svg"}
            alt="image"
            width={600}
            height={600}
            className="
                hidden
                md:block
                p-20
                "
          />

          <Image
            src={"/images/undraw-1.svg"}
            alt="image"
            width={600}
            height={600}
            className="
            hidden
                md:block
                p-20
                "
          />
        </div>
      </div>

      <div
        className="
        px-10
        space-y-10 
        md:space-y-0 
        md:flex 
        justify-evenly
   
        md:pt-20
    
        mx-auto
        
        "
      >
        <div>
          <div className="md:text-3xl pb-4 text-lg text-[#f1f0f3] font-medium">
            School Management
          </div>
          <div className="text-[#bbb6c6] text-lg leading-8 w-150 p-1">
            A digital tool that efficiently handles student data, attendance,
            grades, schedules, and administrative tasks in schools, promoting
            better organization and communication.
          </div>
        </div>

        <div>
          <div className="md:text-3xl pb-4 text-lg text-[#f1f0f3] font-medium">
            Digital Book Store
          </div>
          <div className="text-[#bbb6c6] text-lg leading-8 w-150 p-1">
            An online platform offering a diverse range of digital books for
            instant purchase and access, enhancing reading convenience across
            various devices.
          </div>
        </div>

        <div>
          <div className="md:text-3xl pb-4 text-lg text-[#f1f0f3] font-medium">
            Management Application
          </div>
          <div className="text-[#bbb6c6] text-lg leading-8 w-150 p-1">
            Software designed to streamline specific business processes,
            offering customizable tools for tasks. project management, inventory
            control, and data analysis, boosting organizational efficiency and
            decision-making.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
