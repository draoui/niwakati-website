"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Heart, Award, Globe, Target, Sparkles } from "lucide-react";

// Sample data for team members
const teamMembers = [
  {
    id: "1",
    name: "Marie Dupont",
    role: "Founder & Executive Director",
    bio: "Marie founded Ni Wakati ASBL with a vision to create a more inclusive society. With over 15 years of experience in community development, she leads the organization with passion and dedication.",
    imageUrl: "https://i.pinimg.com/originals/ab/c7/43/abc743c2c621cb756e83875f18c3765f.jpg"
  },
  {
    id: "2",
    name: "Jean Mbeki",
    role: "Program Director",
    bio: "Jean oversees all of Ni Wakati's programs and initiatives. His background in social work and community organizing helps ensure our programs create meaningful impact.",
    imageUrl: "https://i.pinimg.com/originals/74/fc/5f/74fc5f9c73880ff75b301babec974cf4.jpg"
  },
  {
    id: "3",
    name: "Sophie Nguyen",
    role: "Community Outreach Coordinator",
    bio: "Sophie builds and maintains relationships with community partners and volunteers. Her communication skills and community connections are invaluable to our work.",
    imageUrl: "https://thumbs.dreamstime.com/b/professional-asian-business-woman-standing-confidently-smiling-office-257396589.jpg"
  },
  {
    id: "4",
    name: "Ahmed Hassan",
    role: "Education Specialist",
    bio: "Ahmed develops and implements educational programs that promote cultural understanding and diversity. His background in education brings expertise to our workshops.",
    imageUrl: "https://i.pinimg.com/originals/82/3b/09/823b0995ee3e412158d72d9f58c28d41.jpg"
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

const AboutPage = () => {
  // Hero section animations
  const heroControls = useAnimation();
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Mission section animations
  const missionControls = useAnimation();
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Values section animations
  const valuesControls = useAnimation();
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Team section animations
  const teamControls = useAnimation();
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (heroInView) heroControls.start("visible");
    if (missionInView) missionControls.start("visible");
    if (valuesInView) valuesControls.start("visible");
    if (teamInView) teamControls.start("visible");
  }, [
    heroInView, heroControls,
    missionInView, missionControls,
    valuesInView, valuesControls,
    teamInView, teamControls
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
            About <span className="text-primary">Ni Wakati</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl max-w-3xl mx-auto mb-8 text-muted-foreground"
          >
            Learn about our organization, our mission, and the team behind Ni Wakati ASBL.
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        ref={missionRef}
        initial="hidden"
        animate={missionControls}
        variants={staggerContainer}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
              <p className="text-muted-foreground mb-6">
                Ni Wakati ASBL was founded in 2015 with a simple yet powerful vision: to create a society where diversity is celebrated and everyone feels included and valued. The name "Ni Wakati" comes from Swahili and means "It's Time" – reflecting our belief that it's time for positive change in how we approach diversity and inclusion.
              </p>
              <p className="text-muted-foreground mb-6">
                What began as a small grassroots initiative has grown into a vibrant organization that runs multiple programs and reaches thousands of people each year. Our growth has been driven by a passionate team and dedicated volunteers who share our commitment to creating a more inclusive society.
              </p>
              <p className="text-muted-foreground">
                Today, Ni Wakati ASBL continues to expand its reach and impact, developing innovative programs that address the evolving needs of our diverse community. We remain committed to our founding principles while adapting our approaches to create meaningful and lasting change.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="order-1 lg:order-2 relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://i.pinimg.com/originals/3f/db/2d/3fdb2d5283b320a80fb39ca64f562951.jpg"
                  alt="Ni Wakati team and community"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-secondary/10 rounded-lg -z-10"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        initial="hidden"
        animate={missionControls}
        variants={staggerContainer}
        className="py-20 bg-muted"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              variants={fadeInUp}
              className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-all card-hover"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To promote diversity and inclusion through education, community engagement, and cultural exchange, creating spaces where everyone feels valued and empowered to participate fully in society.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-all card-hover"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Sparkles size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A society where diversity is celebrated, where people from all backgrounds have equal opportunities to thrive, and where cross-cultural understanding fosters peace and collaboration.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section
        ref={valuesRef}
        initial="hidden"
        animate={valuesControls}
        variants={staggerContainer}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              These values guide our work and shape our approach to promoting diversity and inclusion.
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
              <h3 className="text-xl font-bold mb-4">Respect</h3>
              <p className="text-muted-foreground">
                We honor the dignity, experiences, and perspectives of all individuals, recognizing the inherent value in our differences.
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
                We create environments where everyone feels welcome, valued, and empowered to participate fully.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-all text-center card-hover"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Diversity</h3>
              <p className="text-muted-foreground">
                We celebrate the rich tapestry of human experience and recognize that our differences make us stronger.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-all text-center card-hover"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for the highest standards in all our programs and initiatives, continuously learning and improving.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-all text-center card-hover md:col-span-2 lg:col-span-1"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of partnership and work together with individuals, organizations, and communities to create positive change.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Team Section */}
      <motion.section
        ref={teamRef}
        initial="hidden"
        animate={teamControls}
        variants={staggerContainer}
        className="py-20 bg-primary/5"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              Our dedicated team brings diverse skills, experiences, and perspectives to our work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all card-hover"
              >
                <div className="relative h-64">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;