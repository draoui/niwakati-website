"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Users, Heart, Calendar, Award, ChevronRight } from "lucide-react";

// Sample data for the homepage
const activities = [
  {
    id: "1",
    title: "Cultural Exchange Programs",
    description: "Bringing together people from diverse backgrounds to share and learn from each other's cultures.",
    imageUrl: "https://i.ytimg.com/vi/8kaXAsopyB8/maxresdefault.jpg"
  },
  {
    id: "2",
    title: "Youth Empowerment Workshops",
    description: "Equipping young people with skills and knowledge to become agents of positive change in their communities.",
    imageUrl: "https://i.pinimg.com/originals/31/77/cc/3177cc83e9380d88896ed6aad1388bb0.jpg"
  },
  {
    id: "3",
    title: "Community Integration Projects",
    description: "Helping newcomers integrate into the local community through language classes, job training, and social events.",
    imageUrl: "https://img.freepik.com/premium-photo/group-diverse-people-participating-community-engagement-project_978035-1647.jpg"
  }
];

const testimonials = [
  {
    id: "1",
    name: "Marie Dubois",
    role: "Program Participant",
    content: "Participating in Ni Wakati's cultural exchange program opened my eyes to new perspectives and helped me build lasting friendships with people from different backgrounds.",
    imageUrl: "https://i.pinimg.com/736x/b2/35/29/b2352943fca913848a0cfad872d45e53.jpg"
  },
  {
    id: "2",
    name: "Ahmed Hassan",
    role: "Volunteer",
    content: "Volunteering with Ni Wakati has been one of the most rewarding experiences of my life. I've learned so much about different cultures while making a positive impact in my community.",
    imageUrl: "https://c8.alamy.com/comp/B74WAT/portrait-of-a-young-middle-eastern-man-smiling-B74WAT.jpg"
  },
  {
    id: "3",
    name: "Sofia Rodriguez",
    role: "Community Partner",
    content: "Our partnership with Ni Wakati has allowed us to reach more diverse communities and create more inclusive programs. Their dedication to diversity and inclusion is truly inspiring.",
    imageUrl: "https://i.pinimg.com/originals/c0/96/da/c096dae6f00c4d9d86fde43e010baf3d.jpg"
  }
];

const upcomingEvents = [
  {
    id: "1",
    title: "Diversity in Action Workshop",
    date: "June 15, 2023",
    location: "Brussels Community Center",
    imageUrl: "https://www.phoenix.edu/professional-development/blog/wp-content/uploads/2023/06/iStock-1392016982-1024x683.jpg"
  },
  {
    id: "2",
    title: "Cultural Festival",
    date: "July 8-10, 2023",
    location: "City Park, Brussels",
    imageUrl: "https://images.pexels.com/photos/15473418/pexels-photo-15473418/free-photo-of-dancer-in-multi-colored-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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

const HomePage = () => {
  // Hero section animations
  const heroControls = useAnimation();
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Mission section animations
  const missionControls = useAnimation();
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Activities section animations
  const activitiesControls = useAnimation();
  const [activitiesRef, activitiesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Testimonials section animations
  const testimonialsControls = useAnimation();
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Events section animations
  const eventsControls = useAnimation();
  const [eventsRef, eventsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // CTA section animations
  const ctaControls = useAnimation();
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (heroInView) heroControls.start("visible");
    if (missionInView) missionControls.start("visible");
    if (activitiesInView) activitiesControls.start("visible");
    if (testimonialsInView) testimonialsControls.start("visible");
    if (eventsInView) eventsControls.start("visible");
    if (ctaInView) ctaControls.start("visible");
  }, [
    heroInView, heroControls,
    missionInView, missionControls,
    activitiesInView, activitiesControls,
    testimonialsInView, testimonialsControls,
    eventsInView, eventsControls,
    ctaInView, ctaControls
  ]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        variants={fadeInUp}
        className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-r from-primary/90 to-secondary/90 text-white"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://as2.ftcdn.net/v2/jpg/05/06/75/11/1000_F_506751155_fJ5Ko5T0wsTH7Q9VNwEgo6J81da8arlD.jpg"
            alt="Diverse community"
            fill
            style={{ objectFit: "cover" }}
            className="mix-blend-overlay opacity-40"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 py-24 text-center">
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Ni Wakati <span className="text-secondary">Diversité en action</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 opacity-90"
          >
            Promoting diversity, inclusion, and community engagement through innovative programs and initiatives.
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/about" className="btn-primary flex items-center justify-center gap-2">
              Learn More <ArrowRight size={18} />
            </Link>
            <Link href="/get-involved" className="btn-outline bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary flex items-center justify-center gap-2">
              Get Involved <Users size={18} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        ref={missionRef}
        initial="hidden"
        animate={missionControls}
        variants={staggerContainer}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              At Ni Wakati, we believe in the power of diversity to enrich communities and create a more inclusive society. Our mission is to promote understanding, respect, and collaboration among people from all backgrounds.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeInUp}
              className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-all text-center card-hover"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Diversity</h3>
              <p className="text-muted-foreground">
                We celebrate the unique perspectives, experiences, and cultures that make our community vibrant and dynamic.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-all text-center card-hover"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Inclusion</h3>
              <p className="text-muted-foreground">
                We create spaces where everyone feels welcome, valued, and empowered to participate fully in community life.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-all text-center card-hover"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Empowerment</h3>
              <p className="text-muted-foreground">
                We provide resources, education, and opportunities that enable individuals to reach their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Activities Section */}
      <motion.section
        ref={activitiesRef}
        initial="hidden"
        animate={activitiesControls}
        variants={staggerContainer}
        className="py-20 bg-muted"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Activities</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              Discover the various programs and initiatives we offer to promote diversity and inclusion in our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                variants={fadeInUp}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all card-hover"
              >
                <div className="relative h-48">
                  <Image
                    src={activity.imageUrl}
                    alt={activity.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                  <p className="text-muted-foreground mb-4">{activity.description}</p>
                  <Link 
                    href={`/activities#${activity.id}`}
                    className="text-primary font-medium flex items-center hover:underline"
                  >
                    Learn more <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Link href="/activities" className="btn-primary inline-flex items-center">
              View All Activities <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        initial="hidden"
        animate={testimonialsControls}
        variants={staggerContainer}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              Hear from people who have been impacted by our programs and initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-all card-hover"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Upcoming Events Section */}
      <motion.section
        ref={eventsRef}
        initial="hidden"
        animate={eventsControls}
        variants={staggerContainer}
        className="py-20 bg-primary/5"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              Join us at our upcoming events to connect with our community and learn more about our work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
                variants={fadeInUp}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col md:flex-row card-hover"
              >
                <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center mb-3">
                    <Calendar size={18} className="text-primary mr-2" />
                    <span className="text-muted-foreground">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.location}</p>
                  <Link 
                    href={`/events#${event.id}`}
                    className="text-primary font-medium flex items-center hover:underline"
                  >
                    Learn more <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Link href="/events" className="btn-primary inline-flex items-center">
              View All Events <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={ctaControls}
        variants={fadeInUp}
        className="py-20 bg-gradient-to-r from-primary to-secondary text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90">
            Join us in our mission to promote diversity and inclusion in our community. There are many ways to get involved and make a positive impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved" className="btn-outline bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary flex items-center justify-center gap-2">
              Volunteer With Us <Users size={18} />
            </Link>
            <Link href="/contact" className="btn-outline bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary flex items-center justify-center gap-2">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;