const ServiceCard = ({ serviceTitle, serviceImg }) => {
  return (
    <>
      {/* <!-- Card --> */}
      <div className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40">
        <div className="aspect-w-12 aspect-h-1">
          <img
            className=" object-cover rounded-xl "
            src={serviceImg}
            alt="Image Description"
          />
        </div>
        <div className="my-6">
          <h3 className="text-xl text-center font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
            {serviceTitle}
          </h3>
        </div>
      </div>
      {/* <!-- End Card --> */}
    </>
  );
};

export default ServiceCard;
