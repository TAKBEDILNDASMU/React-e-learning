import Analisis from "../../assets/analisis.png";
import Button from "./Button";

const Card = ({ title, desc, isEdit, buttonLabel, to, isCardMurid }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img src={Analisis} alt="analisis" />
      </a>
      <div className="mb-3 p-3">
        <h5 className="text-indigo-500 font-semibold">{title}</h5>
        <p className="font-normal text-gray-700 ">{desc}</p>
        {isEdit ? (
          <div className="flex justify-between mt-3">
            <Button isEdit={true} label="Edit Tugas" to="/guru/tugas/edit/1" />
            <Button isDelete={true} label="Hapus Tugas" onDelete={true} />
          </div>
        ) : (
          <div className="mt-3 flex justify-between">
            <Button label={buttonLabel} isInfo={true} to={to} />
            {isCardMurid && <Button label="Download PDF" isDelete={true} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
