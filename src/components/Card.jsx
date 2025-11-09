function Card({ name, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white border shadow-black hover:shadow-md rounded-xl p-4 transition-transform transform hover:scale-105"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-32 object-contain mx-auto"
      />
      <h3 className="text-center capitalize mt-2 font-semibold text-gray-700">
        {name}
      </h3>
    </div>
  );
}

export default Card;
