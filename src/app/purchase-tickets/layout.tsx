export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"flex flex-col items-center px-[10vw]"}>
      <h1 className={"my-5 text-4xl font-bold"}>Purchase Tickets</h1>
      <div className={"mb-5 flex justify-between"}>
        <Step step={1} active={true} text={"Select A Show"} />
        <Step step={2} active={false} text={"Select Ticket Quantity"} />
        <Step step={3} active={false} text={"Checkout"} />
      </div>
      {children}
    </div>
  );
}

// TODO: Move this to component directory
interface StepProps {
  step: number;
  active: boolean;
  text: string;
}
const Step = ({ step, active, text }: StepProps) => {
  return (
    <div className={"mx-2 flex items-center"}>
      <Label step={step} active={active} />
      <p className={`${active ? "" : "hidden"}`}>{text}</p>
    </div>
  );
};

const Label = ({ step, active }: Omit<StepProps, "text">) => {
  return (
    <div className={"mr-2 h-5  w-5"}>
      <svg
        viewBox={"0 0 24 24"}
        className={`${active ? "fill-blue-600" : "fill-gray-400"}`}
      >
        <circle cx="12" cy="12" r="12" />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className={"fill-white"}
        >
          {step}
        </text>
      </svg>
    </div>
  );
};
