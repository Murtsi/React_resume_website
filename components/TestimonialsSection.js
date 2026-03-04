import { useInView } from 'react-intersection-observer';
import { StarIcon } from '@heroicons/react/24/solid';

export default function TestimonialsSection() {
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({ triggerOnce: true });

  const testimonials = [
    {
      quote: "Antti demonstrated exceptional technical proficiency in fiber optic network deployment. His attention to detail and problem-solving abilities ensured all infrastructure upgrades were completed on schedule and within specifications.",
      author: "Network Operations Manager",
      role: "Leading Fiber Optic Company",
      initials: "NOM"
    },
    {
      quote: "Working with Antti on production optimization was invaluable. He consistently identified efficiency improvements and maintained high standards even under pressure. His collaborative approach made complex projects seamless.",
      author: "Operations Supervisor",
      role: "Olvi Production Facility",
      initials: "OS"
    },
    {
      quote: "Antti's rapid problem-solving skills and customer engagement made a significant impact on our technical support operations. He has the technical depth combined with excellent communication abilities that make him invaluable to any team.",
      author: "Technical Director",
      role: "Manufacturing Operations",
      initials: "TD"
    }
  ];

  return (
    <section id="testimonials" ref={testimonialsRef} className={`py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 ${testimonialsInView ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Colleagues Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Testimonials from professionals across fiber optics, automation, and production environments.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-2xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 dark:text-gray-200 mb-8 italic leading-relaxed text-sm">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-gray-200 dark:border-slate-700 pt-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
