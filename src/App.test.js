import { render, fireEvent } from "@testing-library/react";
import Contact from "./components/Contact";

test("Form submits successfully when filled correctly", () => {
  const formData = {
    formName: "John Doe",
    formEmail: "johndoe@jd.com",
    message: "Testing testing",
  };

  const setFormName = jest.fn();
  const setFormEmail = jest.fn();
  const setMessage = jest.fn();
  const alert = jest.spyOn(window, "alert");
  alert.mockImplementation(() => {});
  const { getByLabelText, getByText } = render(
    <Contact
      setFormName={setFormName}
      setFormEmail={setFormEmail}
      setMessage={setMessage}
    />
  );

  fireEvent.change(getByLabelText(/Name/i), {
    target: { value: formData.formName },
  });
  fireEvent.change(getByLabelText(/Email address/i), {
    target: { value: formData.formEmail },
  });
  fireEvent.change(getByLabelText(/Message/i), {
    target: { value: formData.message },
  });

  fireEvent.click(getByText("Submit"));

  expect(alert).toHaveBeenCalledWith(
    "Thank you for contacting us, we will get back to you soon!"
  );
});

test("Form displays error message when message field is empty", () => {
  const setFormName = jest.fn();
  const setFormEmail = jest.fn();
  const setMessage = jest.fn();
  const handleSubmit = jest.fn();
  const alert = jest.spyOn(window, "alert");

  const { getByText } = render(
    <Contact
      setFormName={setFormName}
      setFormEmail={setFormEmail}
      setMessage={setMessage}
    />
  );
  fireEvent.click(getByText("Submit"));

  expect(setFormName).not.toHaveBeenCalled();
  expect(setFormEmail).not.toHaveBeenCalled();
  expect(setMessage).not.toHaveBeenCalled();
  expect(handleSubmit).not.toHaveBeenCalled();
  expect(alert).not.toHaveBeenCalled();
  expect(getByText("Message field cannot be empty")).toBeInTheDocument();
});
