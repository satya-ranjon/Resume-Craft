import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

interface TestimonialsItem {
  id: number;
  name: string;
  review: string;
  image: string;
  star: number;
  date: string;
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialsItem[]>([]);

  useEffect(() => {
    fetch("/src/data/testimonials.json")
      .then((response) => response.json())
      .then((data: TestimonialsItem[]) => setTestimonials(data))
      .catch((error) =>
        console.error("Error fetching testimonials data:", error)
      );
  }, []);

  return (
    <div className="my-20">
      <h1 className="text-2xl text-center text-c-primary font-bold">Testimonials</h1>
      <h2 className="text-5xl text-center font-semibold mt-3">Reviewed By The Community</h2>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 ">
        {testimonials.map((testimonial) => (
          <div 
          key={testimonial.id} 
          testimonial={testimonial} 
          className="bg-[#C8D7EF] p-8 rounded-xl"
          >
            <Rating
                style={{ maxWidth: 120 }}
                value={testimonial.star}
                readOnly
              />
            <h2 className="text-justify my-8">{testimonial.review}</h2>
            <div className="flex gap-5 items-center ">
              <img className="w-[60px] rounded-full" src={testimonial.image} alt="" />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm">{testimonial.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
