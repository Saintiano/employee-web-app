import Form_Input_types from "../types/form_input_type"

interface InputProps {
    properties: Form_Input_types
}

const InputForm = ( {properties} : InputProps) => {
    return (
      <div className="flex flex-col w-full gap-2">
        <div className="flex justify-between">
          <label htmlFor={properties.id} className="font-semibold capitalize">
            {properties.labels}
          </label>
        </div>
        <input
          id={properties.id}
          type={properties.type}
          className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
          placeholder={properties.placeholder}
        />
      </div>
    )
}

export default InputForm;