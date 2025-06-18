import { useNavigate } from "react-router-dom";

export const ContactUs = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("----");
    return navigate("/");
  }


  return (
    <>
    <div className="component">Contact America</div>
    <button onClick={handleSubmit}>Submit Form</button>
    </>
  )
}
