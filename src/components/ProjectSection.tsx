import { GoArrowUpRight } from "react-icons/go";

const ProjectSection = () => {
  return (
    <section className="w-full bg-background py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text content on the left */}
        <div className="flex-1 space-y-4">
          <a
            href="https://litgrades.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wider text-foreground/80 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-foreground hover:text-foreground transition-colors"
          >
            <GoArrowUpRight className="w-4 h-4" />
            <span>LITGRADES/</span>
          </a>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            LitGrades is an AI-powered study companion that generates flashcards,
            worksheets, quizzes, and study notes on demand. Type what you want to
            learn, and LitGrades curates focused learning materials so you can
            spend less time organizing and more time actually studying.
          </p>
        </div>

        {/* Image on the right */}
        <div className="flex-1 flex justify-center">
          <img
            src="/litgrade.png"
            alt="LitGrades project preview"
            className="w-full max-w-2xl rounded-2xl shadow-xl border border-border object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
