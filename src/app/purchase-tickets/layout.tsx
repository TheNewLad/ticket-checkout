import { Step } from "@/components/Step";

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
