export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  isDoctorSpecific?: boolean;
  isBhubaneswarOrCare?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "sucharita-c",
    name: "Sucharita C",
    rating: 5,
    text: "He is by far the best dentist I have come across in Bhubaneswar. Well behaved, extremely talented , and conducts almost painless procedures, no unnecessary interventions. I had a wisdom tooth extraction with him , which was completely painless.",
    isDoctorSpecific: true,
    isBhubaneswarOrCare: true,
  },
  {
    id: "bhaswati-ghosh",
    name: "Bhaswati Ghosh",
    rating: 5,
    text: "We went to Dr. Sauvik and Dr. Neha for a root canal procedure and it was very nicely done. They explained everything in detail and the entire procedure and post procedure healing was issue free and pain free. Besides being excellent at their job they both have a very sunny and jolly personality which makes the entire experience wholesome. I would highly recommend them for any kind of dental procedures",
    isDoctorSpecific: true,
    isBhubaneswarOrCare: true,
  },
  {
    id: "anirudha-majhi",
    name: "Anirudha Majhi",
    rating: 5,
    text: "I was very impressed with the expertise of the dentists. They were not only highly skilled but also very patient-focused. They listened carefully to my concerns and recommended the best course of treatment that was not only effective but also cost-effective. It was clear they were looking for long-term solutions to my dental needs, which I greatly appreciated.",
    isDoctorSpecific: false,
    isBhubaneswarOrCare: false,
  },
  {
    id: "komalprit-kaur",
    name: "Komalprit Kaur",
    rating: 5,
    text: "I had done my dental treatment from care itself and it was a great experience. The doctor's behavior was best and his hand techniques were superb. I was treated by Dr.Sauvik singha and Dr. Neha Mohanty. They treated me so well and there behaviour was nice as well. They keep me in constant care. Post operation too whenever we contact them they guide very politely. Very much grateful to them.",
    isDoctorSpecific: true,
    isBhubaneswarOrCare: true,
  },
  {
    id: "rajashree-nayak",
    name: "Rajashree Nayak",
    rating: 5,
    text: "The treatment planning was customised according to my needs. They considered all aspects and explained all the pros and cons before making a decision. All the doctors and other staff members have been very polite and warm throughout the process. The behaviour has been professional yet very charming. The appointments were tailored according to my needs and the response of the team to any emergent need was immediate. Most importantly, they take good care to avoid any post-op complications. And they always advise a rational and economic approach",
    isDoctorSpecific: false,
    isBhubaneswarOrCare: true,
  },
  {
    id: "kesav-rathi",
    name: "Kesav Rathi",
    rating: 5,
    text: "Wonderful experience and quality treatment with proper guidance and limited medication. Treatment was done during covid time and I m very much satisfied..",
    isDoctorSpecific: false,
    isBhubaneswarOrCare: false,
  },
];
