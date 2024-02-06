import {
  Lock,
  MessageCircle,
  MousePointerSquare,
  PencilLine,
} from "lucide-react";

const Features = () => {
  return (
    <div className="py-20">
      <div className="text-center text-4xl md:text-6xl font-medium pb-16">
        Features
      </div>
      <div className="md:flex px-10 md:px-0 md:space-y-0 items-center justify-center md:space-x-10">
        <div className="md:w-1/6 space-y-4">
          <div className="flex items-center gap-6">
            <div className="bg-black h-12 w-12 rounded-full items-center justify-center flex">
              <MousePointerSquare className="text-white h-6 w-6" />
            </div>
            <div className="text-xl font-medium">Specializations</div>
          </div>
          <div className="w-full h-20">
            Stay ahead with advanced, specialized courses tailored to emerging
            technologies.
          </div>
        </div>

        <div className="md:w-1/6 space-y-4">
          <div className="flex items-center gap-6">
            <div className="bg-black h-12 w-12 rounded-full items-center justify-center flex">
              <PencilLine className="text-white h-6 w-6" />
            </div>
            <div className="text-xl font-medium">Interactive</div>
          </div>
          <div className="w-full h-20">
            Immerse yourself in experiential learning with interactive virtual
            labs.
          </div>
        </div>

        <div className="md:w-1/6 space-y-4">
          <div className="flex items-center gap-6">
            <div className="bg-black h-12 w-12 rounded-full items-center justify-center flex">
              <MessageCircle className="text-white h-6 w-6" />
            </div>
            <div className="text-xl font-medium">AI Assistants</div>
          </div>
          <div className="w-full h-20">
            Track your progress, and suggest personalized learning paths.
          </div>
        </div>

        <div className="md:w-1/6 space-y-4">
          <div className="flex items-center gap-6">
            <div className="bg-black h-12 w-12 rounded-full items-center justify-center flex">
              <Lock className="text-white h-6 w-6" />
            </div>
            <div className="text-xl font-medium">Upskilling</div>
          </div>
          <div className="w-full h-20">
            Access micro-courses, workshops, and bite-sized learning modules to
            keep your skills sharp and adapt to the rapidly evolving tech
            landscape.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
