import { useFormik } from "formik";
import AcceptTerms from "./AcceptTerms";
import { billingAddressSchema } from "../../schemas";

function onSubmit() {
  console.log("submitted");
}

function InformationForm({ children, showConsent }) {
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        country: "France",
        addressLine: "",
        city: "",
        postalCode: "",
        mobilePhone: "",
      },
      validationSchema: billingAddressSchema,
      onSubmit,
    });

  console.log(values);

  return (
    <div className={`bg-[#FAFAFA] ${showConsent ? "p-14" : ""} `}>
      <h1 className="font-semibold tracking-widest mb-10">{children}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-md font-semibold">First Name</label>
          <input
            id="firstName"
            className={`ring-1 ring-slate-200 rounded-sm p-1 ${
              errors.firstName && touched.firstName && "border border-red-600"
            }`}
            type="text"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && touched.firstName && (
            <p className="text-sm text-red-600">{errors.firstName}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-md font-semibold">Last Name</label>
          <input
            id="lastName"
            className={`ring-1 ring-slate-200 rounded-sm p-1 ${
              errors.lastName && touched.lastName && "border border-red-600"
            }`}
            type="text"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && touched.lastName && (
            <p className="text-sm text-red-600">{errors.lastName}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-md font-semibold">Email</label>
          <input
            id="email"
            className={`ring-1 ring-slate-200 rounded-sm p-1  ${
              errors.email && touched.email && "border border-red-600"
            }`}
            type="text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="text-sm text-red-600">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-md font-semibold">Country</label>
          <select
            id="country"
            className="ring-1 ring-slate-200 p-1"
            value={values.country}
            onChange={handleChange}
          >
            <option>France</option>
            <option>USA</option>
            <option>UAE</option>
            <option>UK</option>
            <option>Egypt</option>
            <option>Germany</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-md font-semibold">Address Line</label>
          <input
            id="addressLine"
            className={`ring-1 ring-slate-200 rounded-sm p-1  ${
              errors.addressLine &&
              touched.addressLine &&
              "border border-red-600"
            }`}
            type="text"
            value={values.addressLine}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.addressLine && touched.addressLine && (
            <p className="text-sm text-red-600">{errors.addressLine}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-md font-semibold">City </label>
          <input
            id="city"
            className={`ring-1 ring-slate-200 rounded-sm p-1  ${
              errors.city && touched.city && "border border-red-600"
            }`}
            type="text"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.city && touched.city && (
            <p className="text-sm text-red-600">{errors.city}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-md font-semibold">Postal Code </label>
          <input
            id="postalCode"
            className={`ring-1 ring-slate-200 rounded-sm p-1  ${
              errors.postalCode && touched.postalCode && "border border-red-600"
            }`}
            type="text"
            value={values.postalCode}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.postalCode && touched.postalCode && (
            <p className="text-sm text-red-600">{errors.postalCode}</p>
          )}
        </div>
        <div className={`flex flex-col gap-1 ${showConsent ? "mb-1" : "mb-5"}`}>
          <label className="text-md font-semibold">Mobile Phone </label>
          <input
            id="mobilePhone"
            className={`ring-1 ring-slate-200 rounded-sm p-1  ${
              errors.mobilePhone &&
              touched.mobilePhone &&
              "border border-red-600"
            }`}
            type="text"
            value={values.mobilePhone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.mobilePhone && touched.mobilePhone && (
            <p className="text-sm text-red-600">{errors.mobilePhone}</p>
          )}
        </div>
      </form>
      {showConsent && <AcceptTerms />}
    </div>
  );
}

export default InformationForm;
