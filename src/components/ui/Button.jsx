import { Link } from "react-router-dom";

const Button = ({ label, isEdit, isDelete, isInfo, to, onDelete }) => {
  let buttonColor;

  if (isEdit) {
    buttonColor = "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300";
  } else if (isDelete) {
    buttonColor = "bg-red-700 hover:bg-red-800 focus:ring-red-300";
  } else if (isInfo) {
    buttonColor =
      "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600";
  }

  const handleDelete = () => {
    alert("Tugas berhasil dihapus");
  };

  if (onDelete) {
    return (
      <Link
        onClick={handleDelete}
        type="submit"
        className={`flex w-fit justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${buttonColor}`}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      to={to}
      type="submit"
      className={`flex w-fit justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${buttonColor}`}
    >
      {label}
    </Link>
  );
};

export default Button;
