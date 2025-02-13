type IconButtonProps = {
  icon: string;
  title?: string;
  onClick: () => void;
};

export default function IconButton({ icon, title, onClick }: IconButtonProps) {
  return (
    <button
      title={title}
      onClick={onClick}
      className="bg-primary-orange rounded-lg w-[34px] h-[34px] flex items-center justify-center hover:opacity-75 transition transform duration-500 hover:-translate-y-0.5 cursor-pointer"
    >
      <img src={icon} alt="notifications" />
    </button>
  );
}
