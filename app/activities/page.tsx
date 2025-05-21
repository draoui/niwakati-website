"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, BookOpen, Globe, HeartHandshake, Lightbulb, Megaphone } from "lucide-react";

// Sample data for activities
const activities = [
  {
    id: "cultural-exchange",
    title: "Cultural Exchange Programs",
    description: "Our cultural exchange programs bring together people from diverse backgrounds to share and learn from each other's cultures. Through workshops, events, and collaborative projects, participants gain a deeper understanding and appreciation of different cultural perspectives.",
    longDescription: "Cultural exchange is at the heart of building inclusive communities. Our programs include cultural festivals, language exchange meetups, cooking workshops featuring cuisines from around the world, and collaborative art projects. These activities create spaces for meaningful interaction and learning, breaking down barriers and fostering connections across cultural divides.",
    impact: "Over 500 participants annually, representing more than 30 different cultural backgrounds",
    icon: Globe,
    imageUrl: "https://i.ytimg.com/vi/8kaXAsopyB8/maxresdefault.jpg"
  },
  {
    id: "youth-empowerment",
    title: "Youth Empowerment Workshops",
    description: "Our youth empowerment workshops equip young people with the skills, knowledge, and confidence to become agents of positive change in their communities. These workshops focus on leadership development, critical thinking, and social responsibility.",
    longDescription: "Young people are the leaders of tomorrow, and we believe in investing in their potential today. Our workshops cover topics such as leadership skills, public speaking, project management, digital literacy, and social entrepreneurship. We create a supportive environment where young people can explore their interests, develop their talents, and build their confidence.",
    impact: "Over 300 young people empowered annually, with 85% reporting increased confidence and leadership skills",
    icon: Lightbulb,
    imageUrl: "https://i.pinimg.com/originals/f3/ca/be/f3cabed2f26b9cca3996613f593fa9a1.jpg"
  },
  {
    id: "community-integration",
    title: "Community Integration Projects",
    description: "Our community integration projects help newcomers integrate into the local community through language classes, job training, and social events. These projects aim to create a sense of belonging and enable newcomers to participate fully in community life.",
    longDescription: "Moving to a new country or community can be challenging. Our integration projects provide practical support and social connections to help newcomers navigate their new environment. We offer language classes, cultural orientation sessions, job search assistance, and mentoring programs. We also organize social events that bring together newcomers and long-time residents, fostering mutual understanding and friendship.",
    impact: "Over 200 newcomers supported annually, with 70% reporting improved integration and sense of belonging",
    icon: HeartHandshake,
    imageUrl: "https://www.continentalpress.com/wp-content/uploads/2022/02/shutterstock_394232878-1-1536x1025.jpg"
  },
  {
    id: "diversity-education",
    title: "Diversity Education Programs",
    description: "Our diversity education programs promote understanding and respect for diversity in schools, workplaces, and community organizations. Through workshops, training sessions, and educational resources, we help create more inclusive environments.",
    longDescription: "Education is a powerful tool for promoting diversity and inclusion. Our programs are designed to increase awareness of diversity issues, challenge stereotypes and biases, and develop skills for inclusive communication and collaboration. We work with schools, businesses, and community organizations to create customized programs that meet their specific needs and goals.",
    impact: "Over 20 organizations and 1,000 individuals reached annually through our diversity education programs",
    icon: BookOpen,
    imageUrl: "https://i.pinimg.com/originals/c4/28/ab/c428ab8ea5ae60f63c1a06fe1e8d878b.jpg"
  },
  {
    id: "advocacy-campaigns",
    title: "Advocacy Campaigns",
    description: "Our advocacy campaigns raise awareness about diversity and inclusion issues and advocate for policies and practices that promote equality and social justice. We work with partners to amplify marginalized voices and create systemic change.",
    longDescription: "Advocacy is essential for creating lasting change. Our campaigns focus on issues such as equal access to education and employment, anti-discrimination policies, and inclusive representation in media and leadership. We use various strategies, including public awareness campaigns, policy research and recommendations, coalition building, and direct engagement with decision-makers.",
    impact: "Contributed to policy changes in 5 local organizations and raised awareness among thousands through our campaigns",
    icon: Megaphone,
    imageUrl: "https://as1.ftcdn.net/v2/jpg/06/68/83/72/1000_F_668837245_gCJxHGzUeIopydAID6p9cchXtpTckUJN.jpg"
  },
  {
    id: "intercultural-dialogue",
    title: "Intercultural Dialogue Forums",
    description: "Our intercultural dialogue forums create spaces for open and respectful conversation about cultural differences, shared values, and common challenges. These forums help build understanding and cooperation across cultural divides.",
    longDescription: "Dialogue is a powerful tool for building bridges between different communities. Our forums bring together people from diverse backgrounds to discuss important issues, share perspectives, and find common ground. We use various formats, including panel discussions, community conversations, and structured dialogue processes, to facilitate meaningful exchange and mutual learning.",
    impact: "Over 12 dialogue forums held annually, with 90% of participants reporting increased understanding of different perspectives",
    icon: Users,
    imageUrl: "https://live.staticflickr.com/65535/48190743036_35f460edab_h.jpg"
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ActivitiesPage = () => {
  // Hero section animations
  const heroControls = useAnimation();
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Activities section animations
  const activitiesControls = useAnimation();
  const [activitiesRef, activitiesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (heroInView) heroControls.start("visible");
    if (activitiesInView) activitiesControls.start("visible");
  }, [
    heroInView, heroControls,
    activitiesInView, activitiesControls
  ]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        variants={fadeInUp}
        className="relative py-24 bg-primary/10"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="text-primary">Activities</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl max-w-3xl mx-auto mb-8 text-muted-foreground"
          >
            Discover the various programs and initiatives we offer to promote diversity and inclusion in our community.
          </motion.p>
        </div>
      </motion.section>

      {/* Activities Section */}
      <motion.section
        ref={activitiesRef}
        initial="hidden"
        animate={activitiesControls}
        variants={staggerContainer}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                id={activity.id}
                variants={fadeInUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <activity.icon size={24} className="text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">{activity.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {activity.description}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {activity.longDescription}
                  </p>
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Impact</h3>
                    <p className="text-muted-foreground">
                      {activity.impact}
                    </p>
                  </div>
                </div>
                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={activity.imageUrl}
                      alt={activity.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
                  <div className="absolute -top-6 -right-6 w-48 h-48 bg-secondary/10 rounded-lg -z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ActivitiesPage;