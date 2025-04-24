import { courseMaterials } from "../../../../data/db";

export default function Materials() {
  return (
    <main className="order-2 lg:order-2 bg-bg sm:pb-9">
      <section className="pt-8 sm:py-8">
        <h2 className="text-2xl font-bold mb-6">Course Materials</h2>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 text-gray-600">
          <div className="xl:col-span-5">
            <div className="divide-y divide-gray-200">
              <div className="py-3 flex justify-between items-center">
                <span className="ml-2">Duration :</span>
                <span>{courseMaterials.duration}</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="ml-2">Lessons :</span>
                <span>{courseMaterials.lessons}</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="ml-2">Enrolled :</span>
                <span>{courseMaterials.enrolled}</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="ml-2">Language :</span>
                <span>{courseMaterials.language}</span>
              </div>
            </div>
          </div>
          <div className="xl:col-span-5 xl:col-start-8">
            <div className="divide-y divide-gray-200">
              <div className="py-3 flex justify-between items-center">
                <span className="ml-2">Topics :</span>
                <span>{courseMaterials.topics}</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="ml-2">Price :</span>
                <span>{courseMaterials.price}</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="ml-2">Instructor :</span>
                <span>{courseMaterials.instructor}</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="ml-2">Certificate :</span>
                <span>{courseMaterials.certificate}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
