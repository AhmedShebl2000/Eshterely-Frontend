import { useFormik } from "formik";
import AcceptTerms from "./AcceptTerms";
import { billingAddressSchema } from "../../schemas";
import formToasts from "../../utils/formToasts";

function DiffDeliveryAddress({
  children,
  showConsent,
  anotherDelieveryFormData,
  setAnotherDelieveryFormData,
}) {
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    touched,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "France",
      addressLine: "",
      city: "",
      postalCode: "",
      phoneNumber: "",
    },
    validationSchema: billingAddressSchema,
    onSubmit: (values) => {
      setAnotherDelieveryFormData(values);
      console.log("Another Form submitted:", values);
      resetForm();
      formToasts.success("Form submitted successfully!");
    },
  });

  return (
    <div
      className={`bg-white rounded-lg shadow-sm ${showConsent ? "p-6" : "p-4"}`}
    >
      <h2 className="text-lg font-semibold mb-6">{children}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              id="firstName"
              className={`w-full px-3 py-2 rounded border focus:outline-none focus:ring-1 ${
                errors.firstName && touched.firstName
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-black focus:ring-black"
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

          {/* Last Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              id="lastName"
              className={`w-full px-3 py-2 rounded border focus:outline-none focus:ring-1 ${
                errors.lastName && touched.lastName
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-black focus:ring-black"
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
        </div>

        {/* Email (full width) */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            className={`w-full px-3 py-2 rounded border focus:outline-none focus:ring-1 ${
              errors.email && touched.email
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:border-black focus:ring-black"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Country */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Country</label>
            <select
              id="country"
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:border-black focus:ring-black"
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

          {/* City */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">City</label>
            <input
              id="city"
              className={`w-full px-3 py-2 rounded border focus:outline-none focus:ring-1 ${
                errors.city && touched.city
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-black focus:ring-black"
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
        </div>

        {/* Address Line (full width) */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Address Line
          </label>
          <input
            id="addressLine"
            className={`w-full px-3 py-2 rounded border focus:outline-none focus:ring-1 ${
              errors.addressLine && touched.addressLine
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:border-black focus:ring-black"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Postal Code */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Postal Code
            </label>
            <input
              id="postalCode"
              className={`w-full px-3 py-2 rounded border focus:outline-none focus:ring-1 ${
                errors.postalCode && touched.postalCode
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-black focus:ring-black"
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

          {/* Mobile Phone */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Mobile Phone
            </label>
            <input
              id="phoneNumber"
              className={`w-full px-3 py-2 rounded border focus:outline-none focus:ring-1 ${
                errors.phoneNumber && touched.phoneNumber
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-black focus:ring-black"
              }`}
              type="text"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <p className="text-sm text-red-600">{errors.phoneNumber}</p>
            )}
          </div>
        </div>
        {/* Submit Button */}

        {showConsent && <AcceptTerms />}

        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors mt-4 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default DiffDeliveryAddress;
