import Image from "next/image";

export default function SkillCard({ image, title, description, items, isVisible }) {
  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } bg-white dark:bg-slate-800`}
    >
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20 rounded-xl">
            <Image
              src={image}
              alt={`${title} icon`}
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 font-medium">
          {description}
        </p>

        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="w-5 h-5 rounded-full bg-primary-500 text-white text-xs flex items-center justify-center flex-shrink-0 font-bold">
                •
              </span>
              <span className="text-gray-700 dark:text-gray-200">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
