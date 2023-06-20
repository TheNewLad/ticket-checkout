interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-md px-4 py-1.5 uppercase ${props.className}`}
    >
      {props.children}
    </button>
  );
}
