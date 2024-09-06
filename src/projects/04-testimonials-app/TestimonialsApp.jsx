import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

export default function TestimonialsApp() {
  
  const [testimonials, setTestimonials] = useState();
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [testimonials]);

  return (
    <div className="container text-center m-auto">
      <Title text={"Testimonials App"} />
      <Button
        text={"Posts"}
        btnClass={"btn-info"}
        icon={<BsFillFileEarmarkPostFill />}
        onClick={() => setTestimonials("Posts")}
      />
      <Button
        text={"Users"}
        btnClass={"btn-info"}
        icon={<FaUserAlt />}
        onClick={() => setTestimonials("Users")}
      />
      <Button
        text={"Comments"}
        btnClass={"btn-info"}
        icon={<BiCommentDetail />}
        onClick={() => setTestimonials("Comments")}
      />
      <Title
        classes={"subtitle text-primary"}
        text={!testimonials ? "select from above" : testimonials}
      />
      {/* {!items
        ? null
        : items.map((items) => {
            return <div className="card card-primary mb-2">item</div>;
          })} //this items.map is causing problems */}
    </div>
  );
}
