type PrimaryButtonTypes = {
  label: string;
  handleEvent: () => void;
};

export default function PrimaryButton({
  label,
  handleEvent,
}: PrimaryButtonTypes) {
  return (
    <button
      onClick={handleEvent}
      className="cursor-pointer bg-primary-orange text-white text-sm rounded-md hover:opacity-80 h-[34px] flex items-center px-6"
    >
      {label}
    </button>
  );
}
