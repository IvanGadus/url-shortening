"use server";
const handleForm = async (formData: FormData) => {
	const input = formData.get("link");
	console.log(input);
};
export default handleForm;
