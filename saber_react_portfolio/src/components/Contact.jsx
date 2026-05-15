import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateEmail = (emailValue) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  const validateField = (fieldName, value) => {
    let error = "";

    if (fieldName === "name") {
      if (!value.trim()) {
        error = "Required";
      }
    } else if (fieldName === "email") {
      if (!value.trim()) {
        error = "Required";
      } else if (!validateEmail(value)) {
        error = "Invalid email address";
      }
    } else if (fieldName === "message") {
      if (!value.trim()) {
        error = "Required";
      } else if (value.trim().length < 25) {
        error = "Must be at least 25 characters";
      }
    }

    return error;
  };

  const handleBlur = (fieldName) => {
    setTouched({ ...touched, [fieldName]: true });
    const error = validateField(fieldName, fieldName === "name" ? name : fieldName === "email" ? email : message);
    setErrors({ ...errors, [fieldName]: error });
  };

  const handleChange = (fieldName, value) => {
    if (fieldName === "name") setName(value);
    else if (fieldName === "email") setEmail(value);
    else if (fieldName === "message") setMessage(value);

    if (touched[fieldName]) {
      const error = validateField(fieldName, value);
      setErrors({ ...errors, [fieldName]: error });
    }
  };

  const submitToServer = async () => {
    setIsLoading(true);
    
    // Simulate server delay (2-3 seconds)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // 50% chance of success
    const isSuccess = Math.random() < 0.5;
    
    if (isSuccess) {
      const firstName = name.split(" ")[0];
      setAlert({
        type: "success",
        title: "All good!",
        description: `Thanks for your submission ${firstName}, we will get back to you shortly!`
      });
      setName("");
      setEmail("");
      setMessage("");
      setTouched({});
      setErrors({});
    } else {
      setAlert({
        type: "error",
        title: "Oops",
        description: "Something went wrong, please try again later"
      });
    }
    
    setIsLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameError = validateField("name", name);
    const emailError = validateField("email", email);
    const messageError = validateField("message", message);

    const newErrors = {
      name: nameError,
      email: emailError,
      message: messageError,
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (!nameError && !emailError && !messageError) {
      submitToServer();
    }
  };

  return (
    <section id="contact" className="w-full px-4 py-10 pt-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
          Contact Me
        </h2>

        <div className="max-w-2xl mx-auto rounded-2xl border border-slate-800 bg-slate-950/95 p-8 shadow-xl backdrop-blur-lg">
          {alert && (
            <div className={`mb-6 rounded-2xl border px-5 py-4 text-sm shadow-inner ${
              alert.type === "success"
                ? "border-green-500/40 bg-green-500/10 text-green-200 shadow-green-500/10"
                : "border-red-500/40 bg-red-500/10 text-red-200 shadow-red-500/10"
            }`}>
              <p className="font-medium">{alert.title}</p>
              <p className={`mt-1 ${alert.type === "success" ? "text-green-300" : "text-red-300"}`}>
                {alert.description}
              </p>
            </div>
          )}

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => handleChange("name", e.target.value)}
                onBlur={() => handleBlur("name")}
                disabled={isLoading}
                className={`w-full rounded-2xl bg-slate-800 text-slate-300 placeholder:text-slate-500 px-4 py-3 focus:outline-none transition-all disabled:opacity-50 ${
                  touched.name && errors.name
                    ? "border-2 border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border border-slate-600 focus:ring-2 focus:ring-cyan-500"
                }`}
              />
              {touched.name && errors.name && (
                <p className="text-red-500 text-sm mt-2">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => handleChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                disabled={isLoading}
                className={`w-full rounded-2xl bg-slate-800 text-slate-300 placeholder:text-slate-500 px-4 py-3 focus:outline-none transition-all disabled:opacity-50 ${
                  touched.email && errors.email
                    ? "border-2 border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border border-slate-600 focus:ring-2 focus:ring-cyan-500"
                }`}
              />
              {touched.email && errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                rows="5"
                value={message}
                onChange={(e) => handleChange("message", e.target.value)}
                onBlur={() => handleBlur("message")}
                disabled={isLoading}
                className={`w-full rounded-2xl bg-slate-800 text-slate-300 placeholder:text-slate-500 px-4 py-3 focus:outline-none transition-all disabled:opacity-50 ${
                  touched.message && errors.message
                    ? "border-2 border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border border-slate-600 focus:ring-2 focus:ring-cyan-500"
                }`}
              ></textarea>
              {touched.message && errors.message && (
                <p className="text-red-500 text-sm mt-2">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="rounded-2xl px-6 py-3 bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition-colors duration-300 disabled:bg-cyan-600 disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}