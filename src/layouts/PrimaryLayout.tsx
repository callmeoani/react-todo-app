import Header from "../widgets/Header";

export default function PrimaryLayout() {
  return (
    <div className="flex flex-col overflow-hidden">
      <div>
        <Header />
      </div>
      <div className="">
        <div>Side bar</div>
        <div>Main content</div>
      </div>
    </div>
  );
}
