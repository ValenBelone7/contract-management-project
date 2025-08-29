import FormContrato from "../functions/FormContrato";

export default function HeroContracts(props) {
  return (
    <div className="bg-gray-900 relative isolate px-6 py-32 pb-20 lg:px-8 min-h-screen">
      <FormContrato {...props} />
    </div>
  );
}