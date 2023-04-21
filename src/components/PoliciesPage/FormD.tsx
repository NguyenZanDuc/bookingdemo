import { Radio } from "@mui/material";
import DivClick from "../ui/DivClick/DivClick";

type Props = {}

const FormD = (props: Props) => {
    const options = [
        { value: 'không', label: 'không' },
        { value: 'có, có trả phí', label: 'có, có trả phí' },
        { value: 'khác', label: 'khác' },
      ];
  return (
    <DivClick id={"#formDPolicies"} className=" border-[2px]  flex flex-col gap-4 rounded-md p-4 bg-white">
        <p className="text-xl">Trẻ em</p>
        <p className='p-2 text-sm text-gray-500'>Quý vị có cho trẻ em đi kèm không? (Quý vị có thể nêu rõ tuổi và mức giá sau)</p>
        <div className="flex gap-2">
            <button className="flex items-center justify-center gap-2 px-4  text-sm border-[0.6px] rounded-md border-gray-400">
                <Radio name="1"/>
                <p>Có</p>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 text-sm border-[0.6px] rounded-md border-gray-400">
                <Radio name="1"/>
                <p>Không</p>
            </button>
        </div>
    </DivClick>
  )
}

export default FormD