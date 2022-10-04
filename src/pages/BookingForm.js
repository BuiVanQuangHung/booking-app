import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../common/FormikControl";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import "../components/stylesPage/bookingform.scss";
import Destination from "../components/component/HomeComponent/Destination";

function BookingForm() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    content: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: Yup.string().required("Required"),
    }),
    content: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <>
      <div className="container-form">
        <div className="tour-detail">
          <h1>Nhatrang-tour</h1>
          <p>
            <span>
              <AccessTimeIcon />
            </span>
            Duration: 4 DAYS 3 NIGHT
          </p>
          <p>
            <span>
              <EventIcon />
            </span>
            Departure Date: Every Thursday
          </p>
          <p>
            <span>
              <AirplanemodeActiveIcon />
            </span>
            Transport: VIETJET AIR
          </p>
          <p>
            <span>
              <HomeWorkIcon />
            </span>
            Hotel: 3*
          </p>
          <p>
            <span>
              <LightbulbIcon />
            </span>
            Code: TB4N3D-TP
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <input placeholder="Nhatrang-tour" className="place" />
                <FormikControl
                  control="input"
                  type="text"
                  label="Full name"
                  name="name"
                />
                <FormikControl
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="Phone number"
                  name="phone"
                />
                <FormikControl
                  control="textarea"
                  type="textarea"
                  label="Content"
                  name="content"
                  className="textarea"
                />
                <button type="submit" disabled={!formik.isValid}>
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
      <Destination />
    </>
  );
}
export default BookingForm;
