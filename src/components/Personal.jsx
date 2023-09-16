import React, { useRef, useState } from "react";
import profil from "../assets/profil1.jfif";
import upload from "../assets/upload.svg";

const Personal = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    number: "",
    adress: "",
    cover: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const [validName, setValidName] = useState(true);
  const [validLastName, setValidLastName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validNumber, setValidNumber] = useState(true);
  const [validAddress, setValidAddress] = useState(true);
  const form = useRef();
  const fileInputRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    switch (name) {
      case "name":
        setValidName(/^[a-zA-Z]{1,10}$/.test(value));
        break;
      case "lastName":
        setValidLastName(/^[a-zA-Z]{1,10}$/.test(value));
        break;
      case "email":
        setValidEmail(
          /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)
        );
        break;
      case "number":
        setValidNumber(/^(\+216\s)?[2579]\d{7}$/.test(value));
        break;
      case "adress":
        setValidAddress(/^[a-zA-Z0-9\s,'.-]+$/.test(value));
        break;
      default:
        break;
    }
  };

  const handleFileSelect = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.type === "application/pdf") {
        setSelectedFile(file);
        const fileNameInput = document.getElementById("link");
        if (fileNameInput) {
          const fileSizeKB = (file.size / 1024).toFixed(2);
          const fileNameWithSize = `${file.name} (${fileSizeKB} KB)`;
          fileNameInput.value = fileNameWithSize;
        }
      } else {
        window.alert("Please select a PDF file.");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid =
      validName && validLastName && validEmail && validNumber && validAddress;

    if (isFormValid) {
      window.alert(
        `Name: ${formData.name} \n lastName: ${formData.lastName} \n email : ${formData.email} \n  phone : ${formData.number}  `
      );

      console.log("Form data is valid:", formData);
    } else {
      console.error("Form submission failed due to invalid input.");
    }
  };

  return (
    <>
      <div className="">
        <div className="mx-40 my-10 flex h-[150vh] flex-col rounded-xl bg-gray-100 py-8 px-[5%] shadow-lg ">
          <div className="font-segoe text-[25px] font-[550]  text-darkBlue">
            <h3>Personal informations</h3>
          </div>
          <div className="py-14 ">
            <h1 className="text-[17px] font-serif font-[100] text-indigo-300">
              Profile Picture
            </h1>
            <img
              className="py-5"
              src={profil}
              alt="profilPIC"
              height="150px"
              width="150px"
            />
            <div>
              <div className="flex flex-col lg:gap-x-8 lg:flex-row">
                <form
                  ref={form}
                  className="space-y-8 w-full max-w-[780px]"
                  onSubmit={handleSubmit}
                >
                  <div className="flex gap-8">
                    <div>
                      <label
                        htmlFor="name"
                        className="block my-3 text-lg  text-indigo-500 text-[10px] font-segoe font-[200px]"
                      >
                        Name <span className="text-yellow">*</span>{" "}
                        <input
                          id="name"
                          className={`mt-3 flex min-h-minH items-center rounded-[10px] border-[1px] border-inputBorderColor bg-white border-y-gray-300 px-5 py-2 ${
                            !validName ? "border-red-500" : ""
                          }`}
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="name"
                          required
                        />
                        {!validName && (
                          <p className="text-red-500 text-xs mt-1">
                            Please enter a valid name (letters only, max 10
                            characters).
                          </p>
                        )}
                      </label>
                    </div>
                    <div>
                      <label
                        htmlFor="last_name"
                        className="block my-3 text-lg  text-indigo-500 text-[10px] font-segoe font-[200px]"
                      >
                        LastName <span className="text-yellow">*</span>{" "}
                        <input
                          id="last_name"
                          className={`mt-3 flex min-h-minH items-center rounded-[10px] border-[1px] border-inputBorderColor bg-white border-y-gray-300 px-5 py-2 ${
                            !validLastName ? "border-red-500" : ""
                          }`}
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="lastName"
                          required
                        />
                        {!validLastName && (
                          <p className="text-red-500 text-xs mt-1">
                            Please enter a valid name (letters only, max 10
                            characters).
                          </p>
                        )}
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div>
                      <label
                        htmlFor="email"
                        className="block my-3 text-lg  text-indigo-500 text-[10px] font-segoe font-[200px]"
                      >
                        Email{" "}
                        <span className="text-red-500 text-xs mt-1">*</span>{" "}
                        <input
                          id="email"
                          className={`mt-3 flex min-h-minH items-center rounded-[10px] border-[1px] border-inputBorderColor bg-white border-y-gray-300 px-5 py-2 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                            !validEmail ? "border-red-500" : ""
                          }`}
                          placeholder="name@flowbite.com"
                          required
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {!validEmail && (
                          <p className="text-red-500 text-xs mt-1">
                            Please enter a valid email address.
                          </p>
                        )}
                      </label>
                    </div>
                    <div>
                      <label
                        htmlFor="number"
                        className="block my-3 text-lg  text-indigo-500 text-[10px] font-segoe font-[200px]"
                      >
                        Phone Number <span className="text-yellow">*</span>{" "}
                        <input
                          id="number"
                          className={`mt-3 flex min-h-minH items-center rounded-[10px] border-[1px] border-inputBorderColor bg-white border-y-gray-300 px-5 py-2 ${
                            !validNumber ? "border-red-500" : ""
                          }`}
                          type="text"
                          name="number"
                          value={formData.number}
                          onChange={handleChange}
                          placeholder="+216"
                          required
                        />
                        {!validNumber && (
                          <p className="text-red-500 text-xs mt-1">
                            Please enter a valid phone number (e.g., +216 20 000
                            000).
                          </p>
                        )}
                      </label>
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="number"
                      className="block my-3 text-lg  text-indigo-500 text-[10px] font-segoe font-[200px]"
                    >
                      Adress <span className="text-yellow">*</span>{" "}
                      <input
                        className={`mt-3 flex w-8/12  min-h-min items-center rounded-[10px] border-[1px] border-inputBorderColor bg-white border-y-gray-300 px-5 py-2 ${
                          !validAddress ? "border-red-500" : ""
                        }`}
                        type="text"
                        name="adress"
                        value={formData.adress}
                        onChange={handleChange}
                        placeholder="enter you adress"
                        required
                      />
                      {!validAddress && (
                        <p className="text-red-500 text-xs mt-1">
                          Please enter a valid address with letters, numbers,
                          and common punctuation.
                        </p>
                      )}
                    </label>
                  </div>

                  <div className="">
                    <label
                      htmlFor="number"
                      className="block my-3 text-lg  text-indigo-500 text-[10px] font-segoe font-[200px]"
                    >
                      {" "}
                      CV
                    </label>

                    <div
                      className="flex h-[40px] w-[110px] items-center justify-center rounded-[6px] border-[1px] border-[solid] border-[#ABE4EA] bg-white  text-blue-300 font-serif  "
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <img
                        src={upload}
                        className="mr-2 h-6 w-6 rotate-180 font-bold"
                        style={{ fill: "#ABE4EA" }}
                      />
                      Upload
                      <input
                        type="file"
                        id="avatar-upload"
                        accept=".pdf"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                      />
                    </div>
                    <div className="relative mt-4">
                      <div className="selected-file">
                        {selectedFile && (
                          <>
                            <span
                              className="text-sky-950 font-[10px] font-segoe text-xs"
                              style={{
                                flex: 1,
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {selectedFile.name} (
                              {(selectedFile.size / 1024).toFixed(2)} KB)
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="  mx-60">
                    <button
                      type="submit"
                      className="focus:outline-none text-sky-950 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-5 mb-3 dark:focus:ring-yellow-900 bg-yellow "
                    >
                      Apply Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
